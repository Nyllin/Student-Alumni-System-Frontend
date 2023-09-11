import React, { useEffect, useState } from "react";
import "../../styles/Login.css";
import Alumni from "../../assets/alumni.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import NavPageOnLogin from "../../components/NavPageOnLogin";
const AlumniLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");
  const [loginStatus,setLoginStatus] = useState();
  
  const navigate = useNavigate();
  axios.defaults.withCredentials = true

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("You need to fill every field!");
    } else {
    axios
      .post("http://localhost:8000/alumnis/login", { email, password })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setError("An error occurred during Login");
      });
    }
  };

  useEffect(() => {
    axios.get("http://localhost:8000/alumnis/login")
      .then((res) => {
        console.log(res)
        if (res.data.loggedIn === true) {
          setLoginStatus(res.data.alumni)
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
        <h1 className="custom-heading mb-5">Alumni Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              {error}
            </Form.Text>
          </Form.Group>
          <Button className="custom-btn" type="submit">
            Login
          </Button>
          <NavLink to='/alumnis/register' className="mx-5 custom-login-text">
            Don't have an account? Register here.
          </NavLink>
        </Form>
      </div>
    </div>
    </>
  );
};

export default AlumniLogin;
