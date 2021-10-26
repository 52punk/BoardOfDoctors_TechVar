import React from "react";
import "./styles.css";
const FilterBar = () => {
  return (
    <div className="filterbar-container">
      <div className="filterbar-filters-container">
        <div className="filter-container primary">neurology</div>
        <div className="filter-container secondary">Availability</div>
        <div className="filter-container secondary">Bengalore</div>
      </div>
    </div>
  );
};

export default FilterBar;
