import { Box } from "@chakra-ui/react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Newletter = () => {
  return (
    <Box bg={"#223563"} color={"white"}>
      <Container
        style={{
          height: "10vh",
          paddingTop: "2vh",
          paddingBottom: "2vh",
        }}
        fluid="md"
      >
        <Row>
          <Col
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Rent out your place and find your new tenant - for free
          </Col>
          <Col>
            <Button variant="outline-light">Get Started</Button>
          </Col>
        </Row>
      </Container>
    </Box>
  );
};

export default Newletter;
