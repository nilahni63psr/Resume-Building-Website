import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Preview.css';
import html2canvas from 'html2canvas';
import { Navigate,useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';

export default function Preview() {
  const navigate=useNavigate()
  const [contact, setContact] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [achievements,setAchievements]=useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/resume/contact`)
    
      .then((res) => setContact(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/resume/education`)
      .then((res) => setEducation(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/resume/experience`)
      .then((res) => setExperience(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/resume/skills`)
      .then((res) => setSkills(res.data))
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:3001/resume/achievements`)
      .then((res) => setAchievements(res.data))
      .catch((err) => console.error(err));
  }, []);
  const downloadPDF = () => {
    const input = document.getElementById('resume-content'); 
    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL('')
        const pdf = new jsPDF('p', 'mm', 'a4'); 
        const imgWidth = 190; 
        const imgHeight = (canvas.height * imgWidth) / canvas.width; 
        let position = 0;        
        const marginLeft = 10;
        const marginTop = 10;
        while (position < imgHeight) {
          pdf.addImage(imgData, 'JPG', marginLeft, marginTop - position, imgWidth, imgHeight);
          position += 297; 

          if (position < imgHeight) {
            pdf.addPage(); 
          }
        }

        pdf.save('resume.pdf'); 
      })
      .catch((err) => {
        console.error('Error generating PDF:', err);
      });
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
  
        {contact.length > 0 && contact[0].profile && (
  <img src={contact[0].profile}
    style={{ width: '100px', height: '100px',marginLeft:'220px',borderRadius:'50%'}} 
  />
)}
<div className="name-degree">
          {contact.length > 0 && (
            <div className="contacts">
              <h1>{contact[0].fname} {contact[0].lname}</h1>
            </div>
          )}
          {education.length > 0 && (
            <div className="deg">
              <h2>{education[0].degree}</h2>
            </div>
          )}
          </div>
          </div>
        <div className="center">
          <div className="left">
            {education.length > 0 && (
              <div className="education">
                <h2>Education</h2><br></br>
                <p>School Name: {education[0].sname}</p>
                <p>Graduation Year: {education[0].sgradyear}</p>
                <p>Degree: {education[0].degree}</p>
                <p>Percentage: {education[0].percentage}</p>
                <p>Graduation Year: {education[0].gradyear}</p><br></br>
                <hr />
              </div>
            )}
            {experience.length > 0 && (
              <div className="experience">
                <h2>Experience</h2>
                <p>{experience[0].experience}</p><br></br>
                <hr />
              </div>
            )}
            {skills.length > 0 && (
              <div className="skills">
                <h2>Skills</h2>
                <p>{skills[0].skills}</p><br></br>
                <hr />
              </div>
            )}
              {achievements.length > 0 && (
              <div className="achievements">
                <h2>Achievements</h2>
                <p>{achievements[0].achievements}</p><br></br>
                <hr />
              </div>
            )}
          </div>
          <div className="right">
            {contact.length > 0 && (
              <div className="contacts">
                <p><h3>Profession:</h3>{contact[0].prof}</p>
                <p><h3>City:</h3>{contact[0].city}</p>
                <p><h3>Country:</h3>{contact[0].country}</p>
                <p><h3>Phone:</h3>{contact[0].phone}</p>
                <p><h3>Pin:</h3>{contact[0].pin}</p>
                <p><h3>Email:</h3>{contact[0].email}</p>
                <p><h3>Linked In:</h3>{contact[0].linkedin}</p>
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
          color:"white",
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
          marginLeft:"20px",
          height: '50px',
          color:"white",
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


