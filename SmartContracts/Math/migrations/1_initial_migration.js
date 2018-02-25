var Migrations = artifacts.require("./Migrations.sol");
var MathUtil = artifacts.require("./MathUtil.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(MathUtil);
};
