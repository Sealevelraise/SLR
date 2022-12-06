// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract AddProject {

    //definition of event, will the triggered when new project is added
    event ProjectAdded(uint id, string name, string state, uint amount, uint startDate, uint endDate);

    struct Project {
        string name;
        string state;
        uint amount;
        uint startDate;
        uint endDate;
    }
    //Array which contains all projects, saved on the blockchain
    Project[] public projects;
    //Mapping a project to the wallet of the person which added this project, saved on the blockchain
    mapping (uint => address) public projectToOwner;

    function addProject(string memory _name, string memory _state, uint _amount) public {
        //current timestamp as startDate
        uint startDate = block.timestamp;
        uint endDate = startDate + 12 weeks;
        //add new project to array
        projects.push(Project(_name, _state, _amount, startDate, endDate));
        //add mapping between project and wallet
        projectToOwner[projects.length-1] = msg.sender;
        //emit event "ProjectAdded"
        emit ProjectAdded(projects.length-1, _name, _state, _amount, startDate, endDate);
    } 

    function getNumberOfProjects() public view returns(uint) {
        return projects.length;
    }

}
