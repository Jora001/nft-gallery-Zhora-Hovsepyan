const ALCHEMY_API_KEY = "YOUR_ALCHEMY_KEY"; // <-- այստեղ դնել քո API key
const BASE_URL = `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}/getNFTs/`;

export const fetchNFTs = async (account) => {
  try {
    const res = await fetch(`${BASE_URL}?owner=${account}`);
    const data = await res.json();
    return data.ownedNfts.map((nft) => ({
      id: nft.id.tokenId,
      name: nft.title || `NFT #${nft.id.tokenId}`,
      image_url: nft.media[0]?.gateway || "https://via.placeholder.com/150",
    }));
  } catch (err) {
    console.error(err);
    return [
      { id: 1, name: "Sample NFT", image_url: "https://via.placeholder.com/150" },
    ];
  }
};
