const Vote = artifacts.require("./Vote.sol");
const Donate = artifacts.require("./Donate.sol");
const AddProject = artifacts.require("./AddProject.sol");
const truffleAssert = require('truffle-assertions');

contract("Vote", (accounts) => {
    //instance for test contract
    let donateContract;
    let voteContract;
    let projectOwner;
    let donater;
    let addProjectContract;
    beforeEach('should setup the contract instances and accounts', async () => {
        // Retreive the deployed contract
        donateContract = await Donate.new();
        voteContract = await Vote.new();
        addProjectContract = await AddProject.new();
        projectOwner = accounts[0];
        donater = accounts[1];
    });

    it("test if we can get userHasVoted from Donate Contract", async () => {
        //create new project
        let projectName = 'Project 1';
        let projectState = 'Kap Verde';
        let projectDescription = 'Test Project Description';
        let projectsAmount = 100;
        //call addProject()
        await addProjectContract.addProject(projectName, projectState, projectDescription, projectsAmount, { from: projectOwner });
        // donate with second account --> use sendTransaction to test the recieve() fallback function
        let amount = 1e15;
        let mail = 'test@mail.com';
        // Send 1 finney --> use sendTransaction to test the recieve() fallback function
        await donateContract.donateEther(mail, amount, { value: 1e15, from: donater });
        let address = await donateContract.address;
        console.log(address.toString());
        let userHasDonated = await voteContract.readUserHasDonated(address, {from: donater});
        console.log(userHasDonated.toString());
        await voteContract.voteForProject(0,address, {from: donater });
        let voteStatus = await voteContract.getAmountOfVotes(0);
        assert.equal(voteStatus.toString(), 1);
    });

});
