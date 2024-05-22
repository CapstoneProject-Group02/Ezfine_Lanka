import React from "react";
import "./OffensesDetails.css";
import { useLanguage } from "../Components/Driver/LanguageContext";
import englishContent from "../Components/Driver/Json/DDPT.json";
import sinhalaContent from "../Components/Driver/Json/DDPE.json";
import tamilContent from "../Components/Driver/Json/DDPS.json";

function OffensesDetails() {
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
  const fileUrl =
    "https://drive.google.com/file/d/1zTwtYwER57J9H0lyY4MHYubY7p3tmbRV/view?usp=sharing";

  const handleDownload = () => {
    window.open(fileUrl, "_blank");
  };
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>{content.DownloadPDF}</h1>
          <button onClick={handleDownload}>Download PDF</button>
        </header>
      </div>
    </div>
  );
}

export default OffensesDetails;