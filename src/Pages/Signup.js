import React, { useState } from 'react';
import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container,Form, Row, Button } from "react-bootstrap";
import Google from "../Data/Google.png";
import Navig from './Navig';
import "./Signup.css";


const Signup = () => {

  const redirect=useNavigate();
  const[email, setEmail] = useState("");
  const[name, setName] = useState("");
  const[password, setPassword] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  }

  const nameHandler = (event) => {
    setName(event.target.value);
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  }

  const submitHandler = () => {
    redirect("/login");
  }


  const googleAuth = () => {
    window.open(
        `${process.env.REACT_APP_API_URL}/auth/google/callback`,
        "_self"
    );
  };

  return (
    <>
    <Navig />
    <Container>
      <Row>
        <Col className="login__bg" style={{width: 600, height: 600, paddingLeft: 1}}></Col>
        <Col  className="d-flex align-items-center justify-content-center flex-direction-column">
          <Form className="formclass" style={{height: 580,  width: "100%", maxWidth: 800, marginLeft: 170}} method="POST" onSubmit={submitHandler}> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" onChange={emailHandler} value={email} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Choose Username</Form.Label>
            <Form.Control type="username" placeholder="Enter Username" onChange={nameHandler} value={name} /> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={passwordHandler} value={password} /> 
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept Terms and Conditions" />
            </Form.Group>
            <Button variant="primary" type="submit">Signup</Button>
            <br />
            <p className="para">or</p>
            <Button variant="primary" type="submit" style={{backgroundColor: "white", color: "black"}} className="btnclass" onClick={googleAuth}><img src={Google} className="googleimg" />Login with Google</Button>
            <div className='newuser'>
            <p>Already a User ? <Link to="/Login" className='newsign'>Login</Link></p>

            </div>
         </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Signup;