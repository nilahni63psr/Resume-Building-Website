import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';
export default function Education() {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
     sname:'',
     sgradyear:'',
     degree:'',
     percentage:'',
     gradyear:''
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleBack = () => {
      setTimeout(() => {
        navigate('/heading');
      }, 200);
    };
    const handleNext = () => {
      axios
      .post(`http://localhost:3001/resume/education`, formData)
      .then(() => {
        setTimeout(() => {
          navigate('/experience');
        }, 100);
      })
    };
  return (
    <div>
    <h2>Great, let’s work on your
     </h2>
      <h1>Education!
    </h1>
    <br></br>
      <form>
        <div>
          <label>School Name:</label><br></br><br></br>
          <input
            type="text"
            name="sname"
            value={formData.sname}
            onChange={handleChange}required
            placeholder="Enter school name"
          />
          <br></br><br></br>
        </div>
        <div>
          <label>School Graduation Year:</label><br></br><br></br>
          <input
            type="number"
            name="sgradyear"
            value={formData.sgradyear}
            onChange={handleChange}
            placeholder="Enter graduation year"
            style={{height:"35px",width:"310px"}}
            required
          /><br></br><br></br>
        </div>
        <div>
          <label>Degree:</label><br></br><br></br>
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            placeholder="Enter degree"
            required
          /><br></br><br></br>
        </div>
        <div>
          <label>Percentage:</label><br></br><br></br>
          <input
            type="number"
            name="percentage"
            value={formData.percentage}
            onChange={handleChange}
            style={{height:"35px",width:"310px"}}
            placeholder="Enter your percentage"
            required
          /><br></br><br></br>
        </div>
        <div>
          <label>Degree Graduation Year:</label><br></br><br></br>
          <input
            type="number"
            name="gradyear"
            value={formData.gradyear}
            onChange={handleChange}
            placeholder="Enter graduation year"
            style={{height:"35px",width:"310px"}}
            required
          /><br></br><br></br>
        </div>
      </form>
    <div className='contact'>
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
          marginLeft:"90px"
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
  </div>
  )
}
