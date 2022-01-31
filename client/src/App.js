import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./screens/Home/Home.jsx";
import NFTMarketplace from "./screens/NFTMarketplace/NFTMarketplace";
import NFTCreate from "./screens/NFTCreate/NFTCreate";
import NFTEdit from "./screens/NFTEdit/NFTEdit";
import NFTDetail from "./screens/NFTDetail/NFTDetail";

import AvatarProfile from "./components/AvatarProfile/AvatarProfile";

import { verifyUser } from "./services/users";
import Ascend from "./screens/Ascend/Ascend";
import PlugIn from "./screens/PlugIn/PlugIn";
import Unplug from "./screens/Unplug/Unplug";

const App = () => {
  // let navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [toggle, setToggle] = useState(false)
  
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home user={user} toggle={toggle}/>} />
        <Route path="/ascend" element={<Ascend setUser={setUser} />} />
        <Route path="/plug-in" element={<PlugIn setUser={setUser} />} />
        <Route path="/unplug" element={<Unplug setUser={setUser} />} />

        <Route
          path="/add-nft"
          element={user ? <NFTCreate user={user} /> : <Navigate to="/ascend" />}
        />
        <Route path="/nfts" element={<NFTMarketplace user={user} />} />
        <Route
          path="nfts/:id/edit"
          element={user ? <NFTEdit user={user} /> : <Navigate to="/ascend" />}
        />
        <Route exact path="/nfts/:id" element={<NFTDetail user={user} setToggle={setToggle}/>} />

        <Route path="/avatars" element={<AvatarProfile />} />
        <Route path="/avatars/:id" element={<AvatarProfile />} />
      </Routes>
    </div>
  );
};

export default App;
