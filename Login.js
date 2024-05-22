import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../Driver/LanguageContext";
import englishContent from "./Json/DLE.json";
import sinhalaContent from "./Json/DLS.json";
import tamilContent from "./Json/DLT.json";

function Login() {
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setLoginStatus("Username and password are required");
      return;
    }
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus("Logged in successfully");
        setTimeout(() => {
          // Redirect to another page after 1 minute (60000 milliseconds)
          window.location.href = "/inter";
        }, 100);
      }
    });
  };

  return (
   
    <div className="bgdriverlogin">
      <div className="overlaydli">
      <h1>Login <span style={{ color: '#E4A80E' }}>Here</span></h1>
    <div className="loginbgdli">
    <div className="loginFormdli">
      <form>
      
        <label htmlFor="username">{content.UsernameLabel}</label>
        <input
          className="textInput"
          type="text"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder={content.UsernamePlaceholder}
          required
        />
        <label htmlFor="password">{content.PasswordLabel}</label>
        <input
          className="textInput"
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder={content.PasswordPlaceholder}
          required
        />
        <input
          className="button1"
          type="submit"
          onClick={login}
          value={content.LoginButton}
        />
        <p>
          {loginStatus}
        </p>
    
        <br></br>
        
        <h3 className="member">{content.NewMemberMessage}</h3>
        <Link to="/signup">
          <button className="button1">{content.CreateAccountButton}</button>
        </Link>
        <Link to="/">
          <button className="button1">Back</button>
        </Link>
        <Link to="/forgetpassword">
          <button className="button1">Forget Password</button>
        </Link>
       
      </form>
      {/* <Link to="/Driverinterface"><button className="dri">go</button></Link> */}
      </div>
    </div>
    </div>
  </div>
  );
}

export default Login;
