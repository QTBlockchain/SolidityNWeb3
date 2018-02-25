var SampleContract = artifacts.require("./SampleContract.sol");

contract('SampleContract', function(accounts) {
  it("should assert true", function(done) {
    var sample_contract = SampleContract.deployed();
    assert.isTrue(true);
    done();
  });
});
