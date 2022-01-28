import { useState, useEffect } from "react";
import "./NFTCards.css";
import NFTCard from "../NFTCard/NFTCard";
import { getNFTs } from "../../services/nfts";

export const NFTCards = () => {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      const allNFTs = await getNFTs();
      setNFTs(allNFTs);
    };
    fetchNFTs();
  }, []);

  const Cards = nfts
    .reverse()
    .map((nft, index) =>
      index < 8 ? (
        <NFTCard
          _id={nft._id}
          name={nft.name}
          imgURL={nft.imgURL}
          key={index}
        />
      ) : null
    );

  return (
    <div className="nft-cards">
      <div className="latest">Ending Soon..</div>
      <div className="cards">{Cards}</div>
    </div>
  );
};
