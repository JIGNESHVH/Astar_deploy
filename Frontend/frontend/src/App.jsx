import "./App.css";

import { createAppKit, useWalletInfo } from "@reown/appkit/react";
import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";
import { astarZkyoto, astarZkEVM } from "@reown/appkit/networks";
import Mint from "../src/component/MintLayout";
import Connect from "./WalletConnect";
import { ToastContainer } from "react-toastify";

const networks = [astarZkyoto];

const projectId = "458097e6aff495fbf19f2ba2fb4fc80c";

const metadata = {
  name: "BTC",
  description: "My Website description",
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"],
};

// 3. Create the AppKit instance
createAppKit({
  adapters: [new Ethers5Adapter()],
  metadata: metadata,
  networks: [astarZkyoto],
  projectId,
  features: {
    analytics: true,
  },
});

function App() {
  return (
    <>
      <appkit-button />
      <Mint />
      <ToastContainer />
    </>
  );
}
export default App;
