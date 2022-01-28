import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./screens/Home/Home.jsx";
import AvatarProfile from "./components/AvatarProfile/AvatarProfile";
import NFTDetail from "./screens/NFTDetail/NFTDetail";
// import NFTCreate from "./screens/NFTCreate/NFTCreate";
// import NFTEdit from "./screens/NFTEdit/NFTEdit";
// import NFTDetail from "./screens/NFTDetail/NFTDetail";

// import { Home } from "./screens/Home/Home";
// import SignUp from "./screens/SignUp/SignUp";
// import SignIn from "./screens/SignIn/SignIn";
// import SignOut from "./screens/SignOut/SignOut";

// const App = () => {
// 	const [user, setUser] = useState(null);

// 	useEffect(() => {
// 		const fetchUser = async () => {
// 			const user = await verifyUser();
// 			user ? setUser(user) : setUser(null);
// 		};
// 		fetchUser();
// 	}, []);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avatars" element={<AvatarProfile />} />
        {/* <Route path="/nfts" element={<Home />} /> */}
        <Route path="/avatars/:id" element={<AvatarProfile />} />
        <Route path="/nfts/:id" element={<NFTDetail />} />
      </Routes>
    </div>
  );
}

export default App;
