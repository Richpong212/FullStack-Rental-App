import InforBox from "../../components/InfoBox/InforBox";
import { Container, Row } from "react-bootstrap";
import DisplayProperties from "../../components/DisplayProperties/DisplayProperties";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProperty } from "../../service/propertyService";

const Home = () => {
  // get all properties
  const properties = useSelector((state: any) => state.properties.properties);

  return (
    <Container>
      <Row>
        {properties.slice(0, 3).map((properties: any) => (
          <InforBox key={properties._id} properties={properties} />
        ))}
      </Row>
      <DisplayProperties />
    </Container>
  );
};

export default Home;
