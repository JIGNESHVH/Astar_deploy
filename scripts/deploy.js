
const token = await ethers.getContractAt("MyToken", " 0xa45007d70433FE90cECbfe83bEaf9330A6292Dd0");

// Call functions from the contract
const totalSupply = await token.totalSupply();
console.log(totalSupply.toString());


await token.mint("0xRecipientAddress", 1000);
