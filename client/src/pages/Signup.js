// // see SignupForm.js for comments
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from "react-bootstrap";
import Auth from "../utils/auth";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";


const ADD = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [signup] = useMutation(ADD_USER);
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    

 
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await signup({ variables: { ...userFormData } });

      console.log(data);
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
    navigate('/Dashboard');
    
  };

  

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit} className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your SignUp credentials!
        </Alert>
        <Form.Group className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <Form.Label htmlFor="email" className="mb-8 text-3xl text-center">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            required
          />
          <Form.Control.Feedback type="invalid" >
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
          variant="success"
          className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ADD;



