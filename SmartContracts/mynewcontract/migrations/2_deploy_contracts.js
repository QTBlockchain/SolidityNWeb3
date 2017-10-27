var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var  MathLib= artifacts.require("./Math.sol");
var ArrayPractice = artifacts.require("./ArrayPractice.sol");
var stringandbytes = artifacts.require("./stringandbytes.sol");
module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(MathLib,0);
  deployer.deploy(ArrayPractice);
  deployer.deploy(stringandbytes);
};
