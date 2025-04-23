"use client";

import React from "react";
import { Navbar } from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/main/odooerpdev/Banner";
import Overview from "../../components/main/odooerpdev/Overview";

const OdooErpDevelopment = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Overview />
      </main>
      <Footer />
    </>
  );
};

export default OdooErpDevelopment;
