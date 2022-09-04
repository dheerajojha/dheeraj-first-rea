import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Core from "../components/Core";
import About from "../components/About";
import Product from "../components/Product";
import Feature from "../components/Feature";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../index.css";
function Index() {
  return (
    // <section className="index-wrapper">
    <>
      <Navbar />
      <Home />
      <Core />
      <About />
      <Product />
      <Feature />
      <Contact />
      <Footer />
    </>
    // </section>
  );
}

export default Index;
