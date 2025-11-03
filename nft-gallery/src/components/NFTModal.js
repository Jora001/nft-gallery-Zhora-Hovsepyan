import React from "react";
import { motion } from "framer-motion";

const NFTModal = ({ nft, closeModal }) => {
  if (!nft) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="nft-modal-backdrop"
      onClick={closeModal}
    >
      <motion.div
        className="nft-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={nft.image_url || nft.image_preview_url}
          alt={nft.name}
          className="nft-modal-image"
        />
        <h2 className="nft-modal-name">{nft.name || "Unnamed NFT"}</h2>
        <p className="nft-modal-description">{nft.description || "No description"}</p>
        <p className="nft-modal-collection"><b>Collection:</b> {nft.collection?.name || "Unknown"}</p>
        <a href={nft.permalink} target="_blank" rel="noreferrer" className="nft-modal-link">View on OpenSea</a>
        <button onClick={closeModal} className="nft-modal-close-btn">Close</button>
      </motion.div>
    </motion.div>
  );
};

export default NFTModal;
