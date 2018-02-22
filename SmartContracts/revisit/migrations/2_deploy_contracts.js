var MathPractice = artifacts.require("./MathPractice.sol");
var SavingsAccount = artifacts.require("./SavingsAccount.sol");
var SavingsBank = artifacts.require("./SavingsBank.sol");
var SpecialArrays = artifacts.require("./SpecialArrays.sol");
var UpdateSavingsBank = artifacts.require("./UpdateSavingsBank.sol");

module.exports = function(deployer) {
  deployer.deploy(MathPractice);
  deployer.deploy(SavingsAccount);
  deployer.deploy(SavingsBank);
  deployer.deploy(SpecialArrays);
  deployer.deploy(UpdateSavingsBank);
};
