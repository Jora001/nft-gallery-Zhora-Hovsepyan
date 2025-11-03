# NFT Dashboard - Jora Hovsepyan

Welcome to **NFT Dashboard**, a React application that allows users to connect their Ethereum/Polygon wallet, view their NFTs, pick a random NFT, mark favorites, and see a chart of their collection. This project was created as part of a JavaScript learning module to practice frontend skills, API integration, and React frameworks.

---

## **Features**

- **Wallet Connection:** Connect MetaMask wallet and display account info, balance, and network.
- **Dark / Light Mode:** Toggle between dark and light themes.
- **NFT Display:** Fetch and display NFTs from the connected wallet.
- **Favorites:** Mark NFTs as favorites with a gold highlight; favorites persist in `localStorage`.
- **NFT Modal:** Click an NFT to view details in a modal including description and collection.
- **Random NFT Picker:** Randomly select one NFT from your collection.
- **NFT Stats Chart:** Bar chart visualization of NFTs using `react-chartjs-2`.
- **Responsive UI:** Fully responsive design for desktop and mobile.

---

## **Demo**

Deployed on Vercel: [https://nft-dashboard.vercel.app](https://nft-dashboard.vercel.app)  
*(Replace with your actual deployment URL after deploy)*

---

## **Getting Started**

### **Prerequisites**

- Node.js >= 18.x
- npm or yarn
- MetaMask wallet (for testing wallet features)

### **Installation**

```bash
# Clone the repository
git clone https://github.com/jora/nft-dashboard-jora-hovsepyan.git
cd nft-dashboard-jora-hovsepyan

# Install dependencies
npm install
# or
yarn install
