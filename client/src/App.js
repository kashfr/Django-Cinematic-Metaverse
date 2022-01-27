import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductCards from "./components/ProductCards/ProductCards";
// import SignUp from "./screens/SignUp/SignUp";
// import SignIn from "./screens/SignIn/SignIn";
// import SignOut from "./screens/SignOut/SignOut";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/avatars" element={<ProductCards />} />
        <Route path="/avatars" element={<ProductCards />} />
        <Route path="/avatars/:id" element={<ProductCards />} />
      </Routes>
    </div>
  );
}

export default App;
