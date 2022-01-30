import React from "react";
// import StarRating from "star-rating-react";
import "./Observations.css";

const Observations = (props) => {
  console.log(props);
  if (!props) {
    console.log("HEY" + props.observations);
  } else {
    console.log("WE died");
  }
  // const observationsJSX = props.observations.map((observation, index) => (
  //   <div className="nft-observation" key={index}>
  //     <h1>{observation.username}</h1>
  //     {/* <StarRating
  //       size={observation.rating}
  //       value={observation.rating}
  //       onChange={function (val) {
  //         console.log(val);
  //       }}
  //     /> */}
  //     <p>{observation.text}</p>
  //   </div>
  // ));

  return <div className="nft-observations">{props}</div>;
};

export default Observations;
