import React from "react";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <h1>NFT Dashboard</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
