'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Title from '../../common/Title';
import Link from 'next/link';
import PhoneInput, { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';

const ContactForm = () => {
  const [country, setCountry] = useState('IN');
  const [phone, setPhone] = useState('');

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20 px-4 md:px-10">
      {/* Left Sidebar */}
      <div className="md:col-span-4">
        <div className="bg-[#2E31423D] backdrop-blur-[100px] p-10 md:p-20 rounded-lg text-white">
          <Image src="/contact_img.png" width={250} height={500} alt="Contact" />
          <h5 className="pt-5 text-xl font-bold text-[#ECF4F9]">Registered Office Address</h5>
          <p className="pt-4 text-sm">
            1st Floor, Sahya Govt CyberPark, GA College P.O Calicut, Kerala - 673014
          </p>
          <div className="text-center my-6">
            <Title items={['We proudly work with']} className="text-sm" />
            <hr className="border border-gray-700 my-4" />
            <div className="flex flex-wrap gap-5">
              {['avon', 'impex', 'elleys', 'bettertech', 'collatree', 'pasta', 'swa'].map(logo => (
                <Image key={logo} src={`/${logo}.png`} width={80} height={30} alt={logo} />
              ))}
            </div>
          </div>
          <div className="text-center my-6">
            <Title items={['Contact Details']} className="text-sm" />
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

      {/* Contact Form */}
      <div className="md:col-span-8">
        <form className="bg-[#1E1F2B] p-8 rounded-lg text-white space-y-6">
          <h2 className="text-2xl font-bold">Let’s talk about your project</h2>
          <p className="text-sm">
            We pride ourselves in being fully transparent. You will always be involved in all business decisions.
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
              <label className="block mb-2 text-sm font-semibold">Email address*</label>
              <input
                type="email"
                name="email"
                className="w-full h-12 bg-[#2E3142] p-4 rounded focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold">Phone Number*</label>
              <div className="flex gap-3">
                <CountrySelect
                  value={country}
                  onChange={setCountry}
                  labels={{ ZZ: 'Select Country' }}
                />
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
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
