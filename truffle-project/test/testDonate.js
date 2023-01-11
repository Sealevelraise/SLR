const Donate = artifacts.require("./Donate.sol");
const truffleAssert = require('truffle-assertions');

contract("Donate", (accounts) => {
   //instance for test contract
    let contract;
    let account;
    beforeEach('should setup the contract instance and account', async () => {
        // Retreive the deployed contract
        contract = await Donate.new();
        account = accounts[0];
    });

    it("test balance of the contract after successful donation", async () => {
        // Get the balance before the operation
        let balanceBefore = await contract.getContractBalance();
        // Send 1 finney
        await contract.donateEther({ from: account, value: 1000000000000000 });
        // Get the balance after the finney was sent
        let balanceAfter = await contract.getContractBalance();
        // Check if the balance after is equal to the balance before plus 1 finney
        assert.equal(balanceAfter.toString(), parseInt(balanceBefore.toString()) + 1000000000000000);
    });
    it("user should be correctly set to Donater after successful donation", async () => {
        await contract.donateEther({ from: account, value: 1000000000000000 });
        let userStatus = await contract.userHasDonated(account);
        assert.equal(userStatus.toString(), parseInt(1));   
    }); 
    
    it("donate function should not work with null value", async () => {
        await truffleAssert.reverts(contract.donateEther({ from: account, value: null }));
    });
    
    it("should not be able to donate less then 1 finney", async () => {
        await truffleAssert.reverts(contract.donateEther({ from: account, value: 1 })); 
    });

    it("donate function should not work without donate value", async () => {
        await truffleAssert.reverts(contract.donateEther({from: account}));
    });
    
    it("donate function should not work with invalid input", async () => {
        await truffleAssert.fails(contract.donateEther({ from: account, value: 'x' },'Error: Given input "x" is not a number'));
    });

    it("user should not be set to Donater after unsuccessful donation", async () => {
        await truffleAssert.reverts(contract.donateEther({ from: account, value: 1 }));
        let userStatus = await contract.userHasDonated(account);
        assert.equal(userStatus.toString(), parseInt(0));
    });

});