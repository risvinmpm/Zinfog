import React from "react";
import Title from "../../common/Title";

const Mobchoose = () => {
  const headerItems = ["Why you choose us", "02"];
  const contentItems = [
    {
      title: "Why do you need a 'Z'touch in Mobile app Development?",
      description:
        "A mobile app can provide numerous benefits to businesses such as increased customer engagement, improved user experience, expanded market reach, and enhanced brand visibility where Zinfog focuses on developing a customized Mobile app meeting the requirements of the clients. With the rise of smartphone usage, mobile app development has become crucial for companies looking to stay competitive in their respective industries.",
    },
  ];
  return (
    <section className="main-padding pb-5 lg:pb-10 bg-[#131321]">
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
    </section>
  );
};

export default Mobchoose;
