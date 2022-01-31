import { useState, useEffect } from "react";
import "./NFTCards.css";
import NFTCard from "../NFTCard/NFTCard";
import { getNFTs } from "../../services/nfts";

const NFTCards = ({toggle}) => {
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
      index < 8 ? (
        <NFTCard
          id={nft.id}
          name={nft.name}
          image_url={nft.image_url}
          key={index}
        />
      ) : null
    );
  console.log(nfts);
  return (
    <div className="nft-cards">
      <div className="oldest">Ending Soon..</div>
      <div className="cards">{cards}</div>
    </div>
  );
};

export default NFTCards;
