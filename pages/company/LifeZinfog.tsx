import React from "react";
import { Navbar } from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/main/lifezinfog/Banner";
import OurLife from "../../components/main/lifezinfog/OurLife";
import Enquiry from "../../components/main/Enquiry";

const LifeZinfog = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <OurLife />
        <div className="bg-[#17182B] pt-10 lg:pt-20 xl:pt-30"><Enquiry /></div>
      </main>
      <Footer />
    </>
  );
};

export default LifeZinfog;
