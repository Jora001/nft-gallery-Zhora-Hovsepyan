import React from "react";
import { signMessage } from "../services/walletService";

const SignMessageLogin = ({ onLogin }) => {
  const handleLogin = async () => {
    try {
      const sig = await signMessage("Login to NFT Dashboard");
      onLogin(sig);
    } catch (err) {
      console.error(err);
    }
  };

  return <button onClick={handleLogin}>Login with Ethereum</button>;
};

export default SignMessageLogin;
