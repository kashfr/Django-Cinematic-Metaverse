import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

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
      <Switch>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
        <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
        <Route path="/sign-out" element={<SignOut setUser={setUser} />} />

        <Route path="/add-nft">
          {user ? <NFTCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route path="/nfts" element={<NFTMarketplace user={user} />} />
        <Route
          path="nfts/:id/edit"
          element={user ? <NFTEdit user={user} /> : <Redirect to="/sign-up" />}
        />
        <Route exact path="/nfts/:id">
          <NFTDetail user={user} />
        </Route>

        <Route path="/avatars" element={<AvatarProfile />} />
        <Route path="/avatars/:id" element={<AvatarProfile />} />
      </Switch>
    </div>
  );
};

export default App;
