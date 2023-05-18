import { Image } from "@chakra-ui/react";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  function rgba(
    arg0: number,
    arg1: number,
    arg2: number,
    arg3: number
  ): import("csstype").Property.BackgroundColor | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <Carousel
      style={{
        height: "50vh",
        width: "100%",
        backgroundColor: "#ED6B2D",
      }}
    >
      <Carousel.Item
        style={{
          height: "50vh",
          width: "100%",
          backgroundColor: "black",
        }}
      >
        <Image
          src="https://www.bankrate.com/2019/08/13233037/Condo-vs-apartment.jpeg?auto=webp&optimize=high&crop=16:9"
          alt="First slide"
          objectFit="cover"
          style={{
            height: "50vh",
            width: "100%",
          }}
        />
        <Carousel.Caption>
          <h3>Find your new home with ease</h3>
          <p>All houses are agent free</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        style={{
          height: "50vh",
          width: "100%",
        }}
      >
        <Image
          src="https://alexanbuckheadvillage.com/wp-content/uploads/2018/01/alexan-buckhead-village-jan-19-pic-1024x683.jpg"
          alt="First slide"
          objectFit="cover"
          style={{
            height: "50vh",
            width: "100%",
          }}
        />

        <Carousel.Caption>
          <h3>Luxury & Comfort Home at Your serice</h3>
          <p>Choose your next comfort home</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        style={{
          height: "50vh",
          width: "100%",
        }}
      >
        <Image
          src="https://www.rent.com/blog/wp-content/uploads/2021/08/25losangeles.jpg"
          alt="First slide"
          objectFit="cover"
          style={{
            height: "50vh",
            width: "100%",
          }}
        />

        <Carousel.Caption>
          <h3>All Houses are in good neighborhood</h3>
          <p>With high security.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
