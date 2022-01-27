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
        <div>
          <p>{avatar.username}</p>
          <p>{avatar.email_address}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
