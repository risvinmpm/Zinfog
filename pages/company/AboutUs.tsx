import React from "react";
import { Navbar } from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/main/aboutus/Banner";
import AboutZinfog from "../../components/main/aboutus/AboutZinfog";
import Mission from "../../components/main/aboutus/Mission";
import WeHelped from "../../components/main/aboutus/WeHelped";
import Partners from "../../components/main/aboutus/Partners";
import OurTeam from "../../components/main/aboutus/OurTeam";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <AboutZinfog />
        <Mission />
        <WeHelped />
        <Partners />
        <OurTeam />
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
