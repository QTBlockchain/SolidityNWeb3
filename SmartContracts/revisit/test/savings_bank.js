var SavingsBank = artifacts.require("./SavingsBank.sol")
contract('SavingsBank', function(accounts) {
  it("should assert true", function(done) {
    var savings_bank = SavingsBank.deployed();
    assert.isTrue(true);
    done();
  });
});
