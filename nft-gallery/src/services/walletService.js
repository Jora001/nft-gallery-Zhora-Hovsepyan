const NETWORKS = {
  1: "Ethereum Mainnet",
  5: "Goerli Testnet",
  137: "Polygon Mainnet",
  80001: "Mumbai Testnet",
  80002: "Mumbai Testnet"
};

export const connectWallet = async () => {
  if (!window.ethereum) throw new Error("MetaMask not installed");
  const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];

  const balance = await window.ethereum.request({
    method: "eth_getBalance",
    params: [account, "latest"],
  });

  const chainIdHex = await window.ethereum.request({ method: "eth_chainId" });
  const chainId = parseInt(chainIdHex, 16);

  return {
    account,
    balance: (Number(balance) / 1e18).toFixed(6),
    network: NETWORKS[chainId] || `Unknown (${chainId})`,
  };
};

export const signMessage = async (message) => {
  if (!window.ethereum) throw new Error("MetaMask not installed");
  const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  const signature = await window.ethereum.request({
    method: "personal_sign",
    params: [message, account],
  });
  return signature;
};
