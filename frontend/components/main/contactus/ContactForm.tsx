"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import Title from "../../common/Title";
import Link from "next/link";
import PhoneInput, {
  getCountries,
  getCountryCallingCode
} from "react-phone-number-input/input";
import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-number-input/style.css";

const ContactForm = () => {
  const [country, setCountry] = useState("IN");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert("Please verify the reCAPTCHA before submitting.");
      return;
    }

    console.log("Form submitted");
  };

  const CountrySelect = ({ value, onChange, labels, ...rest }) => (
    <select
      {...rest}
      value={value}
      onChange={(event) => onChange(event.target.value || undefined)}
      className="w-24 xl:w-40 h-12 bg-[#2E3142] px-5 rounded focus:outline-none"
    >
      <option value="">{labels.ZZ}</option>
      {getCountries().map((country) => (
        <option key={country} value={country}>
          {labels[country]} +{getCountryCallingCode(country)}
        </option>
      ))}
    </select>
  );

  type Option = { label: string; value: string };

  const services: Option[] = [
    { label: "Odoo ERP development", value: "Odoo ERP development" },
    { label: "Mobile app development", value: "Mobile app development" },
    { label: "Website development", value: "Website development" },
    { label: "UIUX design", value: "UIUX design" },
    {
      label: "Desktop application management",
      value: "Desktop application management"
    },
    {
      label: "Customization Third party Software integration",
      value: "Customization Third party Software integration"
    },
    { label: "Other", value: "Other" }
  ];

  const budgets: Option[] = [
    { label: "$500 - $1,000", value: "500-1000" },
    { label: "$10,000 - $25,000", value: "10000-25000" },
    { label: "$25,000 - $50,000", value: "25000-50000" },
    { label: "Above $50,000", value: "above-50000" }
  ];

  const RadioGroup = ({ options, selected, onChange }) => (
    <div className="grid md:grid-cols-2 gap-4 w-full">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-3 p-4 cursor-pointer bg-[#333649]"
        >
          <input
            type="radio"
            name="radio-option"
            value={option.value}
            checked={selected === option.value}
            onChange={() => onChange(option.value)}
            className="sr-only"
          />
          <span
            className={`w-5 h-5 flex items-center justify-center rounded-full border border-[#26293C] transition-colors ${
              selected === option.value
                ? "bg-[#494B5D] border-[#26293C]"
                : "border-gray-400"
            }`}
          >
            {selected === option.value && (
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </span>
          <span className="text-sm font-medium">{option.label}</span>
        </label>
      ))}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-8 mt-20">
      {/* Sidebar */}
      <div className="md:col-span-4">
        <div className="sticky top-0 min-h-screen bg-[#2E31423D] backdrop-blur-[100px] p-5 lg:p-10 xl:p-14 text-white flex flex-col justify-between">
          <div>
            <Image
              src="/contact_img.png"
              width={250}
              height={500}
              alt="Contact"
              className="sm:w-full md:w-[250px]"
            />
            <h5 className="pt-5 text-xl font-bold text-[#ECF4F9]">
              Registered Office Address
            </h5>
            <p className="pt-4 text-sm">
              1st Floor, Sahya Govt CyberPark, GA College P.O Calicut, Kerala -
              673014
            </p>
            <div className="text-center my-6">
              <Title items={["We proudly work with"]} className="text-sm" />
              <hr className="border border-gray-700 my-4" />
              <div className="flex flex-wrap gap-5 xl:gap-10">
                {["avon", "impex", "elleys", "bettertech", "collatree", "pasta", "swa"].map(
                (logo) => (
                  <Image key={logo} src={`/${logo}.png`} width={100} height={30} alt={logo} />
                )
              )}
              </div>
            </div>
          </div>
          <div className="text-center my-6">
            <Title
              items={["Contact Details"]}
              className="text-sm padding-top "
            />
            <hr className="border border-gray-700 my-4" />
            <div className="flex flex-row sm:justify-between text-sm gap-6">
              <div>
                <p className="text-base font-semibold text-[#32DFF8] pb-3">
                  For career enquiry
                </p>
                <p className="pb-3">
                  <Link href="mailto:hr@zinfog.com">hr@zinfog.com</Link>
                </p>
                <p>
                  <Link href="tel:+919778965477">+91 97789 65477</Link>
                </p>
              </div>
              <div>
                <p className="text-base font-semibold text-[#32DFF8] pb-3">
                  For sales enquiry
                </p>
                <p>
                  <Link href="mailto:sales@zinfog.com">sales@zinfog.com</Link>
                </p>
                <p className="py-3">
                  <Link href="tel:+919778965493">+91 97789 65493</Link>
                </p>
                <p>
                  <Link href="tel:+919778965494">+91 97789 65494</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="md:col-span-8 py-5 lg:py-10">
        <form
          onSubmit={handleSubmit}
          className="px-5 lg:px-20 py-10 xl:px-30 rounded-lg text-white space-y-6"
        >
          <h2 className="text-2xl font-bold">Let’s talk about your project</h2>
          <p className="text-sm">
            We pride ourselves in being fully transparent. You will always be
            involved in all business decisions.
          </p>

          <div>
            <label className="block mb-2 text-sm font-semibold">Name*</label>
            <input
              type="text"
              name="name"
              className="w-full h-12 bg-[#2E3142] p-4 rounded focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Email address*
              </label>
              <input
                type="email"
                name="email"
                className="w-full h-12 bg-[#2E3142] p-4 rounded focus:outline-none"
              />
            </div>
            <div>
              <div className="flex gap-3">
                <div>
                  <label className="block mb-2 text-sm font-semibold">
                    Phone code*
                  </label>
                  <CountrySelect
                    value={country}
                    onChange={setCountry}
                    labels={{ ZZ: "Select Country" }}
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-semibold">
                    Phone number*
                  </label>
                  <PhoneInput
                    international
                    defaultCountry={country}
                    value={phone}
                    onChange={setPhone}
                    className="flex-1 h-12 bg-[#2E3142] p-4 rounded focus:outline-none w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="border border-gray-200 mt-10" />
          <p>Select the services you are looking for*</p>
          <RadioGroup
            options={services}
            selected={selectedService}
            onChange={setSelectedService}
          />

          <hr className="border border-gray-200 mt-10" />
          <p>Estimated budget</p>
          <RadioGroup
            options={budgets}
            selected={selectedBudget}
            onChange={setSelectedBudget}
          />

          <hr className="border border-gray-200 mt-10" />
          <div className="w-full">
            <label
              htmlFor="message"
              className="block mb-7 text-sm font-medium text-white"
            >
              Describe your project
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full p-3 rounded-lg bg-[#2E3142] border border-[#3B3E54] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Describe your project"
            ></textarea>
          </div>

          {/* Google reCAPTCHA */}
          <div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LfMTjkrAAAAAISTYWlWBaIVOplBqpY8VOeqeeYA"
              onChange={handleCaptchaChange}
              theme="dark"
            />
          </div>

          <div>
            <button
              type="submit"
              className={`bg-blue-600 text-white py-3 px-6 rounded font-semibold transition duration-300 ${
                !captchaVerified ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!captchaVerified}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
