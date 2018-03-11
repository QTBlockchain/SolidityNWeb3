var IncomeTaxCalc = artifacts.require("./IncomeTaxCalc.sol");

contract('IncomeTaxCalc', function(accounts) {
  it("should assert true", function(done) {
    var income_tax_calc = IncomeTaxCalc.deployed();
    assert.isTrue(true);
    done();
  });
});
