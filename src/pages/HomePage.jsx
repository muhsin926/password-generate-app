import React, { useState } from "react";
import Button from "../components/Buttons/Button";
import CharacterLength from "../components/CharacterLength/CharacterLength";
import CheckBox from "../components/CheckBox/CheckBox";
import usePasswordGenerator from "../hooks/usePasswordGenerator";

const style = {
  width: "100%",
  height: "3rem",
  fontSize: "1.5rem",
  fontWeight: 600,
};

const HomePage = () => {
  const [length, setLength] = useState(8);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
  ]);
  const [copied, setCopied] = useState(false);

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

  const maskPassword = (password) => {
    // Calculate the index where the masking should start
    const startIndex = Math.max(password.length - 5, 0);
    const visiblePart = password.slice(0, startIndex);
    const maskedPart = "*".repeat(5);
    const maskedPassword = visiblePart + maskedPart;
    return maskedPassword;
  };

  return (
    <main className="container">
      <div className="glass">
        <h1>Password Generator</h1>
        {password && (
          <div className="flex justify-between gap">
            <div className="passwordField">{maskPassword(password)}</div>
            <Button
              onClick={() => handleCopy()}
              title={copied ? "copied" : "copy"}
            />
          </div>
        )}
        <CharacterLength state={length} setState={setLength} />
        <CheckBox
          checkboxData={checkboxData}
          handleCheckboxChange={handleCheckboxChange}
        />
        {errorMessage && <h3 className="error">{errorMessage}</h3>}
        <Button
          styles={style}
          title={"Generate Password"}
          onClick={() => generatePassword(checkboxData, length)}
        />
      </div>
    </main>
  );
};

export default HomePage;
