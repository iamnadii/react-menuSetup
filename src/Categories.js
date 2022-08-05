import React from "react";

const Categories = ({ category, filterData }) => {
  return (
    <div className="btn-container">
      {category.map((data, index) => {
        return (
          <div
            key={index}
            className="filter-btn"
            onClick={() => filterData(data)}
          >
            {data}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
