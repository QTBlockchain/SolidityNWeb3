var VisitCount = artifacts.require("./VisitCount.sol")
let visitCountInstance;
contract('VisitCount', function(accounts) {
  it("should assert true", function(done) {
    var visit_count = VisitCount.deployed();
    assert.isTrue(true);
    done();
  });

  it("should fake/ increase visit count",function (done) {
      VisitCount.deployed().then (function (instance) {
         visitCountInstance = instance;
         instance.getVisitorCount.call();
      }).then(function (result) {
        visitCountInstance.addFakeVisitors.call();
        var incvalue=visitCountInstance.getVisitorCount.call().valueOf();
        assert.notEqual(result.valueOf(),incvalue);
        done();
      });
  })
});
