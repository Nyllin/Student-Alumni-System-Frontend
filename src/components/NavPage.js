import React from "react";
import logo from "../assets/alumni logo.png";
import "../styles/NavPage.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const NavPage = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} height={60} alt="logo" />
          <span className="custom-navbrand">Alumni</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="custom-toggle">
          <Nav className="m-auto custom-nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "custom-navlink me-3 active" : "custom-navlink me-3"
              }
            >
              Home
            </NavLink>
            <NavLink
             to="/about"
              className={({ isActive }) =>
                isActive ? "custom-navlink me-3 active" : "custom-navlink me-3"
              }
            >
              About Us
            </NavLink>
            <NavLink
             to="/blogs"
              className={({ isActive }) =>
                isActive ? "custom-navlink me-3 active" : "custom-navlink me-3"
              }
            >
              Blogs
            </NavLink>
            <NavLink
             to="/about"
              className={({ isActive }) =>
                isActive ? "custom-navlink me-3 active" : "custom-navlink me-3"
              }
            >
              Events
            </NavLink>
            <NavLink
             to="/about"
              className={({ isActive }) =>
                isActive ? "custom-navlink me-3 active" : "custom-navlink me-3"
              }
            >
              Contact Us
            </NavLink>
          </Nav>
          <div className="custom-dropdown">
            <NavDropdown
              title="Login"
              className="btn custom-outline-btn me-3"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="custom-dropdownitem">
                <NavLink to='/students/login' className="custom-dropdownnav">Login as Student</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className="custom-dropdownitem">
                <NavLink to='/alumnis/login' className="custom-dropdownnav">Login as Alumni</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Register"
              className="btn custom-btn"
              id="basic-nav-dropdown"
            >
              {/* <NavDropdown.Item className="custom-dropdownitem">
                <NavLink to='/students/register' className="custom-dropdownnav">Register as Student</NavLink>
              </NavDropdown.Item> */}
              <NavDropdown.Item className="custom-dropdownitem">
                <NavLink to='/alumnis/register' className="custom-dropdownnav">Register as Alumni</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavPage;
