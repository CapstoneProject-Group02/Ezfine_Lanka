import React from "react";
import { Link } from "react-router-dom";
import "./DriverInterface.css";
import { useLanguage } from "../Components/Driver/LanguageContext";
import englishContent from "../Components/Driver/Json/DME.json";
import sinhalaContent from "../Components/Driver/Json/DMS.json";
import tamilContent from "../Components/Driver/Json/DMT.json";
import MainComponent from "../MainComponent";

function Driverinterface() {
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
    
    <div className="bgd">
      <div className="overlayd">
      <h1>Drive Responsibly<span style={{ color: '#E4A80E' }}>, Arrive Safely</span></h1>
      
        <div className="bodyd">
          <br></br>
          <div className="payd">
            <p className="topicd">{content.Payment}</p>
            <div>
              
                <Link to="/payment" className="link">
                  <img src="./images/pay.png" alt="" className="imaged" />
                </Link>
             
            </div>
          </div>
          <div className="historyd">
            <p className="topicd">{content.ViewHistory}</p>
            
              <Link to="/historywithpay" className="link">
                <img src="./images/history.png" alt="" className="imaged" />
              </Link>
          
          </div>
          <div className="latepaymentd">
            <p className="topicd">{content.LatePayment}</p>
            <div>
              
                <Link to="/latepayment" className="link">
                  <img src="./images/late.png" alt="" className="imaged" />
                </Link>
             
            </div>
          </div>
          <div className="offencesd">
            <p className="topicd">{content.OffencesDetails}</p>
           
              <Link to="/offensesdetails" className="link">
                <img
                  src="./images/details.png"
                  alt=""
                  className="imaged"
                />
              </Link>
          
          </div>
            {/* <MainComponent></MainComponent> */}
        </div>
        </div>
      </div>
    
  );
}

export default Driverinterface;