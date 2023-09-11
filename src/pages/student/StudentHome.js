import React from 'react'
import HomeImg from '../../assets/home-png.jpg'
import { NavLink } from "react-router-dom";

import AfterLoginStudentNavPage from '../../components/AfterLoginStudentNavPage'
const StudentHome = () => {
  return (
    <>
    <AfterLoginStudentNavPage/>
    
    <div className="home-container">
      <div className="home-image">
        <img className="home-img" src={HomeImg} alt="Alumni" />
      </div>
      <div className="home-text">
        <h1 className="custom-heading mb-5">
          Connect with Your Past, <br /> Embrace Your Future
        </h1>
        <NavLink to="/students/about" className="btn btn-primary p-2 custom-btn">About Us </NavLink>
      </div>
    </div>
    </>
  )
}

export default StudentHome