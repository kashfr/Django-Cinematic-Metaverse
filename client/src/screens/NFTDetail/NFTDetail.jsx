import { useState, useEffect } from "react";
import "./NFTDetail.css";
// import { Layout, ObservationForm, Observations } from "../../components";
import { getNFT, deleteNFT, updateNFT } from "../../services/nfts";
import { useParams, Link } from "react-router-dom";
import { Observations } from "../../components/Observations/Observations";
import ObservationForm from "../../components/ObservationForm/ObservationForm";
// import StarRating from "star-rating-react";

const NFTDetail = (props) => {
  const [nft, setNFT] = useState({
    name: "",
    description: "",
    imgURL: "",
    price: "",
    reviews: [],
  });
  const [review, setReview] = useState({
    author: "",
    rating: "",
    description: "",
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
    setReview({
      ...review,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    nft.reviews.push(review);
    setNFT(nft);
    await updateNFT(id, nft);
  };

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    // <Layout user={props.user}>
    <>
      <div className="nft-detail">
        <img className="nft-detail-image" src={nft.imgURL} alt={nft.name} />
        <div className="detail">
          <div className="name">{nft.name}</div>
          <div className="seller">by {nft.userId.username}</div>
          <div className="rating">
            {/* <StarRating
              size={nft.rating}
              value={nft.rating}
              onChange={function (val) {
                console.log(val);
              }}
            /> */}
          </div>
          <div className="price">{`$${nft.current_price}`}</div>
          <div className="description">{nft.description}</div>
          <div className="button-container">
            <Link className="edit-button" to={`/nfts/${nft._id}/edit`}>
              Edit
            </Link>
            <button
              className="delete-button"
              onClick={() => deleteNFT(nft._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="reviews-wrapper">
        <ObservationForm
          author={review.author}
          rating={review.rating}
          description={review.description}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
        <Observations observations={nft.reviews} />
      </div>
    </>
    // </Layout>
  );
};

export default NFTDetail;
