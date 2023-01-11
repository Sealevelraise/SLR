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
        let firstProjectName = 'Project 1';
        let firstProjectState = 'Kap Verde';
        let firstProjectsAmount = 100;
        //call addProject()
        await addProjectContract.addProject(firstProjectName, firstProjectState, firstProjectsAmount, { from: projectOwner });
        // donate with second account
        await voteContract.donateEther({ from: donater, value: 1000000000000000 });
        // vote for project
        await voteContract.voteForProject(0, { from: donater })
        let voteSatus = await voteContract.getAmountOfVotes(0);
        assert.equal(voteSatus.toString(), 1);
    });

});
