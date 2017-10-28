var SavingsAccount = artifacts.require("./SavingsAccount.sol");

contract('SavingsAccount', function(accounts) {
  it("should assert true", function(done) {
    var savings_account = SavingsAccount.deployed();
    assert.isTrue(true);
    done();
  });

  //testcase to get balance
  it("should not have balance if no deposits are made",function (done) {
    SavingsAccount.deployed().then(function (instance) {
      return instance.getBalance.call();
    }).then(function (balance){
     console.log("Savings Account Balance is "+balance.valueOf());
     assert.equal(0,balance.valueOf());
     done(); 
    });
  });

  it("should return balance as 10 after depositing 10",function (done) {
    SavingsAccount.deployed().then(function (instance) {
      instance.deposit(10);
      return instance.getBalance.call();
    }).then(function (balance) {
      assert.equal(10,balance.valueOf());
      done();
    });
  });

  it.skip("should not allow to withdraw more than deposited amount",function (done) {
    SavingsAccount.deployed().then(function (instance) {
      var isExceptionRaised = false;
      try
      {
        instance.withdraw(11);
      }
      catch(e)
      {
        console.log(e);
        isExceptionRaised = true;
      }      
      assert.isTrue(isExceptionRaised);
      done();
    });
  });
});
