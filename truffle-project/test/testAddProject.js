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
        let description = 'Test Project Description';
        let amount = 100;
        //call addProject()
        let result = await contract.addProject(name, state,description, amount, { from: account });
        //check if project was created
        let numProjects = await contract.getNumberOfProjects();
        assert.equal(numProjects.toString(), parseInt(1));
        await truffleAssert.eventEmitted(result, 'ProjectAdded');
    });

    it("user should not be able to add a new project when user already has one", async () => {
        //create new project
        let firstProjectName = 'Project 1';
        let firstProjectState = 'Kap Verde';
        let firstProjectDescription = 'Test Project Description';
        let firstProjectsAmount = 100;
        //call addProject() for the first project
        await contract.addProject(firstProjectName, firstProjectState,firstProjectDescription, firstProjectsAmount, { from: account });

        //create second project
        let secondProjectName = 'Project 2';
        let secondProjectState = 'Kap Verde';
        let secondProjectDescription = 'Test Project 2 Description';
        let secondProjectAmount = 200;
        await truffleAssert.reverts(contract.addProject(secondProjectName, secondProjectState,secondProjectDescription, secondProjectAmount, { from: account }));
        let numProjects = await contract.getNumberOfProjects();
        assert.equal(numProjects.toString(), parseInt(1));
    });

    it("test to get project details from existing project with correct id", async () => {
        //create new project
        let name = 'Project 1';
        let state = 'Kap Verde';
        let description = 'Test Project Description';
        let amount = 100;
        //call addProject()
        await contract.addProject(name, state,description, amount, { from: account });
        let project = await contract.getProjectDetails(0);
        assert.equal(project.name.toString(), name);
        assert.equal(project.state.toString(), state);
        assert.equal(project.description.toString(), description);
        assert.equal(project.amount.toString(), amount);
    });

    //@dev Add check for negative number to the require of getProjectDetails()
    it("get project details from existing project with invalid neagtive id should fail", async () => {
        //create new project
        let name = 'Project 1';
        let state = 'Kap Verde';
        let description = 'Test Project Description';
        let amount = 100;
        //call addProject()
        await contract.addProject(name, state,description, amount, { from: account });
        await truffleAssert.fails(contract.getProjectDetails(-1));
    });

    it("get project details from existing project with id > length should revert", async () => {
        //create new project
        let name = 'Project 1';
        let state = 'Kap Verde';
        let description = 'Test Project Description';
        let amount = 100;
        //call addProject()
        await contract.addProject(name, state,description, amount, { from: account });
        await truffleAssert.reverts(contract.getProjectDetails(1), 'project id does not exist');
    });

    it("get project details from empty project list with id > length should revert", async () => {
        await truffleAssert.reverts(contract.getProjectDetails(1), 'project id does not exist');
    });

    it("get project details from existing project without id should fail", async () => {
        //create new project
        let name = 'Project 1';
        let state = 'Kap Verde';
        let description = 'Test Project Description';
        let amount = 100;
        //call addProject()
        await contract.addProject(name, state,description, amount, { from: account });
        await truffleAssert.fails(contract.getProjectDetails());
    });

    it("get project details from existing project with id = null should fail", async () => {
        //create new project
        let name = 'Project 1';
        let state = 'Kap Verde';
        let description = 'Test Project Description';
        let amount = 100;
        //call addProject()
        let result = await contract.addProject(name, state,description, amount, { from: account });
        //check if project was created
        await truffleAssert.fails(contract.getProjectDetails(null));
    });

    //@dev Maybe add a require to addProject() that amout has to be >0
    it("test to add a project with an amount of 0", async () => {
        //create new project
        let name = 'Project 1';
        let state = 'Kap Verde';
        let description = 'Test Project Description';
        let amount = 0;
        //call addProject()
        let result = await contract.addProject(name, state,description, amount, { from: account });
        //check if project was created
        let numProjects = await contract.getNumberOfProjects();
        let project = await contract.getProjectDetails(0);
        assert.equal(project.amount.toString(), amount);
        assert.equal(numProjects.toString(), parseInt(1));
        await truffleAssert.eventEmitted(result, 'ProjectAdded');
    });

    //@dev Add a require to addProject() --> amout has to be >0
    it("add a project with a negative amount should not be possible", async () => {
        //create new project
        let name = 'Project 1';
        let state = 'Kap Verde';
        let description = 'Test Project Description';
        let amount = -200;
        //call addProject()
        await truffleAssert.fails(contract.addProject(name, state,description, amount, { from: account }));
    });

    it("add a project with an amount of null should not be possible", async () => {
        //create new project
        let name = 'Project 1';
        let state = 'Kap Verde';
        let description = 'Test Project Description';
        let amount = null;
        //call addProject()
        await truffleAssert.fails(contract.addProject(name, state,description, amount, { from: account }));
    });

    it("add a project with null as Project parameter should not be possible", async () => {
        //create new project
        let name = null;
        let state = 'Kap Verde';
        let description = 'Test Project Description';
        let amount = 100;
        //call addProject()
        await truffleAssert.fails(contract.addProject(name, state,description, amount, { from: account }));
    });

    it("test to get the number of projects with empty list", async () => {
        let numProjects = await contract.getNumberOfProjects();
        assert.equal(numProjects.toString(), parseInt(0));
    });

    it("test to get the number of projects with multiple projects in the list", async () => {
        //create new project
        let firstProjectName = 'Project 1';
        let firstProjectState = 'Kap Verde';
        let firstProjectDescription = 'Test Project Description';
        let firstProjectsAmount = 100;
        //call addProject() for the first project
        await contract.addProject(firstProjectName, firstProjectState,firstProjectDescription, firstProjectsAmount, { from: account });

        //create second project
        let secondProjectName = 'Project 2';
        let secondProjectState = 'Kap Verde';
        let secondProjectDescription = 'Test Project Description';
        let secondProjectAmount = 200;
        //call add Project() for the second project
        await contract.addProject(secondProjectName, secondProjectState,secondProjectDescription, secondProjectAmount, { from: accounts[1] });
        //check if project was created
        let numProjects = await contract.getNumberOfProjects();
        assert.equal(numProjects.toString(), parseInt(2));
    });

});
