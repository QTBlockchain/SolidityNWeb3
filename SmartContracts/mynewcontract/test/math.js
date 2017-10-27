var Math= artifacts.require("./Math.sol")
contract('Math', function(accounts) {
  it("should assert true", function(done) {
    var math = Math.deployed();
    assert.isTrue(true);
    done();
  });
  it("should give the result as 0",function (done) {
     Math.deployed().then(function (instance) {
       return instance.getResult.call();
     }).then(function (result) {
       console.log("The result is "+result);
       assert.equal(0,result.valueOf(),"default value has to be 0");
       done();
     });
  });

  it("should give the result of added number",function (done) {
    Math.deployed().then(function (instance) {
      instance.addToResult(10);
      var result= instance.getResult.call();
      console.log("The result after call to add result is "+result.valueOf());
      return result;
    }).then(function (result) {
      assert.equal(10, result.valueOf());
      done();
    });
    
  })

  it("should give the result as 10 for further calls",function (done) {
     Math.deployed().then(function (instance) {
       return instance.getResult.call();
     }).then(function (result) {
       console.log("The result is "+result);
       assert.equal(10,result.valueOf());
       done();
       
     });
  });

  it("should give the result as 100 after multiplying by 10",function (done) {
     Math.deployed().then(function (instance) {
       instance.mulToResult(10);
       return instance.getResult.call();
     }).then(function (result) {
       console.log("The result is "+result);
       assert.equal(100,result.valueOf());
       done();
       
     });
  });
});
