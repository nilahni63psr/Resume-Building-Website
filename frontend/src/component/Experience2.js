import React, { useState } from 'react';
import './Experience2.css'
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';
export default function Experience2() {
  const navigate=useNavigate()
const [formData,setFormData]=useState(
  {
 experience:''
  }
)
const handleChange=(e)=>{
  setFormData({ ...formData, [e.target.name]: e.target.value });
  console.log(formData)
}
const handleBack = () => {
  setTimeout(() => {
    navigate('/experience');
  }, 200);
};
const handleNext = () => {
  axios
      .post(`http://localhost:3001/resume/experience`,formData)
      .then(() => {
        setTimeout(() => {
          navigate('/skills');
        }, 100);
      })
};{
  return (
    <div className='exp'>
      <h2>We’d love to hear about your work experience! <br></br>Share your previous roles, the skills you’ve developed, and any standout achievements</h2><br></br>
      <label><b>Experience</b></label><br></br><br></br>
      <textarea  name='experience' value={formData.experience} onChange={handleChange} placeholder='Add your experience here'></textarea>
      <br></br><br></br><br></br>
      <button
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
        }}
        onClick={handleBack}>
        Go Back
      </button>
      <button
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
        Next
      </button>
    </div>
  );
}
}
