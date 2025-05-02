import React from "react";
import { Navbar } from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/main/aboutus/Banner";
import AboutZinfog from "../../components/main/aboutus/AboutZinfog";
import Mission from "../../components/main/aboutus/Mission";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <AboutZinfog />
        <Mission />
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
