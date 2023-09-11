import React, { useState } from 'react';
import '../../styles/Register.css';
import Alumni from '../../assets/alumni.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavPageOnLogin from '../../components/NavPageOnLogin';

const StudentRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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

    axios.post('http://localhost:8000/students/register', { name, email, password, confirmPassword })
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        setError('An error occurred during registration');
      });
  }

  return (
    <>
    <NavPageOnLogin/>
    <div className='custom-register-container'>
      <div className='custom-register-img'>
        <img width="100%" src={Alumni} alt='alumni' />
      </div>
      <div className='custom-register-form'>
        <h1 className='custom-heading mb-5'>Student Registration</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicName">
            <Form.Control type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
            <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
            <Form.Text className="text-muted">
              {error}
            </Form.Text>
          </Form.Group>
          <Button className='custom-btn' type="submit">
            Register
          </Button>
          <NavLink to='/students/login' className="mx-5 custom-register-text">I am already a member</NavLink>
        </Form>
      </div>
    </div>
    </>
  );
}

export default StudentRegister;