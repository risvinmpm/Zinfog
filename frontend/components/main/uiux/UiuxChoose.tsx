import React, { useRef } from "react";
import Title from "../../common/Title";
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

const UiuxChoose = () => {
  const headerItems = ["Why you choose us", "02"];
  const contentItems = [
    {
      title: "Why do you need a 'Z' touch in ui/ux design?",
      description:
        "A well-designed and developed website is essential for any business looking to establish a strong online presence. A web design and development team can create a visually appealing website that is user-friendly, responsive, and optimized for search engines. This can help to increase user engagement, drive traffic to the site, and ultimately boost conversions. This is the ultimate service Zinfog offers to provide to their clients. Additionally, web design and development services can help businesses to stay competitive by keeping their website up-to-date with the latest design trends and features."
    }
  ];

  // Scroll animation ref and hook
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section className="pb-5 lg:pb-10 bg-[#131321]">
      <div className="main-padding">
        {/* Header */}
        <div className="text-center mb-4">
          <Title items={headerItems} />
        </div>

        {/* Divider */}
        <hr className="border border-gray-300 mb-6 lg:mb-10" />

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {contentItems.map((item, index) => (
            <React.Fragment key={index}>
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
                  {item.title}
                </h2>
              </div>
              <motion.div
                ref={imageRef}
                variants={bounceInRight}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <p className="leading-relaxed">{item.description}</p>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UiuxChoose;
