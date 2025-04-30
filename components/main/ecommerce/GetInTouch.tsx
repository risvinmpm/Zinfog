'use client';

import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneNumberField from '../../Ui/PhoneNumberField';
import SuccessPopup from '../../Ui/SuccessPopup';
import Button from '../../common/Button';

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        requirement: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: '' }));
    };

    const validateForm = () => {
        const newErrors: any = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) newErrors.email = 'Email is required.';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
        if (!formData.company.trim()) newErrors.company = 'Company is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            setShowPopup(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                requirement: '',
            });
        }
    };

    const handleRequestDemoClick = () => {
        if (!validateForm()) return;
        setShowPopup(true);
    };

    return (
        <div className="relative">
            {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}

            <div className="main-padding py-10 lg:py-20 xl:py-30 relative">
                {/* Amber background section with image */}
                <div
                    className="grid md:grid-cols-4 bg-[#2C3D95] px-6 sm:px-12 lg:px-20 py-5 bg-bottom bg-no-repeat bg-fill"
                    style={{ backgroundImage: 'url("/project-bg.png")' }}
                >
                    {/* Left Side Content */}
                    <div className="md:col-span-2">
                        <div className="max-w-md pt-10">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 lg:mb-5">
                                Do you have any project? Let’s do some business
                            </h1>
                            <p className="text-lg mb-5">
                                You are at the right place to take your business on a different level, digitally.
                                Connect us right away!
                            </p>
                            <Button variant="btn_light_blue" title="Let's talk business" type="button" />
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="md:col-span-2">
                        <div className="bg-[#282A3D] rounded-lg p-5 shadow-lg md:max-w-md mx-auto">
                            <form onSubmit={handleSubmit}>
                                <h2 className="text-xl font-bold mb-3 text-center text-white pt-5">
                                    Get in touch with us for a free demo
                                </h2>
                                <p className="text-sm mb-6 text-center text-white">
                                    and know more about what magic we can do to build your firm better.
                                </p>

                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                        className="mt-1 block w-full rounded-md px-3 py-2 border border-[#3B3E54] shadow-sm bg-[#2E3142] text-white focus:outline-none"
                                    />
                                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                                </div>

                                {/* Email */}
                                <div className="mt-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                        className="mt-1 block w-full rounded-md border border-[#3B3E54] bg-[#2E3142] px-3 py-2 shadow-sm text-white focus:outline-none"
                                    />
                                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                                </div>

                                {/* Phone */}
                                <div className="mt-4">
                                    <PhoneNumberField
                                        value={formData.phone}
                                        onChange={(value) => handleChange('phone', value)}
                                    />
                                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                                </div>

                                {/* Company */}
                                <div className="mt-4">
                                    <label htmlFor="company" className="block text-sm font-medium text-white">Company</label>
                                    <input
                                        id="company"
                                        type="text"
                                        value={formData.company}
                                        onChange={(e) => handleChange('company', e.target.value)}
                                        className="mt-1 block w-full rounded-md border border-[#3B3E54] bg-[#2E3142] px-3 py-2 shadow-sm text-white focus:outline-none"
                                    />
                                    {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                                </div>

                                {/* Requirement (Optional) */}
                                <div className="mt-4">
                                    <label htmlFor="requirement" className="block text-sm font-medium text-white">
                                        Requirement (optional)
                                    </label>
                                    <input
                                        id="requirement"
                                        type="text"
                                        value={formData.requirement}
                                        onChange={(e) => handleChange('requirement', e.target.value)}
                                        className="mt-1 block w-full rounded-md border border-[#3B3E54] bg-[#2E3142] px-3 py-2 shadow-sm text-white focus:outline-none"
                                    />
                                </div>

                                {/* Buttons */}
                                <div className="mt-6 flex flex-col sm:flex-row justify-end gap-4">
                                    <button
                                        type="button"
                                        onClick={handleRequestDemoClick}
                                        className="w-full sm:w-auto text-sm border-2 border-[#00A19D] text-[#00A19D] font-semibold py-3 px-4 rounded"
                                    >
                                        Request a demo
                                    </button>
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto bg-[#00A19D] text-white text-sm font-semibold px-4 py-3 focus:outline-none hover:bg-gray-700 transition-all duration-300 ease-in-out rounded"
                                    >
                                        Schedule a call
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
