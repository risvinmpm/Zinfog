import React from "react";
import { Navbar } from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/main/casestudy/Banner";
import ProjectCase from "../../components/main/casestudy/ProjectCase";
import Enquiry from "../../components/main/Enquiry";

const CaseStudy = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <ProjectCase />
        <div className="pt-10 lg:pt-20 xl:pt-30"><Enquiry /></div>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudy;
