import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import DonutChart from "../Charts/DonutChart";
import Properties from "../Properties/Properties";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperty } from "../../service/propertyService";

const DisplayProperties = () => {
  const distpatch = useDispatch();
  // send the dispatch to the property service
  useEffect(() => {
    getAllProperty(distpatch);
  }, [distpatch]);

  // get all property info
  const propertiesData = useSelector(
    (state: any) => state.properties.properties
  );

  // getting properties from redux

  return (
    <Col
      xs={12}
      sm={6}
      md={12}
      lg={4}
      xl={4}
      style={{
        marginTop: "20px",
        width: "100%",
      }}
    >
      <Container>
        <Row
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Col>
            <div
              style={{
                backgroundColor: "rgb(26,28,36)",
                flex: 1,
                padding: "20px",
              }}
            >
              <span>History</span>
              <DonutChart />
            </div>
          </Col>
          <Col style={{ backgroundColor: "rgb(26,28,36)", flex: 2 }}>
            {propertiesData.map((properties: any) => (
              <Properties key={properties._id} properties={properties} />
            ))}
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default DisplayProperties;
