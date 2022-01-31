import { useState, useEffect } from "react";
import "./NFTDetail.css";
import { Layout, ObservationForm, Observations } from "../../components";
import { getNFT, deleteNFT, updateNFT } from "../../services/nfts";
import { createObservation } from "../../services/observations";
import { useParams, Link, useNavigate, Navigate } from "react-router-dom";

const NFTDetail = (props) => {
  const navigate = useNavigate();
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const [reload, setReload] = useState(true);

  const [nft, setNFT] = useState({
    name: "",
    image_url: "",
    current_bid: "",
    observations: [],
  });

  const [observation, setObservation] = useState({
    name: "",
    text: "",
    avatar: 16,
    nft: id,
  });

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
    // event.preventDefault();
    await createObservation(observation);
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
            <div className="current_bid">{`$${nft.current_bid}`}</div>
            <div className="description">{nft.observation}</div>
            <div className="button-container">
              <Link className="edit-button" to={`/nfts/${nft.id}/edit`}>
                Edit
              </Link>
              <button
                className="delete-button"
                onClick={() => {
                  deleteNFT(nft.id);
                  props.setToggle((prev) => !prev);
                  navigate("/");
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="observations-wrapper">
          <ObservationForm
            username={observation.name}
            description={observation.text}
            onSubmit={handleSubmit}
            onChange={handleChange}
            setToggle={props.setToggle}
          />
          <Observations observations={nft.observations} />
        </div>
      </>
    </Layout>
  );
};

export default NFTDetail;
