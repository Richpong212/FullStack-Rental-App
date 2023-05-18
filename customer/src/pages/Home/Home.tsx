import React from "react";
import "./Home.scss";
import SearchBar from "../../components/search_bar/SearchBar";
import FeaturedProperty from "../../components/featured-Property/Featured_Property";
import AllProperties from "../../components/All-Properties/AllProperties";

const Home = () => {
  // background image
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div>
      <div
        style={{
          backgroundImage: "url(" + publicUrl + "/assets/img/banner/home2.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100%",
          height: "70vh",
        }}
        className="globalstyles"
      >
        <div className="home container ">
          <span>The Best Way to</span>
          <div>
            <h2>Find Your Perfect Home</h2>
          </div>
          <div className="search">
            <SearchBar />
          </div>
        </div>
      </div>
      <FeaturedProperty />
      <AllProperties />
    </div>
  );
};

export default Home;
