import { Col, Container, Row } from "react-bootstrap";
import Property from "./Property";
import useFetchData from "../Hooks/useFetch";

interface Data {
  properties: any;
}

const Properties = () => {
  // fetching data from the api
  const { data, error, isLoading } = useFetchData<Data>(
    "https://rentalservice-microservice-api.vercel.app/api/properties"
  );
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(data);

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <>
      <Container>
        <Row
          style={{
            paddingTop: "2vh",
            paddingBottom: "2vh",
            gap: "2vh",
          }}
        >
          {data?.properties.slice(0, 12).map((property: any) => (
            <Col>
              <Property key={property._id} properties={property} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Properties;
