import React, { useState, useEffect } from "react";
import { connectWallet } from "./services/walletService";
import { fetchNFTs } from "./services/nftService";
import './styles/global.css';

import Header from "./components/Header";
import NFTCard from "./components/NFTCard";
import NFTModal from "./components/NFTModal";
import WalletInfo from "./components/WalletInfo";
import ChainSwitcher from "./components/ChainSwitcher";
import RandomNFTPicker from "./components/RandomNFTPicker";
import SignMessageLogin from "./components/SignMessageLogin";
import NFTStatsChart from "./components/NFTStatsChart";

function App() {
  const [walletData, setWalletData] = useState(null);
  const [nfts, setNFTs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [modalNFT, setModalNFT] = useState(null);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("favorites")) || []);
  const [connecting, setConnecting] = useState(false);
  const [currentChain, setCurrentChain] = useState(80001); // Mumbai
  const [signature, setSignature] = useState(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleConnectWallet = async () => {
    if (connecting) return;
    setConnecting(true);
    try {
      const data = await connectWallet();
      setWalletData(data);
      setLoading(true);
      const assets = await fetchNFTs(data.account);
      setNFTs(assets);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    } finally {
      setConnecting(false);
    }
  };

  const toggleFavorite = (id) => {
    const updated = favorites.includes(id)
      ? favorites.filter(fav => fav !== id)
      : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  useEffect(() => {
    if (walletData) {
      setLoading(true);
      fetchNFTs(walletData.account)
        .then((assets) => setNFTs(assets))
        .finally(() => setLoading(false));
    }
  }, [walletData, currentChain]);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="button-container" style={{display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "20px"}}>
        {!walletData && (
          <button onClick={handleConnectWallet} disabled={connecting}>
            {connecting ? "Connecting..." : "Connect Wallet"}
          </button>
        )}
        <SignMessageLogin onLogin={setSignature} />
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {signature && <p className="signature-info" style={{textAlign: "center"}}>Logged in with signature: {signature.slice(0,10)}...</p>}

      {walletData && (
        <>
          <WalletInfo account={walletData.account} balance={walletData.balance} network={walletData.network} />
          <ChainSwitcher currentChain={currentChain} switchChain={setCurrentChain} />
        </>
      )}

      <RandomNFTPicker nfts={nfts} />

      {loading && <p className="loading-text" style={{textAlign: "center"}}>Loading NFTs...</p>}

      <div className="nft-grid">
        {nfts.map(nft => (
          <NFTCard
            key={nft.id}
            nft={nft}
            openModal={setModalNFT}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.includes(nft.id)}
          />
        ))}
      </div>

      <NFTModal nft={modalNFT} closeModal={() => setModalNFT(null)} />

      {nfts.length > 0 && <NFTStatsChart nfts={nfts} />}
    </div>
  );
}

export default App;
