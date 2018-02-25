var MathUtil = artifacts.require("./MathUtil.sol")
contract('MathUtil', function(accounts) {
  it("should assert true", function(done) {
    var math_util = MathUtil.deployed();
    assert.isTrue(true);
    done();
  });

  it("should return square of number when square is called", function (done) {
      MathUtil.deployed().then(function (instance) {
         return instance.square.call(4);
      }).then(function (result) {
        var valueReturned = result.valueOf();
        assert.equal(valueReturned, 16, "Square of 4 should return 16");
        done();
      });
  });
});
