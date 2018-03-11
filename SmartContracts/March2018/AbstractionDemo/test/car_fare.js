var CarFare = artifacts.require("./CarFare.sol");

contract('CarFare', function(accounts) {
  it("should assert true", function(done) {
    var car_fare = CarFare.deployed();
    assert.isTrue(true);
    done();
  });

  it("should received events", function (done) {
    CarFare.deployed().then(function (instance) {
      return instance.bookCab(10);
      
    }).then(function (result) {
        dumpEvents(result);
        assert.equal('bookingRecieved',result.logs[0].event);
        done();
    })
  })
});

function  dumpEvents(result){
  for(var i=0; i<result.logs.length;i++){
        console.log(result.logs[i].event,'>>', result.logs[i].args.from,' ',result.logs[i].args.distance.toNumber())
  }
}
