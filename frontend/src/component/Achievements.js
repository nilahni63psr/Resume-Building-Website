import React, { useState } from 'react';
import './Achievements.css'
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';
export default function Achievements() {
  const navigate=useNavigate()
const [formData,setFormData]=useState(
  {
 achievements:''
  }
)
const handleChange=(e)=>{
  setFormData({ ...formData, [e.target.name]: e.target.value });
  console.log(formData)
}
const handleBack = () => {
  setTimeout(() => {
    navigate('/skills');
  }, 200);
};
const handleNext = () => {
  axios
      .post(`http://localhost:3001/resume/achievements`,formData)
      .then(() => {
        setTimeout(() => {
          navigate('/preview');
        }, 100);
      })
};{
  return (
    <div className='achieve'>
      <h2>Your achievements tell your story.<br></br> Share your proudest moments and let your accomplishments speak for themselves </h2><br></br>
      <label><b>Achievements</b></label><br></br><br></br>
      <textarea  name='achievements' value={formData.achievements} onChange={handleChange} placeholder='Add your achievements here'></textarea>
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


