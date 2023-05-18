import { Image, useToast, Text, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, Carousel, Container } from "react-bootstrap";
import { differenceInDays } from "date-fns";
import { useSelector } from "react-redux";

interface Image {
  url: string;
  alt: string;
}

const SingleProperty = () => {
  const isLoggedIn = useSelector((state: any) => state.user.data.isLoggedIn);
  const location = useLocation(); // getting information from the url
  const path = location.pathname.split("/")[2]; // getting the id from the url
  const toast = useToast(); // toast for toast notifications
  const [property, setProperty] = useState<any>({}); // state for property

  useEffect(() => {
    const getProperty = async () => {
      try {
        const { data } = await axios.get(
          `https://rentalservice-microservice-api.vercel.app/api/properties/${path}`
        );
        setProperty(data.property);
      } catch (error) {
        toast({
          title: "An error occurred.",
          description: "We are unable to get the property.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    };

    getProperty();
  }, [path]);

  return (
    <>
      <Carousel
        style={{
          height: "50vh",
          width: "100%",
          backgroundColor: "#ED6B2D",
        }}
      >
        {property.images?.map((image: any) => (
          <Carousel.Item
            style={{
              height: "50vh",
              width: "100%",
              backgroundColor: "black",
            }}
            key={image._id}
          >
            <Image
              src={image}
              alt={image.alt}
              objectFit="cover"
              style={{
                height: "50vh",
                width: "100%",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Container>
        <div
          style={{
            color: "gray",
          }}
        >
          <Link to={"/"}>Home {">"} </Link>
          <Link to={""}>
            {property.location} {">"}
          </Link>
        </div>

        <div
          className="content"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="left">
            <div>
              <Text fontSize="2xl" fontWeight="bold">
                {property.title}
              </Text>
              <span>
                {property?.createdAt &&
                  differenceInDays(
                    new Date(),
                    new Date(property.createdAt)
                  )}{" "}
                days ago
              </span>
              <Text>{property.description}</Text>
            </div>
            <div>
              <Text fontSize="2xl" fontWeight="bold">
                About the property
              </Text>
              <div
                style={{
                  display: "flex",
                  gap: "4rem",
                }}
              >
                <span>Property type</span>
                <span style={{ fontWeight: "bold" }}>
                  {property.category?.name}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "4rem",
                }}
              >
                <span>Rooms</span>
                <span style={{ fontWeight: "bold" }}>{property.rooms}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "4rem",
                }}
              >
                <span>Furnished</span>
                <span style={{ fontWeight: "bold" }}>
                  {property.furnished ? "Furnished" : "Unfurnished"}
                </span>
              </div>
            </div>
          </div>
          <div className="right">
            {
              // if the user is logged in, show the landlord card
              !isLoggedIn ? (
                <LandlordCard property={property} />
              ) : (
                <LandlordDetails property={property} />
              )
            }
          </div>
        </div>
      </Container>
    </>
  );
};

// landlord card component
const LandlordCard = ({ property }: any) => {
  const toast = useToast();
  const handleClick = () => {
    toast({
      title: "Contact the landlord",
      description: "You need to be logged in to contact the landlord.",
      status: "info",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{property.price} USD</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>Available from · As Soon As Possible</Card.Text>
        <Button onClick={handleClick} width={"100%"} colorScheme="orange">
          Contact
        </Button>
      </Card.Body>
    </Card>
  );
};

// landLord details component
const LandlordDetails = ({ property }: any) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Landlord Details</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Name: {property.owner?.fullName}
        </Card.Subtitle>
        <Card.Text>Email: {property.owner?.email}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleProperty;
