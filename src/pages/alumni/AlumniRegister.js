import React, { useState } from 'react'
import '../../styles/Register.css'
import Alumni from '../../assets/alumni.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavPageOnLogin from "../../components/NavPageOnLogin";

const AlumniRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [career, setCareer] = useState('');
  const [industry, setIndustry] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Password does not match');
      return;
    }

    axios.post('http://localhost:8000/alumnis/register', {
      name,
      email,
      career,
      industry,
      password,
      confirmPassword,
    })
      .then((res) => {
        console.log(res.data);
        navigate('/alumnis/register');
      })
      .catch((err) => {
        console.error(err);
        setError('An error occurred during alumni registration');
      });
  };
  return (
    <>
    <NavPageOnLogin/>
    <div className='custom-register-container'>
      <div className='custom-register-img'>
        <img width="100%" src={Alumni} alt='alumni'/>
      </div>
      <div className='custom-register-form'>
        <h1 className='custom-heading mb-5'>Alumni Registration</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-4" controlId="formBasicName">
        <Form.Control type="text" placeholder="Full Name" onChange={(e)=>{setName(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email"   onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicCareer">
        <Form.Control type="text" placeholder="Career"  onChange={(e)=>{setCareer(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicIndustry">
        <Form.Control type="text" placeholder="Industry"  onChange={(e)=>{setIndustry(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}}/>
        <Form.Text className="text-muted">
         {error}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
        <Form.Control type="password" placeholder="Confirm Password"  onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
      </Form.Group>
      <Button className='custom-btn' type="submit">
        Register
      </Button>
      <NavLink to='/alumnis/login' className="mx-5 custom-register-text">I am already a member</NavLink>
    </Form>
      </div>
    </div>
    </>
  )
}

export default AlumniRegister