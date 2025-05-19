"use client";
import React from "react";
import Title from "../common/Title";
import Image from "next/image";
import Button from "../common/Button";
import { motion } from "framer-motion";


const projects = [
  {
    icon: "/odoo_icon.png",
    title: "Odoo ERP Development",
    headline: "Avon client management application",
    description:
      "Zinfog was able to knock off an End-to-End service for Avon. Provided a complete ERP solution customized to their needs with utmost quality. We also worked on their ERP Dashboard for client management, and set up e-commerce and payment gateways for AVON.",
    button: {
      title: "SEE CASE STUDY",
      icon: "/arrow.png",
      variant: "",
    },
  },
];

const headerItems = ["See our latest work", "See all projects"];

const Work: React.FC = () => {

  const contentAnimation = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const imageAnimation = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="main-padding">
      {/* Section Title */}
      <div className="text-center mb-5">
        <Title items={headerItems} />
      </div>

      <hr className="border border-gray-300" />

      <div className="bg-[#AB5895] w-full h-full rounded-xl grid md:grid-cols-5 mt-10 md:my-20 p-7 md:p-14">
        {/* Left side - project details */}
        <motion.div
          variants={contentAnimation}
          initial="hidden"
          whileInView="visible"
          className="col-span-3"
          viewport={{ once: true }}
           transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <Image
                src={project.icon}
                width={60}
                height={60}
                alt={project.title}
                className="absolute"
              />
              <h3 className="ms-20 text-2xl">{project.title}</h3>
              <h1 className="mt-10 text-3xl font-bold lg:pe-20 xl:pe-48">
                {project.headline}
              </h1>
              <p className="py-7 lg:pe-20">{project.description}</p>
              <Button
                type="button"
                variant={project.button.variant}
                title={project.button.title}
                icon={project.button.icon}
              />
            </div>
          ))}
        </motion.div>

        {/* Right side - project image */}
        <motion.div
          variants={imageAnimation}
          initial="hidden"
          whileInView="visible"
          className="col-span-2 flex justify-center items-start"
          viewport={{ once: true }}
           transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/project.png"
            width={400}
            height={400}
            alt="Project Visual"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
