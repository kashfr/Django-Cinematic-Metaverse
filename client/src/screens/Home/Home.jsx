import "./Home.css";
import { Layout, NFTCards } from "../../components";
import { useState, useEffect } from "react";
import { getNFTs } from "../../services/nfts";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      const allNFTs = await getNFTs();
      setNfts(allNFTs);
    };
    fetchNFTs();
  }, []);

  return (
    <Layout user={props.user}>
      <div className="home">
        <NFTCards />
        {nfts.map((nft) => (
          <div>
            <Link to={`/nfts/${nft.id}`}>
              {/* <img src={nft.image_url} alt={nft.name} />
              <p>{nft.name}</p>
              <p>{nft.current_bid}</p> */}
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
