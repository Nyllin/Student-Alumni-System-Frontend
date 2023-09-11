import React from "react";
import NavPage from '../components/NavPage';
const About = () => {
  return (
    <>
    <NavPage/>
    <div className="about-us">
      <h1 className="custom-heading">About Institute of Advanced Technologies (IAT) Alumni</h1>
      <p>
        Welcome to the Institute of Advanced Technologies (IAT) Alumni
        community! We are a group of talented and accomplished individuals who
        have graduated from IAT and are making a significant impact in various
        industries.
      </p>
      <p>
        Our mission is to foster a sense of community among alumni, provide
        networking opportunities, and support the professional and personal
        growth of our members.
      </p>
      <h2>Our Goals</h2>
      <ul>
        <li>Facilitate networking among alumni members.</li>
        <li>Share knowledge and experiences through mentorship programs.</li>
        <li>
          Organize events, webinars, and reunions to bring alumni together.
        </li>
        <li>Support current students in their academic and career pursuits.</li>
      </ul>
      <h2>Get Involved</h2>
      <p>
        We encourage all IAT alumni to get involved in our community. Whether
        you want to attend events, share your expertise, or simply stay
        connected, there's a place for you here.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions, suggestions, or would like to become a part
        of our alumni community, please feel free to contact us at
        alumni@iat.edu.
      </p>
    </div>
    </>
  );
};

export default About;
