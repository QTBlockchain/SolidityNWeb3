var MathPractice = artifacts.require("./MathPractice.sol");
var SavingsAccount = artifacts.require("./SavingsAccount.sol");
module.exports = function(deployer) {
  deployer.deploy(MathPractice);
  deployer.deploy(SavingsAccount);
};
