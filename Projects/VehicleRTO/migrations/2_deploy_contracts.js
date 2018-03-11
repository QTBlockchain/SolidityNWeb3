
var VehicleRTO = artifacts.require("./VehicleRTO.sol");

module.exports = function(deployer) {
  deployer.deploy(VehicleRTO,0xf17f52151ebef6c7334fad080c5704d77216b732);
};
