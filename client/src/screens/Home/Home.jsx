import "./Home.css";
import { Layout, NFTCards } from "../../components";
import { useState, useEffect } from "react";
import { getNFTs } from "../../services/nfts";

const Home = (props) => {
  // const [hottest, setHottest] = useState([]);

  // useEffect(() => {
  //   const fetchNFTs = async () => {
  //     const allNFTs = await getNFTs();
  //     setHottest(allNFTs);
  //   };
  //   fetchNFTs();
  // }, []);

  // const [currentImage, setCurrentImage] = useState(0)
  // const [images, setImages] = useState([
  //   "https://res.cloudinary.com/dojhf40bp/image/upload/c_scale,w_750/v1642995060/rafael-cisneros-mendez-y5PG8ZecXQI-unsplash_h3fujm.jpg",
  //   "https://res.cloudinary.com/dojhf40bp/image/upload/c_scale,w_750/v1643583695/o-escribenos-hotelposadadelsol_zjxzwy.jpg",
  //   "https://res.cloudinary.com/dojhf40bp/image/upload/c_scale,w_750/v1643120632/joseph-barrientos-haOaBVJ45pU-unsplash_k6j1sq.jpg"
  // ])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (currentImage < images.length - 1) {
  //       let newValue = currentImage + 1
  //       setCurrentImage(newValue)
  //     } else {
  //       setCurrentImage(0)
  //     }
  //     return currentImage;
  //   }, 2500);
  //   return () => clearInterval(interval);
  // }, [images.length, currentImage]);

  return (
    <Layout user={props.user}>
      <div className="home">
        <NFTCards toggle={props.toggle}/>
        
        {/* <img src={images[currentImage]} alt='background images' /> */}
        
      </div>
    </Layout>
  );
};

export default Home;
