import React from "react";
import { motion } from "framer-motion";

const NFTCard = ({ nft, openModal, toggleFavorite, isFavorite }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`nft-card ${isFavorite ? "favorite" : ""}`}
      onClick={() => openModal(nft)}
    >
      <img
        src={nft.image_url || nft.image_preview_url}
        alt={nft.name}
        className="nft-image"
      />
      <h3 className="nft-name">{nft.name || "Unnamed NFT"}</h3>
      <p className="nft-collection">{nft.collection?.name || "Unknown Collection"}</p>
      <button
        className="favorite-btn"
        onClick={(e) => { e.stopPropagation(); toggleFavorite(nft.id); }}
      >
        {isFavorite ? "★" : "☆"}
      </button>
    </motion.div>
  );
};

export default NFTCard;
