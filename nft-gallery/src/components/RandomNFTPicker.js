import React, { useState } from "react";

const RandomNFTPicker = ({ nfts }) => {
  const [randomNFT, setRandomNFT] = useState(null);

  const pickRandom = () => {
    if (!nfts || nfts.length === 0) return;
    const randomIndex = Math.floor(Math.random() * nfts.length);
    setRandomNFT(nfts[randomIndex]);
  };

  return (
    <div className="random-nft-picker">
      <button className="random-nft-btn" onClick={pickRandom}>Pick a Random NFT</button>
      {randomNFT && (
        <div className="random-nft-display">
          <img
            src={randomNFT.image_url || randomNFT.image_preview_url}
            alt={randomNFT.name || "Unnamed NFT"}
            className="random-nft-image"
          />
          <p className="random-nft-name">{randomNFT.name || "Unnamed NFT"}</p>
        </div>
      )}
    </div>
  );
};

export default RandomNFTPicker;
