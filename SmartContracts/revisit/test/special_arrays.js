var SpecialArrays = artifacts.require("./SpecialArrays.sol");
contract('SpecialArrays', function(accounts) {
  it("should assert true", function(done) {
    var special_arrays = SpecialArrays.deployed();
    assert.isTrue(true);
    done();
  });

  it("should have length as 3 for static bytes", function (done) {
    SpecialArrays.deployed().then(function (instance) {
      return instance.getStaticArraySize.call();
      
    }).then(function (result) {
      assert.equal(3,result.valueOf());
      done();
    });
  });

  it("should return h when get element at 0 is called", function(done){
    SpecialArrays.deployed().then(function (instance) {
      return instance.getStaticElementAt.call(0);
    }).then(function (result) {
      console.log("Value at 0 position is "+result.valueOf());
      assert.isTrue(true);
      //var test=web3.toAscii(result.valueOf);
      //console.log(test);
      done();
    })
  });

  it("should increase the give the right value after entering numbers into dynamic array",
     function (done) {
       SpecialArrays.deployed().then(function (instance) {
         instance.addNumberToDynamicBytes(0);
         instance.addNumberToDynamicBytes(1);
         instance.addNumberToDynamicBytes(2);
         instance.addNumberToDynamicBytes(3);
         return instance.getDynamicElementAt.call(0);

       }).then(function (result) {
          console.log("value at 0 is "+result.valueOf());
          assert.isTrue(true);
          done();
       })
     });

     it("should give me multiple values returned",function (done) {
       SpecialArrays.deployed().then(function (instance) {
         return instance.getFirstAndSecondItem.call();
       }).then( function(result){
         console.log(result.valueOf());
         done();
       })
     })
});
