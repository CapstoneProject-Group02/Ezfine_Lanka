import React from "react";
import { useState,} from "react";
import Axios from "axios";
import "./Signup1.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../Driver/LanguageContext";
import englishContent from '..//Driver/Json/OSE.json';
import sinhalaContent from '..//Driver/Json/OSS.json';
import tamilContent from '..//Driver/Json/OST.json';

function Signup1() {
  const { selectedLanguage } = useLanguage();
  let content;
  switch (selectedLanguage) {
    case 'english':
      content = englishContent;
      break;
    case 'sinhala':
      content = sinhalaContent;
      break;
    case 'tamil':
      content = tamilContent;
      break;
    default:
      content = englishContent;
  }

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const [password, setPassword] = useState("");
  

  const register = (e) => {
    e.preventDefault();
    if (!email || !username || !password) {
      setRegisterStatus("All fields are required");
      return;
    }
    Axios.post("http://localhost:3001/register", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message === "Email is already in use") {
        setRegisterStatus("Email is already in use");
      } else if (response.data.message === "User registered successfully") {
        setRegisterStatus("Check Your Email");
        // Send request to backend to send email
        Axios.post("http://localhost:3001/sendEmail", {
          email: email,
          username: username,
        })
          .then((response) => {
            // Handle the response if needed
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });
        // Redirect to verification page
        setTimeout(() => {
          window.location.href = "/ver";
        }, 100);
      } else {
        setRegisterStatus("Successfully Registration Completed.");
      }
    });
  };

  return (
    <div className="bgposi">
      <div className="overlayosi">
      <h1>Register <span style={{ color: '#E4A80E' }}>Here</span></h1>
      <div className="loginFormosi">
        <form>
          <label htmlFor="email">{content.EmailLabel}</label>
          <input
            className="textInput"
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder={content.EmailPlaceholder}
            required
          />

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

          <label htmlFor="confirmPassword">Confirm Password</label>
           <input
            className="textInput"
            type="password"
            name="confirmPassword"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            placeholder="Confirm Password"
            required
          />

           
           
           <p>{content.ExistingMemberMessage}</p>
             <h1
            style={{
              fontSize: "15px",
              textAlign: "center",
              marginTop: "-55px",
              color: "red",
            }}
          >
            {registerStatus}
          </h1>
          
          
          <Link to="/login">
            <button className="button4">{content.LoginButton}</button>
          </Link>
          <br></br>
          <input
            className="button4"
            type="submit"
            onClick={register}
            value={content.RegisterButton}
          />
          
        </form>
      </div>
      </div>
    </div>
  );
}

export default Signup1;
