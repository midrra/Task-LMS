import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import { Fragment } from "react";
import Footer from "../components/Footer";
import Background from "../assets/background.jfif";

function Home() {
  return (
    <Fragment>
      <div
        className="text-white min-h-screen bg-center bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <NavBar />
        <Hero />
      </div>
      <Footer />
    </Fragment>
  );
}

export default Home;
