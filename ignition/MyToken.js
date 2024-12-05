const hre = require("hardhat");

async function main() {

  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const deployedContract = await hre.ethers.deployContract("MyToken");



  await deployedContract.waitForDeployment();
  console.log(
    `MyToken contract deployed to https://zkyoto.explorer.startale.com/address/${deployedContract.target}`
  );

  const token = await hre.ethers.getContractAt("MyToken", deployedContract.target);

  const mintAmount = 1000;



  try {
    const mintTx = await token.mint(deployer.address, mintAmount, {
      gasLimit: 1000000,
    });
    const receipt = await mintTx.wait();
    console.log(`Transaction successful: ${receipt.transactionHash}`);
    console.log(`${mintAmount} tokens minted to: ${deployer.address}`);


  } catch (error) {
    console.error("Error during minting:", error);
  }


  const getTokenValue = await token.getMintToken();
  console.log(getTokenValue)


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});