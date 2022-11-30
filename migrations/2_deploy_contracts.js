var MyDonate = artifacts.require("Donate");
var MyVote = artifacts.require("Vote");
var MyAddProject = artifacts.require("AddProject");
module.exports = function(deployer) {
    deployer.deploy(MyDonate);
    deployer.deploy(MyVote);
    deployer.deploy(MyAddProject);
};