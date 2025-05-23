"use client";

import React from "react";
import { Navbar } from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/main/odooerpdev/Banner";
import Overview from "../../components/main/odooerpdev/Overview";
import Infinite  from "../../components/main/odooerpdev/Infinite";
import ChooseUs from "../../components/main/odooerpdev/ChooseUs";
import ChooseTestimonials from "../../components/main/odooerpdev/ChooseTestimonials";
import Process from "../../components/main/odooerpdev/Process";
import Project from "../../components/main/odooerpdev/Project";
import Enquiry from "../../components/main/Enquiry";

const OdooErpDevelopment = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Overview />
        <Infinite />
        <ChooseUs />
        <ChooseTestimonials />
        <Process />
        <Project />
        <div className="pt-7 lg:pt-15 xl:pt-30"><Enquiry /></div>
      </main>
      <Footer />
    </>
  );
};

export default OdooErpDevelopment;
