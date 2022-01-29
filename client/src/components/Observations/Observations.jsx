import React from "react";
// import StarRating from "star-rating-react";
import "./Observations.css";

const Observations = (props) => {
  const observationsJSX = props.observations.map((observation, index) => (
    <div className="nft-observation" key={index}>
      <h1>{observation.author}</h1>
      {/* <StarRating
        size={observation.rating}
        value={observation.rating}
        onChange={function (val) {
          console.log(val);
        }}
      /> */}
      <p>{observation.description}</p>
    </div>
  ));

  return <div className="nft-observations">{observationsJSX}</div>;
};

export default Observations;
