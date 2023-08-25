import React from "react";

const CharacterLength = ({ state, setState }) => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 style={{ fontWeight: 400, color: "white", fontSize: "1.5rem" }}>
          Character Length
        </h2>
        <h2 style={{ fontWeight: 400, color: "white", fontSize: "1.5rem" }}>
          {state}
        </h2>
      </div>
      <input
        style={{ width: "100%" }}
        type="range"
        min={1}
        max={16}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};

export default CharacterLength;
