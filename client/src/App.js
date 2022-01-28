import "./App.css";
import { Route, Routes } from "react-router-dom";
import AvatarProfiles from "./components/AvatarProfiles/AvatarProfiles";
// import Home from "./screens/Home/Home";
import AvatarProfile from "./components/AvatarProfile/AvatarProfile";
// import SignUp from "./screens/SignUp/SignUp";
// import SignIn from "./screens/SignIn/SignIn";
// import SignOut from "./screens/SignOut/SignOut";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/avatars" element={<AvatarProfiles />} />
        {/* <Route path="/avatars" element={<AvatarProfiles />} /> */}
        <Route path="/avatars/:id" element={<AvatarProfile />} />
      </Routes>
    </div>
  );
}

export default App;
