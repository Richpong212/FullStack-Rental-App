import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Divider, Wrap, WrapItem } from "@chakra-ui/react";
import SpeedIcon from "@mui/icons-material/Speed";
import { NavLink, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/userSlice";
import { logoutUser } from "../../service/userService";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //dispatch an action
  const distpatch: any = useDispatch();

  //navigate
  const navigate = useNavigate();

  // handle logout
  const handleLogout = () => {
    logoutUser(distpatch);
    navigate("/login");
  };

  return (
    <div
      style={{
        backgroundColor: "#343a40",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <>
        <MenuIcon onClick={handleShow} />

        <Offcanvas
          show={show}
          onHide={handleClose}
          style={{ backgroundColor: "#343a40", color: "white" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Hjem</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                  gap: "10px",
                }}
              >
                <Wrap>
                  <WrapItem>
                    <Avatar
                      name="Kwaku Richard"
                      src="https://bit.ly/tioluwani-kolawole"
                      size={"md"}
                    />
                  </WrapItem>
                </Wrap>
                <span>Kwaku Richie</span>
              </div>
              <Divider />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                  gap: "10px",
                }}
              >
                <NavLink
                  to="/"
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#8F5FE7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SpeedIcon
                    style={{
                      color: "#fff",
                    }}
                  />
                </NavLink>
                <NavLink to={""}>Dashboard</NavLink>
              </div>
              <Divider />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                  gap: "10px",
                }}
              >
                <NavLink
                  to="/create-property"
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#FFAB00",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <HomeIcon
                    style={{
                      color: "#fff",
                    }}
                  />
                </NavLink>
                <NavLink to={"/create-property"}>Create Property</NavLink>
              </div>
            </div>
            <Divider />
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                  gap: "10px",
                }}
              >
                <NavLink
                  to="/"
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#FFAB00",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={handleLogout}
                >
                  <PowerSettingsNewIcon
                    style={{
                      color: "red",
                    }}
                  />
                </NavLink>
                <NavLink to={""}>Logout</NavLink>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );
};

export default Sidebar;
