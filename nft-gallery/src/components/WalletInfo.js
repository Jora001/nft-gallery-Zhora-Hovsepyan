import React from "react";

const WalletInfo = ({ account, balance, network }) => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "20px auto",
        padding: "15px 25px",
        maxWidth: "400px",
        background: "#1e1e2f",
        color: "#f5f5f5",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <p style={{ margin: "8px 0", fontWeight: "600" }}>Wallet: {account}</p>
      <p style={{ margin: "8px 0", fontWeight: "500" }}>Network: {network}</p>
      <p style={{ margin: "8px 0", fontWeight: "500" }}>
        Balance: {balance} ETH
      </p>
    </div>
  );
};

export default WalletInfo;
