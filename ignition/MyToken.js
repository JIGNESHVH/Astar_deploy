const hre = require("hardhat");

async function main() {

  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const deployedContract = await hre.ethers.deployContract("MyToken");



  await deployedContract.waitForDeployment();
  console.log(
    `MyToken contract deployed to https://zkyoto.explorer.startale.com/address/${deployedContract.target}`
  );
  const mintAmount = 100000000000000;
  try {
    const mintTx = await deployedContract.mint(deployer.address, mintAmount, {
      gasLimit: 1000000,
    });
    await mintTx.wait();

    console.log(`${mintAmount} tokens minted to: ${deployer.address}`);


  } catch (error) {
    console.error("Error during minting:", error);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});