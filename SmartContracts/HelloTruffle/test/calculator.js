var Calculator = artifacts.require("./Calculator.sol");

contract('Calculator', function(accounts) {
  it("should assert true", function(done) {
    var calculator = Calculator.deployed();
    assert.isTrue(true);
    done();
  });

  it("should have add and result should be 2 when 1 ,1 are passed",
      function (done) {
       /* var calculator = Calculator.deployed();
        console.log(calculator);
        var result = calculator.add.call(1,1);
        assert.isTrue(2 == result,"The result should be 2 when 1,1 are passed");
        done(); */
        Calculator.deployed().then(function (calculator) {
            return calculator.add.call(1,2);
        }).then( function (result) {
           assert.isTrue(3 == result.valueOf(), "The function is not behaving correctly");
          done();
        });

      });
});
