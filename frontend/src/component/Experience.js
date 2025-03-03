import React from 'react'
import './Experience.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
export default function Experience() {
   const navigate=useNavigate()
   const handleNext = () => {
      setTimeout(() => {
        navigate('/experience2');
      }, 100);
    };
  return (
    <div>
      <h1>Have you done any of these?<br></br></h1>
      <h2>These can count as relevant experience for your resume.</h2>
      <br></br><br></br>
      <div className='opt'>
      <button className='int' >Internship</button>
      <button className='vol'>Volunteer</button>
      <button className='tutor'>Tutor</button>
      </div><br></br><br></br>
      <NavLink  className='skl' to="/skills">Skip For Now</NavLink>
      <button  className='next'
        style={{
          height: '40px',
          width: '100px',
          backgroundColor: 'seagreen',
          cursor: 'pointer',
          borderRadius: '5px',
          color: 'white',
          border: 'none',
          fontWeight: 'bold',
          marginLeft:"20px"
        }} onClick={handleNext}>
        Continue
      </button>
    </div>
  )
}
