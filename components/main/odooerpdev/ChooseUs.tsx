import React from "react";
import Title from "../../common/Title";

const ChooseUs = () => {
  const headerItems = ["Why you choose us", "02"];
  const contentItems = [
    {
      title: "Why do you need a 'Z' touch in ODOO?",
      description:
        "Hassle-free work environments are what employees need. Zinfog Codelabs has mastered the art of delivering tailored ODOO Enterprise Resource Planning (ERP) services to suit customer needs. We’ve built our ODOO service to be user-friendly, allowing anyone to efficiently manage business operations. From accounting and project management to risk and human resource management, ODOO simplifies everything."
    }
  ];

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
              <div>
                <p className="leading-relaxed">{item.description}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
