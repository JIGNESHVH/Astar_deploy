require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  solidity: "0.8.27",
  paths: {
    artifacts: "./src",
  },
  networks: {
    // zKatana: {
    //   url: `https://rpc.zkatana.gelato.digital`,
    //   accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    // },
    // astarZkEvm: {
    //   url: `https://rpc.startale.com/astar-zkevm`,
    //   accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    // },
    zKyoto: {
      url: `https://rpc.startale.com/zkyoto`,
      accounts: ['d2cbd1d75a65616ccd60025ae49f87a9bf0fe34899f7d6e0d0b38ede181ed397'],
    }

  },
};