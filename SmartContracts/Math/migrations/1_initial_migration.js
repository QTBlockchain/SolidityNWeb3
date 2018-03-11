var Migrations = artifacts.require("./Migrations.sol");
var MathUtil = artifacts.require("./MathUtil.sol");
var VisitCount = artifacts.require("./VisitCount.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(MathUtil);
  deployer.deploy(VisitCount);
};
