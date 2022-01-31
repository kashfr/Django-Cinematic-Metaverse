import React from "react";
// import StarRating from "star-rating-react";
import "./Observations.css";

const Observations = (props) => {
  console.log(props);
  if (!props) {
    console.log("HEY" + props.observations);
  } else {
    console.log("WE died");
    return props.observations.map((observation, index) => (
      <div className="nft-observation" key={index}>
        <h1>{observation.name}</h1>
        <p>{observation.text}</p>
      </div>
    ));
  }
};

export default Observations;

/* <StarRating
  //       size={observation.rating}
  //       value={observation.rating}
  //       onChange={function (val) {
  //         console.log(val);
  //       }}
  //     /> */
