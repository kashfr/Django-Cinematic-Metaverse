import { useState, useEffect } from "react";
import "./ProductCards.css";
import { getAvatars } from "../../services/avatars";

const ProductCards = () => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const fetchAvatars = async () => {
      const allAvatars = await getAvatars();
      setAvatars(allAvatars);
    };
    fetchAvatars();
  }, []);

  return (
    <div>
      {avatars.map((avatar) => (
        <p>{avatar.username}</p>
      ))}
    </div>
  );
};

export default ProductCards;
