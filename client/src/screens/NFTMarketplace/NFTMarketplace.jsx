import { useState, useEffect } from "react";
import "./NFTMarketplace.css";

import { Layout, NFT, Quest, Sort } from "../../components";
import {
  AZ,
  ZA,
  lowestFirst,
  highestFirst,
  endingFirst,
  endingLast,
} from "../../utils/sort";
import { getNFTs } from "../../services/nfts";
import { Link } from "react-router-dom";

const NFTMarketplace = (props) => {
  const [nfts, setNFTs] = useState([]);
  const [questResult, setQuestResult] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState("name-ascending");

  useEffect(() => {
    const fetchNFTs = async () => {
      const allNFTs = await getNFTs();
      setNFTs(allNFTs);
      setQuestResult(allNFTs);
    };
    fetchNFTs();
  }, []);

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type);
    }

    switch (type) {
      case "name-ascending":
        setQuestResult(AZ(questResult));
        break;
      case "name-descending":
        setQuestResult(ZA(questResult));
        break;
      case "current-bid-ascending":
        setQuestResult(lowestFirst(questResult));
        break;
      case "current-bid-descending":
        setQuestResult(highestFirst(questResult));
        break;
      case "time-ascending":
        setQuestResult(endingFirst(questResult));
        break;
      case "time-descending":
        setQuestResult(endingLast(questResult));
        break;
      default:
        break;
    }
  };

  if (applySort) {
    handleSort(sortType);
    setApplySort(false);
  }

  const handleSearch = (event) => {
    const results = nfts.filter((nft) =>
      nft.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQuestResult(results);
    setApplySort(true);
  };

  const handleSubmit = (event) => event.preventDefault();

  return (
    <Layout user={props.user}>
      <Quest onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <div className="nfts">
        {questResult.map((nft, index) => {
          return (
            <NFT
              id={nft.id}
              name={nft.name}
              image_url={nft.image_url}
              current_bid={nft.current_bid}
              key={index}
            />
          );
        })}
        {nfts.map((nft) => (
          <div>
            <Link to={`/nfts/${nft.id}`}>
              <img src={nft.image_url} alt={nft.name} />
              <p>{nft.name}</p>
              <p>{nft.current_bid}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default NFTMarketplace;
