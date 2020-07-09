import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const LoginForm = (props) => {
  let history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/auth/login", credentials)
      .then((res) => {
        setMessage(res.data);
        history.push("/protected", message);
      })
      .catch((err) => {
        console.log("invalid login ", err);
      });
  };

  return (
    <Form>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input
          type="username"
          name="username"
          id="username-input"
          placeholder="Enter Username"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="email-input"
          placeholder="Enter Password"
          onChange={handleChange}
        />
      </FormGroup>

      <Button onClick={submitLogin}>Login</Button>
    </Form>
  );
};

export default LoginForm;
