const AddProject = artifacts.require("./AddProject.sol");
const truffleAssert = require('truffle-assertions');

contract("AddProject", (accounts) => {
    //instance for test contract
    let contract;
    let account;
    beforeEach('should setup the contract instance and account', async () => {
        // Retreive the deployed contract
        contract = await AddProject.new();
        account = accounts[0];
    });

    it("test to add a new project", async () => {
       //create new project
       let name = 'Project 1';
       let state = 'Kap Verde';
       let amount = 100;
       //call addProject()
       let result = await contract.addProject(name,state,amount, {from: account});
       //check if project was created
       let numProjects = await contract.getNumberOfProjects();
       assert.equal(numProjects.toString(), parseInt(1));
       truffleAssert.eventEmitted(result, 'ProjectAdded');
    });

    it("test to add a new project when user already has one", async () => {
        //create new project
        let firstProjectName = 'Project 1';
        let firstProjectState = 'Kap Verde';
        let firstProjectsAmount = 100;
        //call addProject() for the first project
        await contract.addProject(firstProjectName, firstProjectState, firstProjectsAmount, { from: account });
        
        //create second project
        let secondProjectName = 'Project 2';
        let secondProjectState = 'Kap Verde';
        let secondProjectAmount = 200;
        await truffleAssert.reverts(contract.addProject(secondProjectName, secondProjectState, secondProjectAmount, { from: account }));
        let numProjects = await contract.getNumberOfProjects();
        assert.equal(numProjects.toString(), parseInt(1));
    });

    it("test to get project details from existing project with correct id", async () => {
        //create new project
        let name = 'Project 1';
        let state = 'Kap Verde';
        let amount = 100;
        //call addProject()
        await contract.addProject(name, state, amount, { from: account });
       let project = await contract.getProjectDetails(0);
       assert.equal(project.name.toString(), name);
       assert.equal(project.state.toString(), state);
       assert.equal(project.amount.toString(), amount);
    });

    //@dev Add check for negative number to the require of getProjectDetails()
    it("test to get project details from existing project with invalid neagtive id", async () => {
        //create new project
        let name = 'Project 1';
        let state = 'Kap Verde';
        let amount = 100;
        //call addProject()
        let result = await contract.addProject(name, state, amount, { from: account });
        await truffleAssert.fails(contract.getProjectDetails(-1));
    });

    it("test to get project details from existing project with id > length", async () => {
        //create new project
        let name = 'Project 1';
        let state = 'Kap Verde';
        let amount = 100;
        //call addProject()
        let result = await contract.addProject(name, state, amount, { from: account });
        await truffleAssert.reverts(contract.getProjectDetails(1), 'project id does not exist');
    });

    it("test to get project details from empty project list with id > length", async () => {
       await truffleAssert.reverts(contract.getProjectDetails(1), 'project id does not exist');
    });

    it("test to get project details from existing project without id", async () => {
        //create new project
        let name = 'Project 1';
        let state = 'Kap Verde';
        let amount = 100;
        //call addProject()
        let result = await contract.addProject(name, state, amount, { from: account });
        await truffleAssert.fails(contract.getProjectDetails());
    });

    /* @dev Modifiy the require in getProjectDetails() to ckeck for null
    it("test to get project details from existing project with id = null", async () => {
        //create new project
        let name = 'Project 1';
        let state = 'Kap Verde';
        let amount = 100;
        //call addProject()
        let result = await contract.addProject(name, state, amount, { from: account });
        //check if project was created
        await truffleAssert.fails(contract.getProjectDetails(null));
    });*/

    //@dev Add a require to addProject() that amout has to be >0
    it("test to add a project with an amount of 0", async () => {
        //create new project
        let name = 'Project 1';
        let state = 'Kap Verde';
        let amount = 0;
        //call addProject()
        let result = await contract.addProject(name, state, amount, { from: account });
        //check if project was created
        let numProjects = await contract.getNumberOfProjects();
        let project = await contract.getProjectDetails(0);
        assert.equal(project.amount.toString(), amount);
        assert.equal(numProjects.toString(), parseInt(1));
        truffleAssert.eventEmitted(result, 'ProjectAdded');
    });

    //@dev Add a require to addProject() --> amout has to be >0
    it("add a project with a negative amount should not be possible", async () => {
        //create new project
        let name = 'Project 1';
        let state = 'Kap Verde';
        let amount = -200;
        //call addProject()
        await truffleAssert.fails(contract.addProject(name, state, amount, { from: account }));
    });

    it("add a project with an amount of null should not be possible", async () => {
        //create new project
        let name = 'Project 1';
        let state = 'Kap Verde';
        let amount = null;
        //call addProject()
        await truffleAssert.fails(contract.addProject(name, state, amount,{ from: account }));
    });

    it("add a project with null as Project name should not be possible", async () => {
        //create new project
        let name = null;
        let state = 'Kap Verde';
        let amount = 100;
        //call addProject()
        await truffleAssert.fails(contract.addProject(name, state, amount, { from: account }));
    });

    /* @dev: Add require to addProject() --> name and state Strings not empty
    it(" add a project with empty name should not be possible", async () => {
        //create new project
        let name = '';
        let state = 'Kap Verde';
        let amount = 100;
        //call addProject()
        await truffleAssert.fails(contract.addProject(name, state, amount, { from: account }));
    });
    */

    it("get the number of projects with empty list", async () => {
        let numProjects = await contract.getNumberOfProjects();
        assert.equal(numProjects.toString(), parseInt(0));
    });

    it("get the number of projects with multiple projects in the list", async () => {
        //create new project
        let firstProjectName = 'Project 1';
        let firstProjectState = 'Kap Verde';
        let firstProjectsAmount = 100;
        //call addProject() for the first project
        await contract.addProject(firstProjectName, firstProjectState, firstProjectsAmount, { from: account });

        //create second project
        let secondProjectName = 'Project 2';
        let secondProjectState = 'Kap Verde';
        let secondProjectAmount = 200;
        //call add Project() for the second project
        await contract.addProject(secondProjectName, secondProjectState, secondProjectAmount, { from: accounts[1] });
        //check if project was created
        let numProjects = await contract.getNumberOfProjects();
        assert.equal(numProjects.toString(), parseInt(2));
    });
    
});