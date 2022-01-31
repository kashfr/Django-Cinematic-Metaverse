import React from "react";
import "./Observations.css";

const Observations = (props) => {
  return (
    props.observations.map((observation, index) => (
      <div className="nft-observation" key={index}>
      <h1>{observation.name}</h1>
      <p>{observation.text}</p>
   </div>
  )));
};

export default Observations;
