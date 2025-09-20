import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import { Fragment } from "react";
import Footer from "../components/Footer";

function Home() {
  return (
    <Fragment>
      <div className="bg-blue-500 text-white min-h-screen">
        <NavBar />
        <Hero />
      </div>
      <Footer />
    </Fragment>
  );
}

export default Home;
