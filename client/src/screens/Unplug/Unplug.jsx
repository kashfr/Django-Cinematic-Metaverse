import { useEffect } from "react";
import { unplug } from "../../services/users";
import { useHistory } from "react-router-dom";

const Unplug = (props) => {
  const { setUser } = props;
  const history = useHistory();

  useEffect(() => {
    const unplugUser = async () => {
      await unplug();
      setUser(null);
      history.push("/");
    };
    unplugUser();
  }, [history, setUser]);

  return "";
};

export default Unplug;
