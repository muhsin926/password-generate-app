import React, { useState } from "react";
import Button from "../components/Buttons/Button";
import CharacterLength from "../components/CharacterLength/CharacterLength";
import CheckBox from "../components/CheckBox/CheckBox";

const HomePage = () => {
  const [length, setLength] = useState(4)
  const [checkboxData, setCheckboxData] = useState([
    {title: 'Include Number', state: false},
    {title: 'Include Symbols', state: false},
    {title: 'Include Uppercase Letter', state: false},
    {title: 'Include Lowercase Letter', state: false},
  ])

  const handleCheckboxChange = (i)=> {
    const updatedCheckbox = [...checkboxData];
    updatedCheckbox[i].state  = !updatedCheckbox[i].state;
    setCheckboxData(updatedCheckbox)
  }

  return (
    <main className="container">
      <div className="glass">
        <div className="flex justify-between">
          <div className="passwordField"></div>
          <Button title={"copy"} />
        </div>
        <CharacterLength state={length} setState={setLength} />
        <CheckBox checkboxData={checkboxData} handleCheckboxChange={handleCheckboxChange} />
        <Button
          styles={{
            width: "100%",
            height: "3rem",
            fontSize: "1.5rem",
            fontWeight: 600,
          }}
          title={"Generate Password"}
        />
      </div>
    </main>
  );
};

export default HomePage;
