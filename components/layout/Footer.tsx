import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const quickLinks = ["Home", "Services", "About Us", "Contact"];
  const contactDetails = [
    { label: "Email", value: "hr@zinfog.com" },
    { label: "Phone", value: "+91 12345 67890" },
    { label: "Support", value: "support@zinfog.com" },
  ];
  const locationLines = [
    "1st Floor, Sahya Govt CyberPark",
    "GA College P.O, Calicut",
    "Kerala - 673014",
  ];

  const socialLinks = [
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-50 text-sm py-10 md:py-16 lg:py-20 main-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">
        
        {/* Logo & Description */}
        <div className="md:col-span-4 space-y-4">
          <Image src="/logo.svg" alt="Zinfog Logo" width={150} height={100} />
          <p className="leading-6 word-spacing-custom">
            Zinfog Codelabs is a web development company focused on delivering customized business solutions, including Odoo ERP customization, mobile and web apps, e-commerce platforms, and consulting services to boost business performance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2">
          <h4 className="font-semibold mb-4 uppercase">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link, i) => (
              <li key={i} className="hover:underline cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-3">
          <h4 className="font-semibold mb-4 uppercase">Contact</h4>
          <div className="space-y-3">
            {contactDetails.map(({ label, value }, i) => {
              const isEmail =
                label.toLowerCase() === "email" ||
                label.toLowerCase() === "support";
              const href = isEmail ? `mailto:${value}` : `tel:${value}`;
              return (
                <div key={i} className="flex gap-3">
                  <span className="w-20 font-medium">{label}:</span>
                  <a href={href} className="text-gray-50 hover:underline">
                    {value}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Location Info */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-semibold uppercase">Location</h4>
          <address className="not-italic space-y-1">
            {locationLines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </address>

          {/* Social Media Icons */}
          <div className="flex gap-5 pt-2 text-xl">
            {socialLinks.map(({ icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                aria-label={label}
                className="hover:text-blue-400 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
