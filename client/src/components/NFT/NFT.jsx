import "./NFT.css";
import { Link } from "react-router-dom";

const NFT = (props) => {
  console.log(props);
  return (
    <>
      <Link className="nft" to={`/nfts/${props.id}`}>
        <img className="nft-image" src={props.image_url} alt={props.name} />
        <div className="nft-name">{props.name}</div>
        <div className="current-bid">{`${props.current_bid}`}</div>
      </Link>
    </>
  );
};
export default NFT;
