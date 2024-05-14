import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import DriverLogin from "./Driver/DriverLogin";
import DriverSignUp from "./Driver/DriverSignUp";
import OfficerLogin from "./Officer/OfficerLogin";
import OfficerSignUp from "./Officer/OfficerSignUp";
import OTPVerify from "./FireBase/OTPVerify";
// import DriverMainInterface from "./Driver/DriverMainInterface";
// import OfficerMainInterface from "./Officer/OfficerMainInterface";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="driverlogin" element={<DriverLogin />} />
        <Route path="driversignup" element={<DriverSignUp />} />
        <Route path="officerlogin" element={<OfficerLogin />} />
        <Route path="officersignup" element={<OfficerSignUp />} />
        <Route path="/OTPVerify" element={<OTPVerify />} />
        {/* <Route path="/drivermaininterface" element={<DriverMainInterface />} />
        <Route
          path="/officermaininterface"
          element={<OfficerMainInterface />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
