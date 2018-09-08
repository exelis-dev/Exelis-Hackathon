var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider("bonus noodle grace find jacket abstract brand release horn betray dream nest", "https://rinkeby.infura.io/v3/843577fef179411eb38906f051dfd0bd")
      },
      network_id: 3
    }   
  }
};


