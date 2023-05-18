import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/userSlice";

const adminurl = process.env.REACT_APP_ADMIN;

const HeaderNav = () => {
  const isLoggedIn = useSelector((state: any) => state.user.data.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
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
            <Nav.Link href={adminurl}>List Property</Nav.Link>
            <Nav.Link href="#action2">House Adminstration</Nav.Link>
            <NavDropdown title="Property" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Rental Contract
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Inspection Report
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/properties">
                All Properties
              </NavDropdown.Item>
            </NavDropdown>
            {!isLoggedIn && (
              <>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
