// const hre = require("hardhat");
const ethers = require("ethers")


async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const deployedContract = await ethers.deployContract("USDT");



  await deployedContract.waitForDeployment();
  console.log(
    `MyToken contract deployed to https://zkyoto.explorer.startale.com/address/${deployedContract.target}`
  );

  const mintAmount = ethers.utils.parseUnit("1000000000000000000");



  try {
    const mintTx = await token.mint(deployer.address, mintAmount, {
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
