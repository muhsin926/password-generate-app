import React from "react";
import "./checkBox.css";

const list = [
  "include number",
  "include simbal",
  "include lowercase",
  "include uppercase",
];

const CheckBox = ({ checkboxData, handleCheckboxChange }) => {
  return (
    <>
      <div className="checkbox">
        {checkboxData.map((data, i) => (
          <>
            <input
              type="checkbox"
              checked={data.state}
              onChange={() => handleCheckboxChange(i)}
              style={{ transform: "scale(1.5)" }}
            />
            <label style={{ fontSize: "1.5rem", marginLeft: '1rem', color: 'white'}}>{data.title}</label>
          </>
        ))}
      </div>
    </>
  );
};

export default CheckBox;
