var Calculator = artifacts.require("./Calculator.sol");

contract('Calculator', function(accounts) {
  it("should assert true", function(done) {
    var calculator;
    Calculator.deployed().then(function (instance) {
      calculator=instance;
      return calculator.getResult.call();
    }).then(function (result) {
      assert.equal(result.valueOf(),10,"Contract Initialized with value not equals to 10")
    });
    assert.isTrue(true);
    done();
  });
});
