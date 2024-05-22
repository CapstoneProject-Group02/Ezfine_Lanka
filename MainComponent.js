// MainComponent.js
import React from "react";
import { useLanguage } from "./Components/Driver/LanguageContext";
import "./MainComponent.css"; // Import the CSS file

const MainComponent = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="main-container">
    <div className="cont">

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
  </div>
  );
};

export default MainComponent;
