import React from "react";
import "./Home.scss";
import SearchBar from "../../components/search_bar/SearchBar";
import FeaturedProperty from "../../components/featured-Property/Featured_Property";
import AllProperties from "../../components/All-Properties/AllProperties";
import EstateAgent from "../../components/banner/EstateAgent";
import Blog from "../Blog";

const Home = () => {
  // background image
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div className="home-page">
      <div
        style={{
          backgroundImage: "url(" + publicUrl + "/assets/img/banner/home2.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100%",
          height: "55vh",
        }}
        className="home-banner"
      >
        <div className="home container">
          <span className="home-subtitle">
            The Best Way to Find Your Perfect Home
          </span>
          <h1 className="home-title">Find Your Dream Home Today</h1>
          <div className="search-bar">
            <SearchBar />
          </div>
        </div>
      </div>

      <div className="featured-properties">
        <FeaturedProperty limit={6} />
      </div>

      <div className="estate-agent-banner">
        <EstateAgent />
      </div>
    </div>
  );
};

export default Home;
