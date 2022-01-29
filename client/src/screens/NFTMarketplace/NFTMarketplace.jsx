import { useState, useEffect } from "react";
import "./NFTMarketplace.css";

import { Layout, NFT, Search, Sort } from "../../components";
import {
  AZ,
  ZA,
  lowestFirst,
  highestFirst,
  endingFirst,
  endingLast,
} from "../../utils/sort";
import { getNFTs } from "../../services/nfts";

export const NFTMarketplace = (props) => {
  const [nfts, setNFTs] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState("name-ascending");

  useEffect(() => {
    const fetchNFTs = async () => {
      const allNFTs = await getNFTs();
      setNFTs(allNFTs);
      setSearchResult(allNFTs);
    };
    fetchNFTs();
  }, []);

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type);
    }

    switch (type) {
      case "name-ascending":
        setSearchResult(AZ(searchResult));
        break;
      case "name-descending":
        setSearchResult(ZA(searchResult));
        break;
      case "price-ascending":
        setSearchResult(lowestFirst(searchResult));
        break;
      case "price-descending":
        setSearchResult(highestFirst(searchResult));
        break;
      case "time-ascending":
        setSearchResult(endingFirst(searchResult));
        break;
      case "time-descending":
        setSearchResult(endingLast(searchResult));
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
    setSearchResult(results);
    setApplySort(true);
  };

  const handleSubmit = (event) => event.preventDefault();

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <div className="nfts">
        {searchResult.map((nft, index) => {
          return (
            <NFT
              _id={nft._id}
              name={nft.name}
              imgURL={nft.image_url}
              price={nft.current_bid}
              key={index}
            />
          );
        })}
      </div>
    </Layout>
  );
};
