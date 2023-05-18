import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const user = true;
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Hjem</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="">
                <Sidebar />
              </Nav.Link>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  style={{ width: "400px" }}
                />
              </Form>
            </Nav>
            <Nav
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.2rem",
              }}
            >
              {
                // if there is no user show login and register
                !user && (
                  <>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                  </>
                )
              }
              {
                // if there is a user show profile
                user && (
                  <Wrap>
                    <WrapItem>
                      <Avatar
                        name="Kwaku Richard"
                        src="https://bit.ly/tioluwani-kolawole"
                        size={"md"}
                      />
                    </WrapItem>
                  </Wrap>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
