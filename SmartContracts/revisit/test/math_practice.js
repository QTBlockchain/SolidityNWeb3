var MathPractice = artifacts.require("./MathPractice.sol");

//Testsuite
contract('MathPractice',function (accounts) {
  //testcase which checks whether the contract is deployed
  it("MathPractice contract should be deployed", function (done) {
    MathPractice.deployed().then(function (instance ){
      console.log("value of instance is "+instance.valueOf());
      done();
    });
  });

  //testcase to get the result and initial result should be zero
  it("should return zero when getResult Method is called without initializing any value",
  function (done) {
    MathPractice.deployed().then(function (instance) {
      return instance.getResult.call();
      
    }).then(function (result){
      console.log("result is "+result.valueOf());
      assert.equal(0,result.valueOf(),"Default value should be zero");
      done();
    });
  });

  //testcase for testing add  behavior
  it("should give the result which has been added",function (done) {
    MathPractice.deployed().then(function (instance) {
      instance.addToResult(10);
      return instance.getResult.call();
    }).then(function (result) {
       console.log("value after addToResult is "+result.valueOf());
       assert.equal(10,result.valueOf(),'Value passed to addToResult is not as expected');
       done();
    })
  });

  
});
