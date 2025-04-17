"use client"
import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import Title from "../common/Title";
import { LinkPreview } from "@/components/Ui/link-preview";


const headerItems = ["Who We Are?", "about us"];

const contentData = {
  heading: "Designing your digital dreams into reality - Your trusted web design company.",
  paragraphs: [
    "Zinfog Codelabs is a Web Development company who are experts in the field of Odoo ERP Customization and Consulting services. We provide comprehensive software solutions that include Web and Mobile applications, UI/UX design, Customized Websites and ecommerce app development services to help streamline your business operations and improve productivity.",
    "We are an expert in technology that exhibits quality at every stage. Our foremost priority is the user-end satisfaction as we focus on long-established customer relationships by providing optimum support to every client.",
  ],
};

const WhoWeAre = () => {
  return (
    <div className="main-padding">

      <Title items={headerItems} />
      <hr className="border border-gray-300" />

      <div className="grid md:grid-cols-2 text-[#D5D5D5] relative">
        <div className="md:flex md:flex-col lg:justify-center pt-5 lg:pt-0">
          <h1 className="text-xl lg:text-4xl font-bold">
            {contentData.heading}
          </h1>

          {contentData.paragraphs.map((para, idx) => (
            <p
              key={idx}
              className={`text-base ${idx === 0 ? "py-5 lg:py-7" : ""}`}
            >
              {para}
            </p>
          ))}

          <div className="mt-5 lg:mt-7 font-bold flex items-center">
           <LinkPreview url="https://framer.com/motion"> <Button
              type="button"
              variant=""
              title="EXPLORE OUR WORK"
              icon="/arrow.png"
            />
            </LinkPreview>
          </div>
        </div>

        <div className="mx-auto">
          <Image src="/man.png" width={400} height={500} alt="man" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
