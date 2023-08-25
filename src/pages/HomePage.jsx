import React, { useState } from "react";
import Button from "../components/Buttons/Button";
import CharacterLength from "../components/CharacterLength/CharacterLength";
import CheckBox from "../components/CheckBox/CheckBox";
import usePasswordGenerator from "../hooks/usePasswordGenerator";

const HomePage = () => {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
  ]);
  const [copied, setCopied] = useState(false)

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  const handleCheckboxChange = (i) => {
    const updatedCheckbox = [...checkboxData];
    updatedCheckbox[i].state = !updatedCheckbox[i].state;
    setCheckboxData(updatedCheckbox);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <main className="container">
      <div className="glass">
        <h1>Password Generator</h1>
        {password && (
          <div className="flex justify-between gap">
            <div className="passwordField">{password}</div>
            <Button onClick={() => handleCopy()} title={copied ? 'copied' :"copy"} />
          </div>
        )}
        <CharacterLength state={length} setState={setLength} />
        <CheckBox
          checkboxData={checkboxData}
          handleCheckboxChange={handleCheckboxChange}
        />
        {errorMessage && <h3 className="error">{errorMessage}</h3>}
        <Button
          styles={{
            width: "100%",
            height: "3rem",
            fontSize: "1.5rem",
            fontWeight: 600,
          }}
          title={"Generate Password"}
          onClick={() => generatePassword(checkboxData, length)}
        />
      </div>
    </main>
  );
};

export default HomePage;
