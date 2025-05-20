"use client";
import React from "react";
import Image from "next/image";
import { Navbar } from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Marquee from "react-fast-marquee";
import Enquiry from "../../components/main/Enquiry";
import Link from "next/link";
import Button from "../../components/common/Button";
import { LinkPreview } from "../../components/Ui/link-preview";
import Title from "../../components/common/Title";
import { motion } from "framer-motion";


const serviceData = [
  {
    heading: "We help small & big business for their problems",
    description:
      "Our impeccable advanced technological solutions. We give you the finest design approach and the most powerful development plans for your brand.",
    image: "/service-banner.png",
  },
];


const bounceInLeft = {
  hidden: { opacity: 0, x: -100 },
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

const Service = () => {

  const headerItems = ["Our Services"];

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
        { title: "KNOW MORE", variant: "", icon: "/arrow.png" }
      ],
      image: "/odoo.png"
    },
    {
      icon: "/mob.png",
      title: "Mobile app development",
      subtitle: "",
      link: "https://nextjs.org/docs/app/getting-started/installation",
      description:
        "Being a Top Mobile app development company, We have developed customized mobile apps for the clients with the help of our strongest team that have core skills and creativity. We are the mobile app development agency if you are looking for someone to develop an app for you.",
      buttons: [{ title: "KNOW MORE", variant: "", icon: "/arrow.png" }]
    },
    {
      icon: "/web_dvlp.png",
      title: "Website development",
      subtitle: "",
      link: "https://framer.com/motion",
      description:
        "In the 21st century, Search trafficking plays an important role in converting leads to sales. A well maintained website is a requirement of every company and being a web development company, we can help you well with your needs.",
      buttons: [{ title: "KNOW MORE", variant: "", icon: "/arrow.png" }]
    },
    {
      icon: "/customization.png",
      title: "Customization Third party Software integration",
      subtitle: "",
      link: "https://ui.aceternity.com/components/link-preview",
      description:
        "In the 21st century, Search trafficking plays an important role in converting leads to sales. A well maintained website is a requirement of every company and being a web development company, we can help you well with your needs.",
      buttons: [{ title: "KNOW MORE", variant: "", icon: "/arrow.png" }]
    },
    {
      icon: "/desktop.png",
      title: "Desktop application management",
      subtitle: "",
      link: "https://chatgpt.com/c/67fa3c50-5f74-8002-90d0-d9e1a401940c",
      description:
        "In the 21st century, Search trafficking plays an important role in converting leads to sales. A well maintained website is a requirement of every company and being a web development company, we can help you well with your needs.",
      buttons: [{ title: "KNOW MORE", variant: "", icon: "/arrow.png" }]
    },
    {
      icon: "/brandingg.png",
      title: "Branding",
      subtitle: "",
      link: "https://framer.com/motion",
      description:
        "In the 21st century, Search trafficking plays an important role in converting leads to sales. A well maintained website is a requirement of every company and being a web development company, we can help you well with your needs.",
      buttons: [{ title: "KNOW MORE", variant: "", icon: "/arrow.png" }]
    },
    {
      icon: "/ui_ux.png",
      title: "UI/UX Design",
      subtitle: "",
      link: "https://framer.com/motion",
      description:
        "In the 21st century, Search trafficking plays an important role in converting leads to sales. A well maintained website is a requirement of every company and being a web development company, we can help you well with your needs.",
      buttons: [{ title: "KNOW MORE", variant: "", icon: "/arrow.png" }]
    }
  ];

  return (
    <>
      <Navbar />
      <section className="mt-20 py-10 lg:py-20 xl:py-30 relative">
        <div
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-fill"
          style={{ backgroundImage: 'url("/banner-bg.png")' }}
        />
        <div className="main-padding">
          {serviceData.map((service, index) => (
            <div key={index} className="grid md:grid-cols-5 gap-10">
              <motion.div
                variants={bounceInLeft}
                initial="hidden"
                animate="visible"
                className="md:col-span-3">
                <h2 className="text-2xl lg:text-4xl xl:text-6xl font-semibold xl:leading-16">
                  {service.heading}
                </h2>
                <p className="md:max-w-lg text-lg font-extralight pt-5 md:pt-10">
                  {service.description}
                </p>
              </motion.div>
              <motion.div
                variants={bounceInRight}
                initial="hidden"
                animate="visible"
                className="md:col-span-2">
                <Image
                  src={service.image}
                  width={300}
                  height={300}
                  alt="Service Banner"
                  className="w-full"
                />
              </motion.div>
            </div>
          ))}
        </div>
        <Marquee>
          <Image
            src="/idea.png"
            width={1400}
            height={100}
            alt="idea"
            className="py-14 bg-no-repeat"
          />
        </Marquee>
      </section>
      <section className="service main-padding">
        {/* Section Title */}
        <div className="text-center mb-5">
          <Title items={headerItems} />
        </div>
        <hr className="border border-gray-300" />
        {/* Services Section */}
        <div className="grid lg:grid-cols-5 gap-10 py-10 lg:pb-20 xl:pb-30">
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
                      <h2 className="text-2xl font-semibold ml-20">
                        {service.title}
                      </h2>
                    </div>
                    <h3 className="text-sm font-bold">
                      <Link
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {service.subtitle}
                      </Link>
                    </h3>
                  </div>

                  {/* Right Column (Description + Buttons) */}
                  <div className="flex flex-col gap-4 lg:w-2/3">
                    <p>{service.description}</p>
                    <div className="flex gap-4 flex-wrap">
                      {service.buttons.map((btn, idx) => {
                        const button = (
                          <Button
                            key={idx}
                            title={btn.title}
                            variant={btn.variant}
                            icon={btn.icon}
                            type="button"
                          />
                        );

                        return service.link ? (
                          <LinkPreview key={idx} url={service.link}>
                            {button}
                          </LinkPreview>
                        ) : (
                          <div key={idx}>{button}</div>
                        );
                      })}
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
      </section>
      <Enquiry />
      <Footer />
    </>
  );
};

export default Service;
