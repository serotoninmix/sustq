const Survey = artifacts.require("SustainabilityQSurvey");

module.exports = function(deployer) {
  deployer.deploy(Survey);
  // If you have other contracts, deploy them here as well
};
