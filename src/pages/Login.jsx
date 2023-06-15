import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "./tes/css/Login.css";
import wave from "./tes/img/wave.png";
import loginImg from "./tes/img/login.svg";
import avatar from "./tes/img/avatar.svg";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [userType, setUserType] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const { login } = useContext(AuthContext);

  const inputs = document.querySelectorAll(".input");

  function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }

  function remcl() {
    let parent = this.parentNode.parentNode;
    if (!this.value) {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {showAlert && (
        <div className="alert-container">
          <div className="alert">
            <p>{error}</p>
            <button onClick={() => setShowAlert(false)}>Close</button>
          </div>
        </div>
      )}
      <img className="wave" src={wave} alt="wave" />
      <div className="login-container">
        <div className="img">
          <img src={loginImg} alt="login" />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img src={avatar} alt="avatar" />
            <h2 className="title">Login</h2>
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
            <Link to="#" className="forgot-password-link">
              Forgot Password?
            </Link>
            <input type="submit" className="btn-login" value="Login" />
            <p className="register-text">
              Don't have an account?
              <Link to="/daftar" className="register-link">
                {" "}
                Register Here
              </Link>
            </p>
            {loginSuccess && (
              <p>
                Login berhasil! Anda login sebagai {userType === "admin" ? "admin" : "user"}.
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;