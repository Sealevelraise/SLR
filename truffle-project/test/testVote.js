const Vote = artifacts.require("./Vote.sol");
const AddProject = artifacts.require("./AddProject.sol");
const truffleAssert = require('truffle-assertions');

contract("Vote", (accounts) => {
    //instance for test contract
    let voteContract;
    let projectOwner;
    let donater;
    let addProjectContract;
    beforeEach('should setup the contract instances and accounts', async () => {
        // Retreive the deployed contract
        voteContract = await Vote.new();
        addProjectContract = await AddProject.new();
        projectOwner = accounts[0];
        donater = accounts[1];
    });

    it("test if a user can vote for a project after he donated", async () => {
        //create new project
        let projectName = 'Project 1';
        let projectState = 'Kap Verde';
        let projectDescription = 'Test Project Description';
        let projectsAmount = 100;
        //call addProject()
        await addProjectContract.addProject(projectName, projectState,projectDescription, projectsAmount, { from: projectOwner });
        // donate with second account --> use sendTransaction to test the recieve() fallback function
        let amount = 1e15;
        let mail = 'test@mail.com';
        // Send 1 finney --> use sendTransaction to test the recieve() fallback function
        await voteContract.donateEther(mail, amount, { value: 1e15, from: donater });
        // vote for project
        await voteContract.voteForProject(0, { from: donater });
        let voteStatus = await voteContract.getAmountOfVotes(0);
        assert.equal(voteStatus.toString(), 1);
    });

});
