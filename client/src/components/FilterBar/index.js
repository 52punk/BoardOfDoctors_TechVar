import React, { useState, useRef } from "react";
import "./styles.css";

const FilterBar = (props) => {
  const selCity = useRef();
  const avail = useRef();
  const handleCity = () => {
    console.log(`From filterBar ${selCity.current.value}`);
    props.city(selCity.current.value);
  };
  const handleAvail = () => {
    console.log(`From FilterBar ${avail.current.value}`);
    props.availability(avail.current.value);
  };

  return (
    <div className="filterbar-container">
      <div className="filterbar-filters-container">
        <div className="filter-container ">
          <select name="specialist" className="dropdown-content primary">
            <option className="dropdown-item">Neurology</option>
          </select>
        </div>
        <div className="filter-container ">
          <select
            ref={avail}
            name="availability"
            className="dropdown-content secondary"
            onClick={handleAvail}
          >
            <option value="yes" className="dropdown-item">
              Available
            </option>
            <option value="no" className="dropdown-item">
              Not Available
            </option>
          </select>
        </div>
        <div className="filter-container secondary">
          {/*<div className="dropbtn">City</div>*/}
          <select
            onClick={handleCity}
            ref={selCity}
            name="city"
            className="dropdown-content"
          >
            <option className="dropdown-item" value="Bengalore">
              Bengaluru
            </option>
            <option className="dropdown-item" value="Delhi">
              Delhi
            </option>
            <option className="dropdown-item" value="Mumbai">
              Mumbai
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
