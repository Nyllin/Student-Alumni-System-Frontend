// Thin Lai Aung
import React from "react";
import "../../styles/Home.css";
import HomeImg from '../../assets/home-png.jpg'
import { NavLink } from "react-router-dom";
import NavPage from '../../components/NavPage';

function Home() {
  return (
    <>
    <NavPage/>
    <div className="home-container">
      <div className="home-image">
        <img className="home-img" src={HomeImg} alt="Alumni" />
      </div>
      <div className="home-text">
        <h1 className="custom-heading mb-5">
          Connect with Your Past, <br /> Embrace Your Future
        </h1>
        <NavLink to="/students/login" className="btn btn-primary p-2 custom-btn"> Join Now </NavLink>
      </div>
    </div>
    </>
  );
}

export default Home;
