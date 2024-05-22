import React from "react";
import { useLanguage } from "./Components/Driver/LanguageContext";
import "./DriverComponent.css"; // Import the CSS file

const DriverComponent = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="main-container">
      <button className="button" onClick={() => handleLanguageChange("english")}>
         English
      </button>
      <button className="button" onClick={() => handleLanguageChange("sinhala")}>
      සිංහල
      </button>
      <button className="button" onClick={() => handleLanguageChange("tamil")}>
      தமிழ்
      </button>
    </div>
  );
};

export default DriverComponent;
