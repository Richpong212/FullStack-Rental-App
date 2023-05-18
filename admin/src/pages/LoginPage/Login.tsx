import { useToast } from "@chakra-ui/react";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { loginUser } from "../../service/userService";
import { useDispatch } from "react-redux";

interface User {
  email: string;
  password: string;
}

const Login = () => {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  // toasts
  const toast = useToast();

  // dispatch
  const dispatch = useDispatch();

  // handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      loginUser(user, dispatch);
      // clear form
      setUser({
        email: "",
        password: "",
      });
    } catch (error: any) {
      // clear form
      setUser({
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
            <h3 className="text-center my-3">Login</h3>
            <Form onSubmit={handleSubmit}>
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
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
