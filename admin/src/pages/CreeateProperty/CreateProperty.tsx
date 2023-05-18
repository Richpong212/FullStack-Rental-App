import React from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";

const CreateProperty = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Container
        style={{
          marginTop: "2rem",
          backgroundColor: "#1A1C24",
          padding: "2rem",
          borderRadius: "1rem",
        }}
      >
        <Form>
          <Row>
            <Col xs={12} sm={6}>
              <Form.Group controlId="name">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="tile"
                  placeholder="Property title"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group controlId="medType">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  name="description"
                  placeholder="A good description catch users attention"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={6}>
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" name="image" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={6}>
              <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  placeholder="Property Address"
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" name="quantity" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={6}>
              <Form.Group controlId="owner">
                <Form.Label>Owner</Form.Label>
                <Form.Control
                  type="text"
                  name="owner"
                  placeholder="Name of Owner"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row
            style={{
              width: "50%",
              margin: "0 auto",
              marginTop: "2rem",
            }}
          >
            <Col xs={12}>
              <Button
                type="submit"
                style={{
                  backgroundColor: "#1F734C",
                  border: "none",
                  width: "100%",
                }}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default CreateProperty;
