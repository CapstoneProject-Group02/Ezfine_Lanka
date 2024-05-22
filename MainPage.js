import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
import MainComponent from "../MainComponent";
import { useLanguage } from "../Components/Driver/LanguageContext";
import englishContent from "../Components/Driver/Json/ME.json";
import sinhalaContent from "../Components/Driver/Json/MS.json";
import tamilContent from "../Components/Driver/Json/MT.json";

const MainLogin = () => {
  const { selectedLanguage } = useLanguage();

  let content;
  switch (selectedLanguage) {
    case "english":
      content = englishContent;
      break;
    case "sinhala":
      content = sinhalaContent;
      break;
    case "tamil":
      content = tamilContent;
      break;
    default:
      content = englishContent;
  }
  return (
    <div className="bg">
      <div className="overlay">
      <div className="mainpage">
        <div className="head">
          <h1>EZ <span style={{ color: '#E4A80E' }}>FINE</span> SYSTEM</h1>
          <p>AI ASSISTED FINE MANAGEMENT SYSTEM</p>
        </div>

        <div className="body">
          <p>
            <strong><span style={{ color: '#E4A80E' }}>Login</span> As</strong>
            
          </p>
          <div className="driver">
            <p className="user"> {content.driver}</p>
            <div>
              <Link to="/login">
                <img src="./images/driver.jpg" alt="" className="image" />
              </Link>
            </div>
          </div>
          <div className="officer">
            <p className="user">{content.officer}</p>
            <Link to="/log1">
              <img src="./images/officer.jpg" alt="" className="image" />
            </Link>
          </div>
          {/* <MainComponent></MainComponent> */}
        </div>
      </div>
      </div>
    </div>
  );
};

export default MainLogin;
