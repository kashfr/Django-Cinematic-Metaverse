import "./Nav.css";
import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/add-nft">
      Add NFT
    </NavLink>
    <NavLink className="link" to="/unplug">
      Unplug
    </NavLink>
  </>
);
const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/ascend">
      Ascend
    </NavLink>
    <NavLink className="link" to="/plug-in">
      Plug In
    </NavLink>
  </>
);
const alwaysOptions = (
  <>
    <NavLink className="link" to="/nfts">
      NFT Marketplace
    </NavLink>
  </>
);
const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          Django Cinematic Metaverse
        </NavLink>
        <div className="links">
          {/* {user && <div className="link welcome">Welcome, {user.username}</div>} */}
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};
export default Nav;
