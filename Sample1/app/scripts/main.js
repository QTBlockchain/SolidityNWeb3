/**
 * Listener for load
 */
window.addEventListener('load', function() {
    
      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        window.web3 = new Web3(web3.currentProvider);
      } else {
        console.log('Injected web3 Not Found!!!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    
        var provider = document.getElementById('provider_url').value;
        window.web3 = new Web3(new Web3.providers.HttpProvider(provider));
      }
      // Now you can start your app & access web3 freely:
     startApp()
  
})
