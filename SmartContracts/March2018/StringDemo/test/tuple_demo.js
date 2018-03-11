var TupleDemo = artifacts.require("./TupleDemo.sol");
contract('TupleDemo', function(accounts) {
  it("should assert true", function(done) {
    var tuple_demo = TupleDemo.deployed();
    assert.isTrue(true);
    done();
  });

  it("should return name & age", function (done) {
    TupleDemo.deployed().then(function (instance) {
      return instance.getNameAndAge.call()
    }).then(function (result) {
       var test= result;
    })
  })
});
