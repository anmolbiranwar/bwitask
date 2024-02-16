// LoginPage.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./axiosInstance"; 

const LoginPage = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/auth/login", values)
      .then((response) => {
        const { data } = response;
        if (data.token) {
          localStorage.setItem("token", data.token); 
          navigate("/homepage");
        } else {
          setMsg("Wrong username or password");
        }
      })
      .catch((error) => {
        setMsg("Wrong username or password"); 
      });
  };

  const forgotPassword = () => {
    console.log("Forgot Password clicked");
    
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage bg-primary">
      <div className="p-5 rounded border loginForm bg-white">
        <h2>LOGIN TO YOUR ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              name="username"
              autoComplete="off"
              placeholder="Enter Username"
              value={values.username}
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
              className="form-control rounded"
              required
            />
            <span
              className="input-group-text bi bi-person-fill"
              id="inputGroupPrepend3"
            ></span>
          </div>

          <div className="input-group mb-2">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              autoComplete="off"
              placeholder="Enter Password"
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              className="form-control rounded"
              required
            />
            <i
              className={`input-group-text bi ${
                passwordVisible ? "bi-eye-fill" : "bi-eye-slash-fill"
              }`}
              id="togglePassword"
              onClick={() => setPasswordVisible(!passwordVisible)}
              style={{ cursor: "pointer" }}
            ></i>
          </div>
          <div className="mb-2">
            <button
              type="button"
              className="btn btn-link"
              onClick={forgotPassword}
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 rounded-0 bg-primary"
          >
            Sign in
          </button>
          {msg && (
            <div className="mt-2 text-center text-danger">{msg}</div>
          )}
        </form>
        <p>username: atuny0 <br/>
           password: 9uQFF1Lh 
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
