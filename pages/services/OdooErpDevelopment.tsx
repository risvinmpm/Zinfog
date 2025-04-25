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
      </main>
      <Footer />
    </>
  );
};

export default OdooErpDevelopment;
