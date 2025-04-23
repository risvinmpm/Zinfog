import React from "react";
import Title from "../../common/Title";
import Image from "next/image";

const Overview = () => {
  const headerItems = ["services overview", "01"];

  const content = {
    title: "Odoo development company",
    description: `We focus on developing an Odoo ERP customization for clients, tailored to their specific needs and requirements. Our developers provide consulting services to build ERP systems that help businesses grow faster. With an ERP in place, work becomes easier and more efficient. Our team also thinks outside the box to suggest innovative ideas beyond client expectations.`,
    imageSrc: "/odoo.png",
  };

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
            <p>{content.description}</p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src={content.imageSrc}
              width={400}
              height={400}
              alt="Odoo ERP"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
