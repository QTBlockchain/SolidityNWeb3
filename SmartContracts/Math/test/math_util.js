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

  // square of 0 should be 0

   it("should return square of zero as zero", function (done){
     MathUtil.deployed().then(function (mathUtil) {
       return mathUtil.square(-2);
     }).then(function (result) {
        var valueReturned = result.valueOf();
        console.log("value returned is "+ valueReturned);
        assert.equal(valueReturned, 0, "The square of zero should be zero");
        done();
     });
   } );
});
