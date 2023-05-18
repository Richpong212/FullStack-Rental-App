import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

interface User {
  fullName: string;
  email: string;
  password: string;
}

const Register = () => {
  const [user, setUser] = useState<User>({
    fullName: "",
    email: "",
    password: "",
  });

  // URL from backend
  const apiUrl = process.env.REACT_APP_API;

  // toasts
  const toast = useToast();

  // handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // register user
      const res = await axios.post<{ message: string }>(
        `${apiUrl}/users/register`,
        user
      );

      // clear form
      setUser({
        fullName: "",
        email: "",
        password: "",
      });

      // show toast
      toast({
        title: "Success",
        description: res.data.message,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } catch (error: any) {
      // clear form
      setUser({
        fullName: "",
        email: "",
        password: "",
      });

      toast({
        title: "Error",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#853D7A",
        width: "100%",
        height: "100vh",
        color: "white",
      }}
    >
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h3 className="text-center my-3">Register</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={user.fullName}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button
                style={{
                  width: "100%",
                }}
                variant="primary"
                type="submit"
              >
                Create an Account
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
