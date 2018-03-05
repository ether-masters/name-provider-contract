var NameProvider = artifacts.require("NameProvider");

module.exports = function(deployer, network) {
	//before deploy logic
	beforeDeploy(deployer, network);
	
	//main logic
	
	//deploy library contract
	deployer.deploy(NameProvider, {gas: 2000000})//.
			.then(function() {
				console.log("NameProvider deployed");
				//deploy library contract
				return true;
			}).then(function() {		
				console.log("DEPLOY FINISHED");
				return true
			});
	
};
