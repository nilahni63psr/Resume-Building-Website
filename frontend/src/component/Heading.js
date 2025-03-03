import React, { useState } from 'react';
import './Heading.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Heading() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    prof: '',
    city: '',
    country: '',
    phone: '',
    pin:'',
    email: '',
    linkedin:'',
    profile:''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value); 
  };

  const handleBack = () => {
    setTimeout(() => {
      navigate('/');
    }, 200);
  };

  const handleNext = () => {
    axios
      .post(`http://localhost:3001/resume/contact`, formData)
      .then(() => {
        setTimeout(() => {
          navigate('/education');
        }, 100);
      })
  };

  return (
    <div>
      <h1>
        What’s the best way for employers to contact you?</h1>
        <h2>We suggest including an email and phone number.
      </h2>
      <br></br>
      <div className='head'>
        <form onSubmit={handleNext}>
              <label>FIRST NAME:</label><br></br><br></br>
              <input type='text' name="fname" value={formData.fname}  onChange={handleChange} placeholder='e.g. Saanvi' required /><br></br><br></br>
              <label>LAST NAME:</label><br></br><br></br>
              <input type='text' name="lname" value={formData.lname}  onChange={handleChange} placeholder='e.g. Patel' required /><br></br><br></br>
          <label>PROFESSION:</label><br></br><br></br>
          <input type='text' name="prof" value={formData.prof}  onChange={handleChange} placeholder='e.g. Software Engineer' required /><br></br><br></br>
              <label>CITY:</label><br></br><br></br>
              <input type='text' name="city" value={formData.city}  onChange={handleChange} placeholder='e.g. New Delhi' required /><br></br><br></br>
              <label>COUNTRY:</label><br></br><br></br>
              <input type='text' name="country" value={formData.country} onChange={handleChange}  placeholder='e.g. India' required /><br></br><br></br>
          <label>PHONE:</label><br></br><br></br>
          <input type='text' name="phone"  value={formData.phone}  onChange={handleChange} placeholder='e.g. +91 4678 4685 67' required /><br></br><br></br>
          <label>PIN:</label><br></br><br></br>
          <input type='number' name="pin"  value={formData.pin}  onChange={handleChange} placeholder='e.g.626 246' required /><br></br><br></br>
          <label>EMAIL:</label><br></br><br></br>
          <input type='email' name="email" value={formData.email} onChange={handleChange}  placeholder='e.g. Saanvipatel@gmail.com' required /><br></br><br></br>
          <label>LINKED IN ID:</label><br></br><br></br>
          <input type='text' name="linkedin" value={formData.linkedin} onChange={handleChange}  placeholder='e.g. www.linkedin.com/in/nilahni-n' required /><br></br><br></br>
        <label>IMAGE URL:</label><br></br><br></br>
        <input type='text' name="profile" value={formData.profile} onChange={handleChange}  placeholder='https://via.placeholder.com/200'  required /><br></br><br></br>
        </form>
      </div>
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
          }}
          onClick={handleBack}
        >
Previous        </button>
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
          }} onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

