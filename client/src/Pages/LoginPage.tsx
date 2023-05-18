import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/features/userSlice";
import { loginUser } from "../services/user.service";

interface IUser {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [userData, setUserData] = useState<IUser>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // navigate
  const navigate = useNavigate();

  // toast
  const toast = useToast();

  // dispatch
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await loginUser(userData);

      // destructure  the token and userData from response
      const { token, user } = response;

      // dispatch the login action
      dispatch(login({ token, user } as any));

      // navigate to the dashboard
      setUserData({ email: "", password: "" });
      navigate("/");

      // handle successful login
      console.log("Login successful:", response);
    } catch (error: any) {
      // handle login error
      toast({
        title: "An error occurred",
        status: "error",
        description: "Invalid email or password",
      });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/street-suburb-district-with-houses_107791-12803.jpg?w=2000")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h1 className="mb-4">Login to your account</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
