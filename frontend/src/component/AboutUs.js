import React from "react";
import { NavLink } from "react-router-dom";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <div>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
      <h1>About Us</h1>
      <br></br>
      <h2>
        Welcome to the Resume Builder Website– Your Partner in Career Success!
      </h2>
      <br></br>
      <img src="https://img.freepik.com/premium-vector/business-teamwork-concept-people-working-table-meeting-co-working-office-illustration_138260-635.jpg?w=826" />
      <br></br>
      <div className="para">
      <p>
        We believe that every professional deserves a resume that truly reflects
        their skills, achievements, and potential. Whether you're a fresh
        graduate taking your first step into the job market or a seasoned
        professional looking to make a career change, we’re here to help you
        stand out from the crowd.
      </p>
      <br></br>
      <p>
        Our mission is simple: To empower individuals with the tools and
        resources they need to create resumes that get noticed. With our
        user-friendly platform, expert tips, and customizable templates,
        crafting the perfect resume has never been easier.
      </p>
      <br></br>
      <p>
        we are passionate about delivering innovative solutions that empower
        individuals and businesses to achieve their goals. With a dedicated team
        of experts, we strive to create meaningful and impactful experiences for
        our clients.
      </p>
      </div>
    </div>
  );
}
