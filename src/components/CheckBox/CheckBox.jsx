import React from "react";
import "./checkBox.css";

const CheckBox = ({ checkboxData, handleCheckboxChange }) => {
  return (
    <div className="checkbox">
      {checkboxData.map((data, i) => (
        <div key={i}>
          <input
            type="checkbox"
            checked={data.state}
            onChange={() => handleCheckboxChange(i)}
            className="input"
          />
          <label>{data.title}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
