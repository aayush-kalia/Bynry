import React from "react";
import "./FilterBar.css";

const FilterBar = ({
  nameFilter,
  setNameFilter,
  domainFilter,
  setDomainFilter,
  cityFilter,
  setCityFilter,
}) => {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search by name"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by domain"
        value={domainFilter}
        onChange={(e) => setDomainFilter(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by city"
        value={cityFilter}
        onChange={(e) => setCityFilter(e.target.value)}
      />
    </div>
  );
};

export default FilterBar;
