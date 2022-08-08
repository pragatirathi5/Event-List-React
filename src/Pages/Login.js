import React, { useState } from 'react';
import Signup from "./Signup";
import Home from './Home';
import Navig from './Navig';
import { Link, useNavigate } from "react-router-dom";
import { Col, Container,Form, Row, Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {

  const redirect=useNavigate();
 
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value);  
  }

  const submitHandler = () => {
    if(email.length < 12 || password.length < 5){
      alert("Please Enter Valid Details")
    }
    else{
      redirect("/Home");
    }
  }
  
   
  return (
    <>
    <Navig />
    <Container>
      <Row>
        <Col className="login__bg" style={{width: 550, height: 600, paddingLeft: 1}}></Col>
        <Col  className="d-flex align-items-center justify-content-center flex-direction-column">
          <Form className="formclass" style={{height: 420,  width: "100%", maxWidth: 800, marginLeft: 170}} method="POST" onSubmit={submitHandler}>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor='email'>Email or Username</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" onChange={emailHandler} value={email} />
            <Form.Text className="text-muted">
             We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={passwordHandler} value={password} />   
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Password" />
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
            <div className='newuser'>
            <p>Don't have an account yet ? <Link to="/" className='newsign'>Sign Up Now !</Link></p>

            </div>
         </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Login;