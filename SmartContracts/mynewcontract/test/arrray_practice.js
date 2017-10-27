var ArrrayPractice=artifacts.require("./ArrayPractice.sol")

contract('ArrrayPractice.sol', function(accounts) {
  it("should assert true", function(done) {
    var arrray_practice_sol = ArrrayPractice.deployed();
    assert.isTrue(true);
    done();
  });
  //static Array Testing
  describe("StaticArray",function () {
    it("should have default value of [1,2,3] and length 3",function (done) {
      ArrrayPractice.deployed().then(function (instance) {
        return instance.getStaticArray.call();
        
      }).then(function (result) {
        var items=result.valueOf();
        console.log(items);
        assert.equal(3, items.length);
        console.log("length is "+items.length);
        assert.equal(1,items[0]);
        assert.equal(2,items[1]);
        assert.equal(3,items[2]);
        done();
      })
    });

    it("Should have sum of 3 ",function (done) {
      ArrrayPractice.deployed().then(function (instance) {
        return instance.staticArrayTests.call(); 
      }).then(function (result){
        assert.equal(3,result.valueOf());
        done();
      });
    });

    it("should return sum as 6 after changing value at index 2 to 3",function (done) {
      ArrrayPractice.deployed().then(function (instance) {
        instance.staticArrayChangeValue.call(3,2);
        return instance.getStaticArraySum.call();
      }).then(function (result) {
        console.log("result after changing index 2 to 3 is "+result.valueOf());
        assert.equal(6,result.valueOf());
        done();
      });
    });
    
  });

  describe("DynamicArray",function (accounts) {
    it("should have a size 0 when uninitialized",function (done) {
      ArrrayPractice.deployed().then(function (instance) {
        return instance.getDynamicArraySize.call();
      }).then(function (result) {
        console.log("dynamic array size is "+result.valueOf());
        assert.equal(0,result.valueOf());
        done();
      });
    });
    
    it("should have a size of 10 after setting the dynamic array size to 10 and pushing 10 elements ",function (done) {
      ArrrayPractice.deployed().then(function (instance) {
        console.log("Execution started");
        instance.setDynamicArraySize(10);
        console.log("Array size is set to 10");
        for (var index = 1; index <= 10; index++) {
          instance.setDynamicArrayElement(index,index-1);
        }
        return instance.getDynamicArraySize.call();
      }).then(function (result) {
        console.log("dynamic array size is "+result.valueOf());
        assert.equal(10,result.valueOf());
        done();
      })
    })
  })

});
