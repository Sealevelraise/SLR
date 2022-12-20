const Donate = artifacts.require("./Donate.sol");

contract("Donate", (accounts) => {
    it("test balance of the contract after donation", async () => {
        // Get the first account
        let account = accounts[0];
        // Retreive the deployed contract
        const contract = await Donate.deployed();
        // Get the balance before the operation
        let balanceBefore = await contract.getContractBalance();
        console.log(parseInt(balanceBefore));
        // Send 3 gwei
        await contract.donateEther({ from: account, value: 3});
        // Get the balance after the gwei was sent
        let balanceAfter = await contract.getContractBalance();
        console.log(parseInt(balanceAfter));
        // Check if the balance after is equal to the balance before plus 3 gwei
        assert.equal(balanceAfter.toString(), parseInt(balanceBefore.toString()) + 3);
    });
});