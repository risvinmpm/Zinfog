"use client";

import React from "react";
import { Navbar } from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const OdooErpDevelopment = () => {
  return (
    <>
      <Navbar />
      <div className="relative h-screen bg-[url('/banner_bg.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center px-4">
          <div className="main-padding">
            <p className="text-white text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              aliquam obcaecati fugit commodi excepturi autem eius temporibus
              veritatis non dolorem, eaque voluptates officiis necessitatibus
              eum cumque sequi quae nulla odit!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OdooErpDevelopment;
