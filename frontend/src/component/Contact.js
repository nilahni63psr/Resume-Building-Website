import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Contact.css";
import { Navigate, useNavigate } from "react-router-dom";
export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for contacting us!!!");
    navigate("/");
  };
  return (
    <div>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
      <h2>
        Thank you for your interest in reaching out to us.<br></br> Please fill out the
        form below with your details and message, and our team will respond
        promptly.
      </h2>
      <div className="con">
        <img
          src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-3147.jpg?t=st=1740735517~exp=1740739117~hmac=96a59c9b7d55f028b21a053e7cff05b37c7f8b34ca1c13351ab61cab9c322aee&w=740"
          style={{ height: "700px", width: "750px", borderRadius: "20px" }}
        />
        <form action="mailto:22cs063@psr.edu.in" onSubmit={handleSubmit}>
          <label
            htmlFor="name"
            style={{ fontWeight: "bold", fontFamily: "Arial" }}
          >
            Name:
          </label>
          <br></br>
          <br></br>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <label
            htmlFor="email"
            style={{ fontWeight: "bold", fontFamily: "Arial" }}
          >
            Email:
          </label>
          <br></br>
          <br></br>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <label
            htmlFor="message"
            style={{ fontWeight: "bold", fontFamily: "Arial" }}
          >
            Message
          </label>
          <br></br>
          <br></br>
          <textarea
            name="message"
            style={{ height: "70px", width: "320px", borderRadius: "10px" }}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <br></br>
          <br></br>
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
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
