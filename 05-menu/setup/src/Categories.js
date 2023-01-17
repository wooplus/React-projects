import React from "react";

const Categories = ({ category, filterItems }) => {
  return (
    <div className="btn-container">
      {category.map((eachCategory, index) => {
        return (
          <button
            className="filter-btn"
            onClick={() => filterItems(eachCategory)}
            key={index}
          >
            {eachCategory}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
