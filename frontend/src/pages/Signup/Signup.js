import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

import "./Signup.css";

export default function Signup() {
  // initial state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "https://ripe-fine-mollusk.glitch.me/register",
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <div className="signup-box">
      <div className="inner-box">

      <h2 className="heading">Sign up</h2>
      <Form onSubmit={(e) => handleSubmit(e)} className="form">
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        {/* submit button */}
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Register
        </Button>

        <p>
          Already registered <a href="/login">Login</a>
        </p>

        
      </Form>
      </div>
    </div>
  );
}
