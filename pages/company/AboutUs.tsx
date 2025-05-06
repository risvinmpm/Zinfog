import React from "react";
import { Navbar } from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/main/aboutus/Banner";
import AboutZinfog from "../../components/main/aboutus/AboutZinfog";
import Mission from "../../components/main/aboutus/Mission";
import WeHelped from "../../components/main/aboutus/WeHelped";
import Partners from "../../components/main/aboutus/Partners";
import OurTeam from "../../components/main/aboutus/OurTeam";
import Testimonials from "../../components/main/Testimonials";
import Enquiry from "../../components/main/Enquiry";

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
        <Testimonials />
        <div className="pt-10 lg:pt-20 xl:pt-30"><Enquiry /></div>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
