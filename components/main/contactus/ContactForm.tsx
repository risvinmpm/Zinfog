"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import Title from "../../common/Title";
import Link from "next/link";
import PhoneInput, { getCountries, getCountryCallingCode } from "react-phone-number-input/input";
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
    setCaptchaVerified(!!value); // Set captchaVerified to true if reCAPTCHA is successful
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert("Please verify the reCAPTCHA before submitting.");
      return;
    }

    // Proceed with form submission logic (e.g., API call)
    console.log("Form submitted");
  };

  const CountrySelect = ({ value, onChange, labels, ...rest }) => (
    <select
      {...rest}
      value={value}
      onChange={(event) => onChange(event.target.value || undefined)}
      className="w-24 h-12 bg-[#2E3142] px-5 rounded focus:outline-none"
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
    { label: "Odoo ERP development", value: "option1" },
    { label: "Mobile app development", value: "option2" },
    { label: "Website development", value: "option3" },
    { label: "UIUX design", value: "option4" },
    { label: "Desktop application management", value: "option5" },
    { label: "Customization Third party Software integration", value: "option6" },
    { label: "Other", value: "option7" }
  ];

  const budgets: Option[] = [
    { label: "$500 - $1,000", value: "500-1000" },
    { label: "$10,000 - $25,000", value: "10000-25000" },
    { label: "$25,000 - $50,000", value: "25000-50000" },
    { label: "Above $50,000", value: "above-50000" }
  ];

  const RadioGroup = ({ options, selected, onChange }) => (
    <div className="grid grid-cols-2 gap-4 w-full">
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
              selected === option.value ? "bg-[#494B5D] border-[#26293C]" : "border-gray-400"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </span>
          <span className="text-sm font-medium">{option.label}</span>
        </label>
      ))}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20">
      {/* Sidebar */}
      <div className="md:col-span-4">
        <div className="bg-[#2E31423D] backdrop-blur-[100px] p-10 md:p-20 rounded-lg text-white">
          <Image src="/contact_img.png" width={250} height={500} alt="Contact" />
          <h5 className="pt-5 text-xl font-bold text-[#ECF4F9]">
            Registered Office Address
          </h5>
          <p className="pt-4 text-sm">
            1st Floor, Sahya Govt CyberPark, GA College P.O Calicut, Kerala - 673014
          </p>
          <div className="text-center my-6">
            <Title items={["We proudly work with"]} className="text-sm" />
            <hr className="border border-gray-700 my-4" />
            <div className="flex flex-wrap gap-5">
              {["avon", "impex", "elleys", "bettertech", "collatree", "pasta", "swa"].map(
                (logo) => (
                  <Image key={logo} src={`/${logo}.png`} width={80} height={30} alt={logo} />
                )
              )}
            </div>
          </div>
          <div className="text-center my-6">
            <Title items={["Contact Details"]} className="text-sm" />
            <hr className="border border-gray-700 my-4" />
          </div>
          <div className="flex flex-col md:flex-row justify-between text-sm gap-6">
            <div>
              <p className="font-semibold">For career enquiry</p>
              <p><Link href="mailto:hr@zinfog.com">hr@zinfog.com</Link></p>
              <p><Link href="tel:+919778965477">+91 97789 65477</Link></p>
            </div>
            <div>
              <p className="font-semibold">For sales enquiry</p>
              <p><Link href="mailto:sales@zinfog.com">sales@zinfog.com</Link></p>
              <p><Link href="tel:+919778965493">+91 97789 65493</Link></p>
              <p><Link href="tel:+919778965494">+91 97789 65494</Link></p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="md:col-span-8">
        <form onSubmit={handleSubmit} className="px-10 lg:px-20 py-10 xl:px-30 rounded-lg text-white space-y-6">
          <h2 className="text-2xl font-bold">Let’s talk about your project</h2>
          <p className="text-sm">
            We pride ourselves in being fully transparent. You will always be involved in all business decisions.
          </p>

          <div>
            <label className="block mb-2 text-sm font-semibold">Name*</label>
            <input type="text" name="name" className="w-full h-12 bg-[#2E3142] p-4 rounded focus:outline-none" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-semibold">Email address*</label>
              <input type="email" name="email" className="w-full h-12 bg-[#2E3142] p-4 rounded focus:outline-none" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold">Phone Number*</label>
              <div className="flex gap-3">
                <CountrySelect value={country} onChange={setCountry} labels={{ ZZ: "Select Country" }} />
                <PhoneInput
                  international
                  defaultCountry={country}
                  value={phone}
                  onChange={setPhone}
                  className="flex-1 h-12 bg-[#2E3142] p-4 rounded focus:outline-none"
                />
              </div>
            </div>
          </div>

          <hr className="border border-gray-200 mt-10" />
          <p>Select the services you are looking for*</p>
          <RadioGroup options={services} selected={selectedService} onChange={setSelectedService} />

          <hr className="border border-gray-200 mt-10" />
          <p>Estimated budget</p>
          <RadioGroup options={budgets} selected={selectedBudget} onChange={setSelectedBudget} />

          <hr className="border border-gray-200 mt-10" />
          <div className="w-full">
            <label htmlFor="message" className="block mb-7 text-sm font-medium text-white">
              Describe your project
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full p-3 rounded-lg bg-[#1E1E2F] border border-[#26293C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Describe your project"
            ></textarea>
          </div>

          {/* Google reCAPTCHA */}
          <div className="pt-6">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LfMTjkrAAAAAISTYWlWBaIVOplBqpY8VOeqeeYA"
              onChange={handleCaptchaChange}
              theme="dark"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className={`bg-blue-600 text-white py-3 px-6 rounded font-semibold transition duration-300 ${!captchaVerified ? "opacity-50 cursor-not-allowed" : ""}`}
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
