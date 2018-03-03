var Migrations = artifacts.require("./Migrations.sol");
var CarRoute = artifacts.require("./CarRoute.sol");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(CarRoute,"Ameerpet");
};
