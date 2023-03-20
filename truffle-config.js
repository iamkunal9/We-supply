const HDWalletProvider = require("truffle-hdwallet-provider");
const path = require("path");
require("dotenv").config();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: '127.0.0.1',
      port: 7545,
      network_id: "*",
    },
    goerli: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, process.env.INFURA_API_KEY),
      network_id: '5',
      gas: 4465030
    }
  }
};
