import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/shoe.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Shoe Hub </h1>
        <p> LUKU SAFI,LUKU FITY!</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;