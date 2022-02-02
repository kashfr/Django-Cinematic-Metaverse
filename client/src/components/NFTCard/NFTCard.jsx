import "./NFTCard.css";
import { Link } from "react-router-dom";

const NFTCard = ({ id, name, image_url }) => {
  return (
    <div className="nft-card">
      <Link className="card" to={`/nfts/${id}`}>
        <img className="nft-card-image" src={image_url} alt={name} />
        <div>Oculus</div>
      </Link>
    </div>
  );
};

export default NFTCard;
