import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
export default function SignUp() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    axios
      .post(`http://localhost:3001/resume/users`, formdata)
      .then(() => {
        setTimeout(() => {
          alert("Redirecting to Login Page");
          navigate('/login');
        }, 100);
      })
      .catch((err) => {
        console.log("cannot sign up");
        console.log(err);
      });
  };

  return (
    <div className="sign">
      <h1>Create Account</h1>
      <div className="up">
        <br></br>
        <br></br>
        <img
          src="https://static.vecteezy.com/system/resources/previews/003/689/230/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
          style={{ height: "650px", width: "700px" }}
        />
        <form onSubmit={handleSubmit}>
          <label style={{ fontWeight: "bold", fontFamily: "Arial" }}>
            UserName
          </label>
          <br></br>
          <br></br>
          <input
            type="text"
            name="username"
            value={formdata.username}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <label style={{ fontWeight: "bold", fontFamily: "Arial" }}>
            Email
          </label>
          <br></br>
          <br></br>
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <label style={{ fontWeight: "bold", fontFamily: "Arial" }}>
            Password
          </label>
          <br></br>
          <br></br>
          <input
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            style={{height:"40px",width:"320px"}}
            required
          />
          <br></br>
          <br></br>
          <button
            type="submit"
            style={{
              height: "40px",
              width: "100px",
              backgroundColor: "seagreen",
              cursor: "pointer",
              borderRadius: "5px",
              color: "white",
              border: "none",
              fontWeight: "bold",
            }} onClick={handleSubmit}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
