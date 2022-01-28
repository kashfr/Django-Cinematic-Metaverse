import { useState, useEffect } from "react";
import "./NFTEdit.css";
import { useParams, Redirect } from "react-router-dom";
import { Layout } from "../../components";
import { getNFT, updateNFT } from "../../services/products";

const NFTEdit = (props) => {
  const [nft, setNFT] = useState({
    name: "",
    description: "",
    imgURL: "",
    price: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchNFT = async () => {
      const nft = await getNFT(id);
      setNFT(nft);
    };
    fetchNFT();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNFT({
      ...nft,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateNFT(id, nft);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/nfts/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="nft-edit">
        <div className="image-container">
          <img className="edit-nft-image" src={nft.imgURL} alt={nft.name} />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={nft.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
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
            placeholder="Price"
            value={nft.price}
            name="price"
            required
            onChange={handleChange}
          />
          <textarea
            className="textarea-description"
            rows={10}
            cols={78}
            placeholder="Description"
            value={nft.description}
            name="description"
            required
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default NFTEdit;