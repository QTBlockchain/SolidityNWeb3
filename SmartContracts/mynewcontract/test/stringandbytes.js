var stringandbytes = artifacts.require("./stringandbytes.sol");
contract('stringandbytes', function(accounts) {
  it("should assert true", function(done) {
    stringandbytes.deployed();
    assert.isTrue(true);
    done();
  });

  it("should have empty name after deployed", function (done) {
    stringandbytes.deployed().then(function (instance) {
      return instance.isNameEmpty.call();
    }).then(function (result) {
      console.log("Is Name Empty? "+result.valueOf());
      assert.isTrue(result.valueOf());
      done();
    });
  });

  it("should not have empty name after assigned value", function (done) {
    stringandbytes.deployed().then(function (instance) {
      instance.setName("Test");
      return instance.isNameEmpty.call();
    }).then(function (result) {
      console.log("Is Name Empty? "+result.valueOf());
      assert.equal(false,result.valueOf());
      done();
    });
  });
});
