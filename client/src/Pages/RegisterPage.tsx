import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { registerUser } from "../services/user.service";

const RegisterPage = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const toast = useToast();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await registerUser(user);
      toast({
        title: response.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setUser({ fullName: "", email: "", password: "" });
    } catch (error: any) {
      console.error(error);
      toast({
        title: error.response?.message || "An error occurred",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://images5.alphacoders.com/365/thumb-1920-365738.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h1 className="mb-4">Create an account</h1>
            <Form onSubmit={handleFormSubmit}>
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

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
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

              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
