import React, { useState } from "react";
import abi from "../ABI/abi.json";
import { useAppKitProvider, useAppKitAccount } from "@reown/appkit/react";
import { toast } from "react-toastify";
import { Contract, ethers } from "ethers";
import { useAppKit } from "@reown/appkit/react";

const TokenAddress = "0xEC520AF7c246026327467070b029b29a59922C9F";

const MintLayout = () => {
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [userAddress, setUserAddress] = useState("");

  // async function mint() {
  //   if (!isConnected) {
  //     toast.error("Wallet not connected! Please connect your wallet first.");
  //     return;
  //   }

  //   try {
  //     const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
  //     const signer = await ethersProvider.getSigner();
  //     const TokenContract = new Contract(TokenAddress, abi, signer);
  //     const tx = await TokenContract.mint(
  //       "0xC617cc5159Aa5a7451106B837Ffc87B9Ad3b4EC5",
  //       ethers.utils.parseEther(amount.toString())
  //     );
  //     await tx.wait();
  //     toast.success("Tokens Minted Successfully!");
  //   } catch (error) {
  //     toast.error(`Mint Error: ${error.message}`);
  //   }
  // }

  const getBalance = async () => {
    if (!isConnected) throw Error("User disconnected");
    const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
    const signer = await ethersProvider.getSigner();
    const TokenContract = new Contract(TokenAddress, abi, signer);
    const USDTBalance = await TokenContract.balanceOf(address);

    console.log(formatUnits(USDTBalance, 18));
    setBalance(ethers.utils.formatEther(balance));
  };

  return (
    <div>
      <div>
        <h2>Mint</h2>
        <div>
          <input
            placeholder="Amount"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>
      <div>
        <h2>Balance</h2>
        <div>
          <input
            type="text"
            placeholder="Address"
            onChange={(e) => setUserAddress(e.target.value)}
          />
          <button onClick={getBalance}>Get Balance</button>
        </div>
        <p>Balance: {balance}</p>
      </div>
    </div>
  );
};

export default MintLayout;
