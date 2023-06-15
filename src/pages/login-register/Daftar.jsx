import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; 
import { Link, useNavigate } from "react-router-dom";
import "./css/Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faLocationDot,
  faCalendar,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import wave from "./img/wave.png";
import daftarImg from "./img/register.svg";
import avatar from "./img/avatar.svg";

function Daftar() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const {register} = useContext(AuthContext);

  useEffect(() => {
    const checkExistingData = async () => {
      try {
        const response = await fetch(
          "https://6481d94629fa1c5c50322f14.mockapi.io/user"
        );
        const data = await response.json();

        const existingUsername = data.find(
          (user) => user.username === username
        );
        const existingEmail = data.find((user) => user.email === email);

        if (existingUsername) {
          setError("Username is already taken");
          setShowAlert(true);
        } else if (existingEmail) {
          setError("Email is already taken");
          setShowAlert(true);
        } else {
          setError("");
          setShowAlert(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkExistingData();
  }, [username, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password and confirm password do not match");
      setShowAlert(true);
      return;
    }

    const data = {
      username,
      email,
      phoneNumber,
      address,
      dateBirth,
      password,
      confirmPassword,
    };

    register(data)
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    const inputs = Array.from(document.querySelectorAll(".input"));

    const addcl = (e) => {
      let parent = e.target.parentNode.parentNode;
      parent.classList.add("focus");
    };

    const remcl = (e) => {
      let parent = e.target.parentNode.parentNode;
      if (!e.target.value) {
        parent.classList.remove("focus");
      }
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", addcl);
        input.removeEventListener("blur", remcl);
      });
    };
  }, []);

  return (
    <>
    <div className="daftar">

      {showAlert && (
        <div className="alert-container">
          <div className="alert">
            <p>{error}</p>
            <button onClick={() => setShowAlert(false)}>Close</button>
          </div>
        </div>
      )}
      <img className="wave" src={wave} />
      <div className="daftar-container">
        <div className="img">
          <img src={daftarImg} alt="register" />
        </div>
        <div className="register-content">
          <form onSubmit={handleSubmit}>
            
            <img src={avatar} alt="avatar" />
            <h2 className="title">Register</h2>
            <div className="input-div one">
              <div className="i">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="div">
                <h5>Username</h5>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="input-div">
              <div className="i">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="div">
                <h5>Email</h5>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="input-div">
              <div className="i">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="div">
                <h5>Phone Number</h5>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="input"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="input-div">
              <div className="i">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="div">
                <h5>Address</h5>
                <input
                  type="tel"
                  id="address"
                  name="address"
                  className="input"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="input-div">
              <div className="i">
                <FontAwesomeIcon icon={faCalendar} />
              </div>
              <div className="div">
                <h5>Date of birth</h5>
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  className="input"
                  value={dateBirth}
                  onChange={(e) => setDateBirth(e.target.value)}
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              <div className="i eye-icon">
                <FontAwesomeIcon
                  className={`password-toggle ${showPassword ? "active" : ""}`}
                  icon={showPassword ? faEyeSlash : faEye}
                  onClick={togglePasswordVisibility}
                />
              </div>
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <div className="div">
                <h5>Password Confirmation</h5>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  name="confirm-password"
                  className="input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="i eye-icon">
                <FontAwesomeIcon
                  className={`password-toggle ${showPassword ? "active" : ""}`}
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                  onClick={toggleConfirmPasswordVisibility}
                />
              </div>
              </div>
            </div>
            <input type="submit" className="btn-register" value="Register" />
            <p className="register-text">
              Already have an account?
              <Link to="/login" className="register-link">
                {" "}
                Login
              </Link>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Daftar;