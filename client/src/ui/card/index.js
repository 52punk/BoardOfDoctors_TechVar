import React from "react";
import "./styles.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-details-container">
        <div className="card-pic-container">
          <img src={props.picture} alt="doctor" />
        </div>
        <div className="card-info-container">
          <div className="card-info title">Dr. {props.name}</div>
          <div className="card-info other">
            {props.experience} years experience
          </div>
          <div className="card-info other">{props.degree}</div>
          <div className="card-info other">{props.specialist}</div>
        </div>
        <div className="card-info-fee">Rs. {props.fee}</div>
      </div>
      <div className="card-schedule-container">
        <div className="card-schedule availability">
          <div className="availability-title">
            {props.available === "yes" ? "AVAILABLE NOW" : "Next Availability"}
          </div>
          <div className="availability-time">
            {props.available === "yes" ? "" : "At 5:30 PM"}
          </div>
        </div>
        <div className="card-schedule schedule">SCHEDULE NOW</div>
      </div>
    </div>
  );
};

export default Card;
