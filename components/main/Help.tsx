import React from "react";
import Title from "../common/Title";
import Button from "../common/Button";
import Image from "next/image";
import Link from "next/link";

const Help: React.FC = () => {
  const headerItems = ["How can we Help?"];

  const contentItems = [
    {
      title: "Our solutions cater to businesses of all sizes and industries.",
      description:
        "Being a custom ERP development company, our focus also lies on building ERP systems for small businesses as well as giant tycoons across various industries—providing digital solutions.",
      buttonTitle: "EXPLORE OUR WORK",
      buttonIcon: "/arrow.png",
    },
  ];

  const services = [
    {
      icon: "/odoo_icon.png",
      title: "Odoo ERP Development",
      subtitle: "Tailored ERP for Every Business",
      link: "https://zinfog.com/blog/how-to-make-an-erp-system-for-small-business.html",
      description:
        "The best Odoo development company focuses on building a hassle-free work environment for the business industries. We provide Odoo ERP Customization and consulting services to meet the client’s needs that help us develop a tailored fit ERP Software.",
      buttons: [
        { title: "See demo", variant: "btn_blue" },
        { title: "KNOW MORE", variant: "", icon: "/arrow.png" },
      ],
      image: "/odoo.png",
    },
    {
      icon: "/mob.png",
      title: "Mobile app development",
      subtitle: "",
      link: "",
      description:
        "Being a Top Mobile app development company, We have developed customized mobile apps for the clients with the help of our strongest team that have core skills and creativity. We are the mobile app development agency if you are looking for someone to develop an app for you.",
      buttons: [
        { title: "KNOW MORE", variant: "", icon: "/arrow.png" },
      ],
    },
    {
      icon: "/web_dvlp.png",
      title: "Website development",
      subtitle: "",
      link: "",
      description:
        "In the 21st century, Search trafficking plays an important role in converting leads to sales. A well maintained website is a requirement of every company and being a web development company, we can help you well with your needs.",
      buttons: [
        { title: "KNOW MORE", variant: "", icon: "/arrow.png" },
      ],
    },
    {
      icon: "/customization.png",
      title: "Customization Third party Software integration",
      subtitle: "",
      link: "",
      description:
        "In the 21st century, Search trafficking plays an important role in converting leads to sales. A well maintained website is a requirement of every company and being a web development company, we can help you well with your needs.",
      buttons: [
        { title: "KNOW MORE", variant: "", icon: "/arrow.png" },
      ],
    },
    {
      icon: "/desktop.png",
      title: "Desktop application management",
      subtitle: "",
      link: "",
      description:
        "In the 21st century, Search trafficking plays an important role in converting leads to sales. A well maintained website is a requirement of every company and being a web development company, we can help you well with your needs.",
      buttons: [
        { title: "KNOW MORE", variant: "", icon: "/arrow.png" },
      ],
    },
    {
      icon: "/brandingg.png",
      title: "Branding",
      subtitle: "",
      link: "",
      description:
        "In the 21st century, Search trafficking plays an important role in converting leads to sales. A well maintained website is a requirement of every company and being a web development company, we can help you well with your needs.",
      buttons: [
        { title: "KNOW MORE", variant: "", icon: "/arrow.png" },
      ],
    },
    {
      icon: "/ui_ux.png",
      title: "UI/UX Design",
      subtitle: "",
      link: "",
      description:
        "In the 21st century, Search trafficking plays an important role in converting leads to sales. A well maintained website is a requirement of every company and being a web development company, we can help you well with your needs.",
      buttons: [
        { title: "KNOW MORE", variant: "", icon: "/arrow.png" },
      ],
    },
  ];

  return (
    <div className="main-padding">
      {/* Section Title */}
      <div className="text-center mb-10">
        <Title items={headerItems} />
      </div>

      <hr className="border border-gray-300" />

      {/* Content Section */}
      {contentItems.map((item, index) => (
        <div key={index} className="grid lg:grid-cols-2 gap-6 py-10">
          <div>
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold lg:pe-10">
              {item.title}
            </h1>
          </div>
          <div>
            <p className="text-base pb-5">{item.description}</p>
            <Button
              type="button"
              variant=""
              title={item.buttonTitle}
              icon={item.buttonIcon}
            />
          </div>
        </div>
      ))}

      <hr className="border border-gray-300" />

      {/* Services Section */}
      <div className="grid lg:grid-cols-5 gap-10 py-30">
        {/* Left Column: All service content */}
        <div className="col-span-3 flex flex-col gap-14">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 border-b border-gray-200 pb-8"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Column (Icon + Title + Subtitle) */}
                <div className="lg:w-1/2 flex flex-col gap-2 relative">
                  <div className="items-center">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={60}
                      height={60}
                      className="absolute"
                    />
                    <h2 className="text-2xl font-semibold ml-20 lg:pe-10">
                      {service.title}
                    </h2>
                  </div>
                  <h3 className="text-sm font-bold">
                    <Link href={service.link} target="_blank" rel="noopener noreferrer">
                      {service.subtitle}
                    </Link>
                  </h3>
                </div>

                {/* Right Column (Description + Buttons) */}
                <div className="flex flex-col gap-4 lg:w-2/3">
                  <p>{service.description}</p>
                  <div className="flex gap-4 flex-wrap">
                    {service.buttons.map((btn, idx) => (
                      <Button
                        key={idx}
                        title={btn.title}
                        variant={btn.variant}
                        icon={btn.icon}
                        type="button"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Sticky Image */}
        <div className="col-span-2">
          <div className="sticky top-20 flex justify-center">
            <Image
              src="/odoo.png"
              width={300}
              height={300}
              alt="Sticky Service Visual"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
