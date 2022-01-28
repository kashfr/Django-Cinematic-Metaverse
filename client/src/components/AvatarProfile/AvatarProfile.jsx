import "./AvatarProfile.css";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAvatar } from "../../services/avatars";
// import { Layout, AvatarProfiles } from '../../components'

function AvatarProfile(props) {
  const [avatar, setAvatar] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchAvatar = async () => {
      const avatar = await getAvatar(id);
      setAvatar(avatar);
      setLoaded(true);
    };

    fetchAvatar();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <p>{avatar.username}</p>
    </div>
  );
}

export default AvatarProfile;
