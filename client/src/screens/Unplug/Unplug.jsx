import { useEffect } from "react";
import { unplug } from "../../services/users";
import { useNavigate } from "react-router-dom";

const Unplug = (props) => {
  const { setUser } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const unplugUser = async () => {
      await unplug();
      setUser(null);
      navigate.push("/");
    };
    unplugUser();
  }, [navigate, setUser]);

  return "";
};

export default Unplug;
