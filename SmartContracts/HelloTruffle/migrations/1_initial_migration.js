var Migrations = artifacts.require("./Migrations.sol");
var SampleContract = artifacts.require("./SampleContract.sol");
var Calculator = artifacts.require("./Calculator.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(SampleContract);
  deployer.deploy(Calculator);
};
