import { useState } from "react";
import "./NFTCreate.css";
import { Layout } from "../../components";
import { Navigate } from "react-router-dom";
import { createNFT } from "../../services/nfts";

const NFTCreate = (props) => {
  const [nft, setNFT] = useState({
    name: "",
    image_url: "",
    current_bid: "",
    start_date: "",
    avatar: 2,
    observations: [],
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNFT({
      ...nft,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createNFT(nft);
    setCreated({ created });
  };

  if (isCreated) {
    return <Navigate to={`/nfts`} />;
  }
  return (
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-name"
          placeholder="Name"
          value={nft.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-current_bid"
          placeholder="Starting Bid"
          value={nft.current_bid}
          name="current_bid"
          required
          onChange={handleChange}
        />
        <input
          className="start-date"
          placeholder="Start Date"
          value={nft.start_date}
          name="start_date"
          required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={nft.image_url}
          name="image_url"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default NFTCreate;
