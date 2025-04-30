import Image from "next/image";
import React from "react";
import Button from "../../common/Button";

const Goldzin = () => {
  const products = [
    {
      number: "01",
      title: "Goldzin",
      description:
        "Goldzin is an app developed by Zinfog Codelabs Private Ltd that showcases the best gold schemes of numerous jewelry stores available for users to subscribe at different price ranges. Users can plan according to their income strategies and also check out trending jewelry items before they go out of fashion.",
      image: "/goldzin_mockup.png",
    },
  ];
  return (
    <section className="main-padding py-10 lg:py-20 xl:py-30 bg-[#131321] scroll" id="goldzin">
        <div className="md:max-w-3xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-10 items-center"
            >
              {/* Left Image */}
              <div className="w-full lg:w-1/2">
                <Image
                  src={product.image}
                  width={600}
                  height={400}
                  alt={product.title}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-1/2 relative">
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
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Goldzin;
