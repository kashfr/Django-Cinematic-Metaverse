import "./NFTCard.css";
import { Link } from "react-router-dom";

const NFTCard = (props) => {
  return (
    <div className="nft-card">
      <Link className="card" to={`/nfts/${props._id}`}>
        <img className="nft-card-image" src={props.imgURL} alt={props.name} />
        <div>View</div>
      </Link>
    </div>
  );
};

export default NFTCard;
