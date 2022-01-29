import { useState } from "react";
import "./NFTCreate.css";
import { Layout } from "../../components";
import { Redirect } from "react-router-dom";
import { createNFT } from "../../services/nfts";

const NFTCreate = (props) => {
  const [nft, setNFT] = useState({
    name: "",
    image_url: "",
    current_price: "",
    start_date: "",
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
    return <Redirect to={`/nfts`} />;
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
          className="input-price"
          placeholder="Starting Bid"
          value={nft.current_bid}
          name="price"
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
        {/* <textarea
          className="textarea-description"
          rows={10}
          placeholder="Description"
          value={nft.description}
          name="description"
          required
          onChange={handleChange}
        /> */}
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={nft.image_url}
          name="imgURL"
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
