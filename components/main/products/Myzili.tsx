import React from 'react'
import Button from '../../common/Button';
import Image from 'next/image';

const Myzili = () => {
  const products = [
    {
      number: "02",
      title: "Myzili",
      description:
        "LZinfog codelabs has developed an app called Myzili exclusively for construction site management. The app is used by the supervisors, construction managers, architects to plan and execute the works of a construction site more efficiently and effectively",
      image: "/product2.png",
    },
  ];
  return (
    <section className="main-padding py-10 lg:py-20 xl:py-30 scroll" id="myzili">
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
  )
}

export default Myzili