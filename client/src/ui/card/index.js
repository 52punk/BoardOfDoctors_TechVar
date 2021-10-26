import React from "react";
import "./styles.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-details-container">
        <div className="card-pic-container">pic</div>
        <div className="card-info-container">information</div>
      </div>
      <div className="card-schedule-container">schedule here</div>
    </div>
  );
};

export default Card;
