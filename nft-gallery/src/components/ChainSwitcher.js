import React from "react";

const chains = [
  { name: "Ethereum Mainnet", id: 1 },
  { name: "Goerli Testnet", id: 5 },
  { name: "Polygon Mainnet", id: 137 },
  { name: "Mumbai Testnet", id: 80001 },
];

const ChainSwitcher = ({ currentChain, switchChain }) => {
  return (
    <div style={{ margin: "10px", textAlign: "center" }}>
      <select value={currentChain} onChange={(e) => switchChain(Number(e.target.value))}>
        {chains.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
    </div>
  );
};

export default ChainSwitcher;
