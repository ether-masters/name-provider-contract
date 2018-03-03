var WalletProvider = require("truffle-wallet-provider");

module.exports = {
	networks : {
		development : {
			host : "127.0.0.1",
			port : 7777,
			gas : 4712388,
			gasPrice : 10000000000,//~0.001 US cent
			network_id : "*" // Match any network id
		},

	},
	solc : {
		optimizer : {
			enabled : true,
			runs : 200
		}
	}

};

