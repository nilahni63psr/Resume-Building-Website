import React from "react";
import "./Home.css";
import SignUp from "./SignUp";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    setTimeout(() => {
      navigate("/signup");
    }, 500);
  };
  return (
    <div className="home">
      <div className="nav">
      <NavLink to="/">Home</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
      <div className="cnt">
        <img
          src="https://img.freepik.com/free-photo/resume-apply-work-form-concept_53876-148017.jpg?t=st=1740632867~exp=1740636467~hmac=f8e11469edbf457cfb8fa406e3dde8e92009f61f7bdfdd56d37a49de06a9051e&w=900"
          style={{ height: "700px" }}
        />
        <h1>
          "A resume is not just a document;It's a reflection of your
          professional journey."<br></br>
          <br></br>
          <button
            type="submit"
            style={{
              height: "40px",
              width: "150px",
              backgroundColor: "teal",
              cursor: "pointer",
              borderRadius: "5px",
              color: "white",
              border: "none",
              fontWeight: "bold",
            }}
            onClick={handleClick}
          >
            Create Account
          </button>
        </h1>
      </div>
    </div>
  );
}
