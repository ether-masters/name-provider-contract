var WalletProvider = require("truffle-wallet-provider");

module.exports = {
	networks : {
		development : {
			provider : function() {
				return new WalletProvider(getWallet("dev.config.json"), "http://eth.cm-test.com:7635/");
			},
//			host : "127.0.0.1",
//			port : 7777,
			gas : 4712388,
			gasPrice : 10000000000,//~0.001 US cent
			network_id : "*" // Match any network id
		},
		test : {
			host : "127.0.0.1",
			port : 7777,
			gas : 4712388,
			gasPrice : 10000000000,//~0.001 US cent
			network_id : "*" // Match any network id
		},
		ropsten : {
			provider : function() {
				return new WalletProvider(getWallet("dev.config.json"), "https://ropsten.infura.io/hOddJYEe1pbubf5G8OyG");
			},
			network_id : 3,
			gasPrice : 10000000000,//~0.001 US cent
			gas : 4500000,
		},
		live : {
			provider : function() {
				return new WalletProvider(getWallet("dev.config.json"), "https://mainnet.infura.io/hOddJYEe1pbubf5G8OyG");
			},
			network_id : 3,
			gasPrice : 10000000000,//~0.001 US cent
			gas : 4500000,
		}
	},
	solc : {
		optimizer : {
			enabled : true,
			runs : 200
		}
	}

};

function getWallet(configName) {
	let path = require("path");
	let prefs = require(path.join(__dirname, "/config/", configName));
	let wallet = require('ethereumjs-wallet').fromV3(require('fs').readFileSync(path.join(__dirname, prefs.keystore)).toString(), prefs.passw);
	return wallet;
}
