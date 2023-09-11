import React, { useEffect, useState } from "react";
import "../../styles/Login.css";
import Alumni from "../../assets/alumni.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import NavPageOnLogin from "../../components/NavPageOnLogin";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loginStatus,setLoginStatus] = useState();
  axios.defaults.withCredentials = true
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("You need to fill every field!");
    } else {
      axios
        .post("http://localhost:8000/students/login", { email, password })
        .then((res) => {
            console.log(res.data);
            navigate("/students/" + res.data[0].ID);
        })
        .catch((err) => {
          console.error(err);
          setError("Incorrect Password or Email!");
        });
    }
  };

  useEffect(() => {
    axios.get("http://localhost:8000/students/login")
      .then((res) => {
        console.log(res)
        if (res.data.loggedIn === true) {
          setLoginStatus(res.data.student)
        } 
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  

  return (
    <>
    <NavPageOnLogin/>
    <div className="custom-login-container py-5">
      <div className="custom-login-img">
        <img width="100%" src={Alumni} alt="alumni" />
      </div>
      <div className="custom-login-form">
        <h1 className="custom-heading mb-5">Student Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text className="text-muted">{error}</Form.Text>
          </Form.Group>

          <Button className="custom-btn" type="submit">
            Login
          </Button>
          <NavLink to='/alumnis/login' className="mx-5 custom-register-text">Login as Alumni</NavLink>
        </Form>
      </div>
    </div>
    </>
  );
};

export default StudentLogin;
