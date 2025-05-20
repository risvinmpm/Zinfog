import React, { useRef } from "react";
import Title from "../../common/Title";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const bounceInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const Overview = () => {
  const headerItems = ["services overview", "01"];

  const content = {
    title: "Odoo development company",
    description: `We focus on developing an Odoo ERP customization for clients, tailored to their specific needs and requirements. Our developers provide consulting services to build ERP systems that help businesses grow faster. With an ERP in place, work becomes easier and more efficient. Our team also thinks outside the box to suggest innovative ideas beyond client expectations.`,
    imageSrc: "/odoo.png",
  };

  // Scroll animation ref and hook
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section className="bg-[#131321]">
      <div className="main-padding py-10">
        {/* Header */}
        <div className="text-center mb-6">
          <Title items={headerItems} />
        </div>
        <hr className="border border-gray-300 mb-7" />

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="flex flex-col justify-center space-y-7">
            <h1 className="text-3xl font-bold text-[#D5D5D5]">
              {content.title}
            </h1>
            <p className="text-[#D5D5D5]">{content.description}</p>
          </div>

          {/* Image Section with scroll animation */}
          <motion.div
            ref={imageRef}
            variants={bounceInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex justify-center"
          >
            <Image
              src={content.imageSrc}
              width={400}
              height={400}
              alt="Odoo ERP"
              className="w-full max-w-md object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
