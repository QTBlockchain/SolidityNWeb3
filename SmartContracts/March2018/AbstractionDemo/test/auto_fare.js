var AutoFare = artifacts.require("./AutoFare.sol");

contract('AutoFare', function(accounts) {

  it("fallback should receive ether",  function (done) {
    var priorbalance = 0;
    var payableContract;
    AutoFare.deployed().then(function (instance) {
      payableContract = instance;
      return payableContract.getBalance.call();
    }).then(function (priorResult){
      priorbalance = priorResult.valueOf();
      console.log("Prior Balance in wei "+priorbalance);
      web3.eth.sendTransaction({ from: accounts[1], to: payableContract.address, value: 1000 });
      return payableContract.getBalance.call();
    }).then(function (result) {
      console.log("Current Balance in wei "+result.valueOf());
       assert.equal(parseInt(priorbalance)+1000, result.valueOf(), "balance should be increased by 1000 post transfer");
       done();
    });
    
  });

});

/*
contract('AutoFare', function(accounts) {
  it("should assert true", function(done) {
    var auto_fare = AutoFare.deployed();
    assert.isTrue(true);
    done();
  });


  it("AutoFare should be zero when distance is zero" , function (done) {
    AutoFare.deployed().then(function (instance) {
      return instance.computeFare.call(0); 
    }).then(function (result) {
      assert.equal(result.valueOf(),0,"fare should be zero");
      done();
    });
  });

});*/
