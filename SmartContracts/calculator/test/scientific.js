var Scientific = artifacts.require("./Scientific.sol");

contract('Scientific', function(accounts) {
  
  it("should assert true", function(done) {
    var scientific = Scientific.deployed();
    assert.isTrue(true);
    done();
  });

  it("should return 36 when 3,3 are passed to sum of squares",function (done) {
    Scientific.deployed().then(function (instance) {
      return instance.squareOfSums.call(3,3);
    }).then(function (result) {
      var actualResult = result.valueOf();
      console.log(actualResult);
      assert.isTrue(result.valueOf()==36);
    });
    done();
  });
});
