var Migrations = artifacts.require("./Migrations.sol");
var Calulator = artifacts.require("./Calculator.sol");
var IncomeTaxCalc = artifacts.require("./IncomeTaxCalc.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Calulator);
  deployer.deploy(IncomeTaxCalc);
};
