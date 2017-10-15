/*
* Hanling onload event
*/

window.addEventListener("load",function(){
  if(typeof web3 !== "undefined")
  {
    //metamask is installed & it has injected web3
    console.log("web3 is defined");
    //use web3 object injected from metamask
    window.web3 = new Web3(web3.currentProvider);
  }
  else{
    // create our own web3 object which points to geth
    console.log('Injected web3 Not Found!!!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

    var providerUrl=document.getElementById('provider_url').value;
    window.web3 =new Web3(new Web3.providers.HttpProvider(providerUrl));
  }
  updateConnectionStatus();
})

/*
* Event handler/listner for connect button
*/
function doconnect() {
  var providerUrl=document.getElementById('provider_url').value;
    window.web3 =new Web3(new Web3.providers.HttpProvider(providerUrl));
    updateConnectionStatus();
}

function updateVersionInfo() {
  var apiversionInfo=web3.version.api;
  setData('versioninfo',apiversionInfo,false);
}

function getAccounts() {
  web3.eth.getAccounts(function (error,result) {
    if(error)
    {
        console.log("error occured")
    }
    else{
        var accounts=result;
    }
    
  })
}

function getDefaultAccountBalance() {
   var defAcount=web3.eth.defaultAccount;
   var balance= web3.eth.getBalance(defAcount);
   setData('bal_in_wei',balance,false);
   var balanceInEther=web3.fromWei(balance,'ether');
   setData('bal_in_eth',balanceInEther,false);

}
function doGetBalances(accounts) {
   //for loop   
    //Web3.eth.getBalance(account[])
}

function updateConnectionStatus() {
  if(web3.isConnected())
    {
      setData('connectionstatus','Connected',false);
    }
    else{
      setData('connectionstatus','Not Connected',true);
    }
    updateVersionInfo();
}


function setData(docElementId, html, errored) {
    document.getElementById(docElementId).innerHTML = html;
    if (errored) document.getElementById(docElementId).classList = 'notready';
    else document.getElementById(docElementId).classList = 'ready';
}