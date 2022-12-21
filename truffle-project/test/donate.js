const Donate = artifacts.require("./Donate.sol");
const truffleAssert = require('truffle-assertions');

contract("Donate", (accounts) => {
    it("test balance of the contract after donation", async () => {
        // Get the first account
        let account = accounts[0];
        // Retreive the deployed contract
        const contract = await Donate.deployed();
        // Get the balance before the operation
        let balanceBefore = await contract.getContractBalance();
        console.log(parseInt(balanceBefore));
        // Send 1 finney
        await contract.donateEther({ from: account, value: 1000000000000000 });
        // Get the balance after the finney was sent
        let balanceAfter = await contract.getContractBalance();
        console.log(parseInt(balanceAfter));
        // Check if the balance after is equal to the balance before plus 1 finney
        assert.equal(balanceAfter.toString(), parseInt(balanceBefore.toString()) + 1000000000000000);
    });
    it("should not be able to donate less then 1 finney", async () => {
        // Get the first account
        let account = accounts[0];
        // Retreive the deployed contract
        const contract = await Donate.deployed();
        await truffleAssert.reverts(contract.donateEther({ from: account, value: 1 }));
        
    });

});