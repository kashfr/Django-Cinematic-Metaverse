import { useState, useEffect } from "react";
import "./NFTDetail.css";
import { Layout, ObservationForm, Observations } from "../../components";
import { getNFT, deleteNFT, updateNFT } from "../../services/nfts";
import { useParams, Link } from "react-router-dom";
// import StarRating from "star-rating-react";

const NFTDetail = (props) => {
  const [nft, setNFT] = useState({
    name: "",
    image_url: "",
    current_bid: "",
    observations: [],
  });
  const [observation, setObservation] = useState({
    username: "",
    // rating: "",
    text: "",
  });
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchNFT = async () => {
      const nft = await getNFT(id);
      setNFT(nft);
      setLoaded(true);
    };
    fetchNFT();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setObservation({
      ...observation,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    nft.observations.push(observation);
    setNFT(nft);
    await updateNFT(id, nft);
  };

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout user={props.user}>
      <>
        <div className="nft-detail">
          <img
            className="nft-detail-image"
            src={nft.image_url}
            alt={nft.name}
          />
          <div className="detail">
            <div className="name">{nft.name}</div>
            {/* <div className="seller">by {nft.userId.username}</div> */}
            {/* <div className="rating">
            <StarRating
              size={nft.rating}
              value={nft.rating}
              onChange={function (val) {
                console.log(val);
              }}
            />
          </div> */}
            <div className="current_bid">{`$${nft.current_bid}`}</div>
            {/* <div className="description">{nft.description}</div> */}
            <div className="button-container">
              <Link className="edit-button" to={`/nfts/${nft.id}/edit`}>
                Edit
              </Link>
              <button
                className="delete-button"
                onClick={() => deleteNFT(nft.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="observations-wrapper">
          <ObservationForm
            username={observation.username}
            // rating={observation.rating}
            description={observation.text}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
          <Observations observations={nft.current_bid} />
        </div>
      </>
    </Layout>
  );
};

export default NFTDetail;
