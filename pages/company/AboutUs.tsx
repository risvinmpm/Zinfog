import React from "react";
import { Navbar } from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/main/aboutus/Banner";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
