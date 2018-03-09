var Migrations = artifacts.require("./Migrations.sol");
var CarFare = artifacts.require("./CarFare.sol");
var AutoFare = artifacts.require("./AutoFare.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(CarFare,0,10)
  deployer.deploy(AutoFare,0,8)
};
