var Migrations = artifacts.require("./Migrations.sol");
var Arthimetic = artifacts.require("./Arthimetic.sol");
var Scientific = artifacts.require("./Scientific.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Arthimetic);
  deployer.deploy(Scientific);
};
