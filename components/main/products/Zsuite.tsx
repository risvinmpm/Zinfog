import Image from "next/image";
import React from "react";
import Button from "../../common/Button";
import AnimatedOnScroll from "../../common/AnimatedOnScroll";

const Zsuite = () => {
  const products = [
    {
      number: "04",
      title: "Zsuite",
      description:
        "Zsuite is a business software solution provided by Zinfog codelabs who have expertised in the field for more than 5 years. Zinfog developed a core team of experts to serve the best to the clients.",
      image: "/zsuite.png",
    },
  ];

    const imageAnimation = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const contentAnimation = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section className="main-padding py-10 lg:py-20 xl:py-30 scroll" id="zsuite">
      <div className="md:max-w-3xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-10 items-center"
          >
            {/* Left Image */}
            <AnimatedOnScroll variants={imageAnimation} className="w-full lg:w-1/2">
              <Image
                src={product.image}
                width={600}
                height={400}
                alt={product.title}
                className="w-full h-auto object-contain"
              />
            </AnimatedOnScroll>

            {/* Right Content */}
            <AnimatedOnScroll variants={contentAnimation} className="w-full lg:w-1/2 relative">
              {/* Number & Title Block */}
              <div className="relative mb-6 h-[80px]">
                {/* Background number */}
                <span className="absolute text-[4rem] sm:text-[5rem] font-bold text-white/10 leading-none -top-1 left-0 z-0">
                  {product.number}
                </span>
                {/* Title over the number */}
                <h2 className="relative z-10 pt-4 pl-3 text-lg sm:text-xl lg:text-2xl font-bold">
                  {product.title}
                </h2>
              </div>

              {/* Description & Button */}
              <p className="mb-6 text-sm sm:text-base">
                {product.description}
              </p>
              <Button
                type="button"
                variant=""
                title="VISIT SITE"
                icon="/arrow.png"
              />
            </AnimatedOnScroll>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Zsuite;
