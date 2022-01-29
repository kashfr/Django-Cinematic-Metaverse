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
import SignUp from "./screens/Ascend/Ascend";
import SignIn from "./screens/PlugIn/PlugIn";
import SignOut from "./screens/Unplug/Unplug";

const App = () => {
  // let navigate = useNavigate();
  const [user, setUser] = useState(null);

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
        <Route path="/" element={<Home user={user} />} />
        <Route path="/ascend" element={<SignUp setUser={setUser} />} />
        <Route path="/plug-in" element={<SignIn setUser={setUser} />} />
        <Route path="/unplug" element={<SignOut setUser={setUser} />} />

        <Route path="/add-nft">
          {user ? <NFTCreate user={user} /> : <Navigate to="/ascend" />}
        </Route>
        <Route path="/nfts" element={<NFTMarketplace user={user} />} />
        <Route
          path="nfts/:id/edit"
          element={user ? <NFTEdit user={user} /> : <Navigate to="/ascend" />}
        />
        <Route exact path="/nfts/:id">
          <NFTDetail user={user} />
        </Route>

        <Route path="/avatars" element={<AvatarProfile />} />
        <Route path="/avatars/:id" element={<AvatarProfile />} />
      </Routes>
    </div>
  );
};

export default App;
