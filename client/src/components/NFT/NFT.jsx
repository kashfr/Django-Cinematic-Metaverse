import "./NFT.css";
import { Link } from "react-router-dom";

const NFT = (props) => {
  return (
    <>
      <Link className="nft" to={`/nfts/${props._id}`}>
        <img className="nft-image" src={props.imgURL} alt={props.name} />
        <div className="nft-name">{props.name}</div>
        <div className="price">{`$${props.price}`}</div>
      </Link>
    </>
  );
};
export default NFT;
