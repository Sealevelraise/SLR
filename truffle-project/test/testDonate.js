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
        // Send 1 finney --> use sendTransaction to test the recieve() fallback function
        await contract.sendTransaction({ value: 1e15, from: account });
        // Get the balance after the finney was sent
        let balanceAfter = await contract.getContractBalance();
        // Check if the balance after is equal to the balance before plus 1 finney
        assert.equal(balanceAfter.toString(), parseInt(balanceBefore.toString()) + 1e15);
    });
    it("user should be correctly set to Donater after successful donation", async () => {
         // Send 1 finney --> use sendTransaction to test the recieve() fallback function
        await contract.sendTransaction({ value: 1e15, from: account });
        await contract.sendTransaction({ value: 1e15, from: accounts[1] });
        let amount = 1e15;
        let mail = 'test@mail.com';
        await contract.updateDonatedAmount(mail, amount, { from: account });
        await contract.updateDonatedAmount(mail, amount, { from: accounts[1] });
        let numberOfDonaters = await contract.getNumberOfDonaters();
        let id = await contract.idToOwner(accounts[1]);
        let donater = await contract.getDonaterDetails({ from: accounts[1] })
        console.log(numberOfDonaters.toString());
        console.log(id.toString());
        console.log(donater.toString())
        /*
        let donater = await contract.getDonaterDetails();
        assert.equal(donater.amount.toString(), parseInt(1)); 
        */
       assert.equal(numberOfDonaters.toString(), parseInt(2));
    }); 
    
    it("donate function should not work with null value", async () => {
         //use sendTransaction to test the recieve() fallback function
        await truffleAssert.reverts(contract.sendTransaction({ value: null, from: account }));
    });
    
    it("should not be able to donate less then 1 finney", async () => {
        //use sendTransaction to test the recieve() fallback function
        await truffleAssert.reverts(contract.sendTransaction({ value: 1, from: account })); 
    });

    it("donate function should not work without donate value", async () => {
        //use sendTransaction to test the recieve() fallback function
        await truffleAssert.reverts(contract.sendTransaction({ from: account }));
    });
    
    it("donate function should not work with invalid input", async () => {
        //use sendTransaction to test the recieve() fallback function
        await truffleAssert.fails(contract.sendTransaction({ value: 'x', from: account },'Error: Given input "x" is not a number'));
    });

    it("user should not be set to Donater after unsuccessful donation", async () => {
        //use sendTransaction to test the recieve() fallback function
        await truffleAssert.reverts(contract.sendTransaction({value: 1, from: account }));
        let userStatus = await contract.userHasDonated(account);
        assert.equal(userStatus.toString(), parseInt(0));
    });

});