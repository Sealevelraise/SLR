// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Donate.sol";
import "./AddProject.sol";


/// @title Vote for the project the user wants to donate the money to
/// @author Josua Benz
/// @notice With this contract, you can vote for the project you want to donate the money to
/// @dev uses the userHasVoted mapping from Donate.sol
contract Vote{
    
    //mapping if a user has voted for a project, saved  on the blockchain
    mapping(address => uint) public userHasVoted;

    struct VoteForProject {
        address user;
        uint projectId;
    }
    //list with all the votes, saved  on the blockchain
    VoteForProject[] public votes;

    function readUserHasDonated(address _donateContract) public  view returns(uint){
        Donate d = Donate(_donateContract);
        uint donated = d.getUserHasDonated(msg.sender);
        return donated;
    }

    function sendProjectVote(address _addProjectContract, uint _projectId) public {
        AddProject a = AddProject(_addProjectContract);
        a.setProjectVote(_projectId);
    }


    
    /// @notice Vote for a project in SeaLevelRaise. The user is not allowed to vote more than one time and only if they have donated.
    /// @dev uses userHasDonated from Contract Donate.sol
    /// @param _projectId The ID of the Project the user wants to vote for.
    function voteForProject(uint _projectId, address _donateContract,address _addProjectContract) public {
        //the user is required to have donated and to not have voted already
        uint userHasDonated = readUserHasDonated(_donateContract);
        require(userHasDonated == 1);
        require(userHasVoted[msg.sender] != 1);

        //add this vote to the list of votes
        votes.push(VoteForProject(msg.sender, _projectId));
        sendProjectVote(_addProjectContract, _projectId);
        //mapping, that this user has voted
        userHasVoted[msg.sender] = 1;
    }

}
