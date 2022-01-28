import "./Home.css";
import { Layout, NFTCards } from "../../components";

export const Home = () => {
  return (
    <Layout user={props.user}>
      <div className="home">
        <NFTCards />
      </div>
    </Layout>
  );
};
