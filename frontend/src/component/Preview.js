import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Preview.css';
import { Navigate,useNavigate } from 'react-router-dom';

export default function Preview() {
  const navigate=useNavigate()
  const [contact, setContact] = useState(null);
  const [education, setEducation] = useState(null);
  const [experience, setExperience] = useState(null);
  const [skills, setSkills] = useState(null);
  const [achievements,setAchievements]=useState(null);
  useEffect(() => {
    axios.get(`http://localhost:3001/resume/contact`)
    
      .then((res) => setContact(res.data))
      .catch((err) => console.error(err));
  }, [contact]);

  useEffect(() => {
    axios.get(`http://localhost:3001/resume/education`)
      .then((res) => setEducation(res.data))
      .catch((err) => console.error(err));
  }, [education]);

  useEffect(() => {
    axios.get(`http://localhost:3001/resume/experience`)
      .then((res) => setExperience(res.data))
      .catch((err) => console.error(err));
  }, [experience]);

  useEffect(() => {
    axios.get(`http://localhost:3001/resume/skills`)
      .then((res) => setSkills(res.data))
      .catch((err) => console.error(err));
  }, [skills]);
  useEffect(() => {
    axios.get(`http://localhost:3001/resume/achievements`)
      .then((res) => setAchievements(res.data))
      .catch((err) => console.error(err));
  }, [achievements]);
  const downloadPDF = () => {
    setTimeout(() => {
      navigate("/");
    }, 3000); 
  };
const handleBack=()=>{
  setTimeout(() => {
    navigate('/skills');
  }, 100);
} 
  return (
    <div className="preview">
      <div id="resume-content"> 
        <div className="top">
  
        {contact && contact.profile && (
            <img src={contact.profile}
              style={{ width: '100px', height: '100px', marginLeft: '220px', borderRadius: '50%' }}
            />
          )}
          <div className="name-degree">
            {contact && (
              <div className="contacts">
                <h1>{contact.fname} {contact.lname}</h1>
              </div>
            )}
            {education && (
              <div className="deg">
                <h2>{education.degree}</h2>
              </div>
            )}
          </div>
        </div>
        <div className="center">
          <div className="left">
            {education && (
              <div className="education">
                <h2>Education</h2><br />
                <p>School Name: {education.sname}</p>
                <p>Graduation Year: {education.sgradyear}</p>
                <p>Degree: {education.degree}</p>
                <p>Percentage: {education.percentage}</p>
                <p>Graduation Year: {education.gradyear}</p><br />
                <hr />
              </div>
            )}
            {experience && (
              <div className="experience">
                <h2>Experience</h2>
                <p>{experience.experience}</p><br />
                <hr />
              </div>
            )}
            {skills && (
              <div className="skills">
                <h2>Skills</h2>
                <p>{skills.skills}</p><br />
                <hr />
              </div>
            )}
            {achievements && (
              <div className="achievements">
                <h2>Achievements</h2>
                <p>{achievements.achievements}</p><br />
                <hr />
              </div>
            )}
          </div>
          <div className="right">
            {contact && (
              <div className="contacts">
                <p><h3>Profession:</h3>{contact.prof}</p>
                <p><h3>City:</h3>{contact.city}</p>
                <p><h3>Country:</h3>{contact.country}</p>
                <p><h3>Phone:</h3>{contact.phone}</p>
                <p><h3>Pin:</h3>{contact.pin}</p>
                <p><h3>Email:</h3>{contact.email}</p>
                <p><h3>Linked In:</h3>{contact.linkedin}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <br /><br />
      <button
        style={{
          width: '100px',
          height: '50px',
          color: "white",
          backgroundColor: 'seagreen',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={handleBack}
      >
        Back
      </button>
      <button
        style={{
          width: '100px',
          marginLeft: "20px",
          height: '50px',
          color: "white",
          backgroundColor: 'seagreen',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={downloadPDF}
      >
        Download
      </button>
    </div>
  );
}


