import { useState, useEffect } from "react";
import "./NFTCards.css";
import NFTCard from "../NFTCard/NFTCard";
import { getNFTs } from "../../services/nfts";

const NFTCards = ({ toggle }) => {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      const allNFTs = await getNFTs();
      setNFTs(allNFTs);
    };
    fetchNFTs();
  }, [toggle]);

  const cards = nfts
    .reverse()
    .map((nft, index) =>
      index < 3 ? (
        <NFTCard
          id={nft.id}
          name={nft.name}
          image_url={nft.image_url}
          key={index}
        />
      ) : null
    );
  return (
    <div className="nft-cards">
      <div className="bubbling">Just Listed!</div>
      <div className="cards">{cards}</div>
    </div>
  );
};

export default NFTCards;
