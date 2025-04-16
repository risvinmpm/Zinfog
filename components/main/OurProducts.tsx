import Image from "next/image";
import React from "react";
import Button from "../common/Button";

const OurProducts = () => {
  const products = [
    {
      number: "01",
      title: "Goldzin",
      description:
        "Goldzin is an app developed by Zinfog Codelabs Private Ltd that showcases the best gold schemes of numerous jewelry stores available for users to subscribe at different price ranges. Users can plan according to their income strategies and also check out trending jewelry items before they go out of fashion.",
      image: "/goldzin_mockup.png",
    },
    {
      number: "02",
      title: "Myzili",
      description:
        "Zinfog codelabs has developed an app called Myzili exclusively for construction site management. The app is used by the supervisors, construction managers, architects to plan and execute the works of a construction site more efficiently and effectively",
      image: "/product2.png",
    },
  ];

  return (
    <section className="bg-[#2C3D95] py-10 text-white">
      <div className="main-padding">
        <h1 className="text-2xl lg:text-3xl font-bold mb-2">Our Products</h1>
        <p className="mb-7 text-sm lg:text-base">
          We crafted products that help people to solve problems
        </p>
        <hr className="border border-gray-300 mb-10" />

        <div>
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
                  <span className="absolute text-[4rem] sm:text-[5rem] font-bold text-white/10 leading-none top-0 left-0 z-0">
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
                  title="KNOW MORE"
                  icon="/arrow.png"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
