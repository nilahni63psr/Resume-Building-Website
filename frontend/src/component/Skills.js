import React, { useState } from 'react';
import './Skills.css'
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';
export default function Skills() {
  const navigate=useNavigate()
const [formData,setFormData]=useState(
  {
 skills:''
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
      .post(`http://localhost:3001/resume/skills`,formData)
      .then(() => {
        setTimeout(() => {
          navigate('/achievements');
        }, 100);
      })
};{
  return (
    <div className='ski'>
      <h2> Whether it's coding, designing, problem-solving, or teamwork<br></br> we want to know what you're great at</h2><br></br>
      <label><b>Skills</b></label><br></br><br></br>
      <textarea  name='skills' value={formData.skills} onChange={handleChange} placeholder='Add your skills here'></textarea>
      <br></br><br></br>
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
        Previous
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
        Preview
      </button>
    </div>
  );
}
}
