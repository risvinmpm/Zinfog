import React from "react";
import { Navbar } from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Banner from "../../components/main/blog/Banner";
import OurBlog from "../../components/main/OurBlog";
import OurBlogs from "../../components/main/blog/OurBlogs";
import MostReview from "../../components/main/blog/MostReview";
import Recommended from "../../components/main/blog/Recommended";
import Enquiry from "../../components/main/Enquiry";

const Blog = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <OurBlogs />
        <MostReview />
        <Recommended />
        <div className="bg-[#131321]">
          <Enquiry />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
