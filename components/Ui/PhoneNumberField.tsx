'use client';

import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface PhoneNumberFieldProps {
    value: string;
    onChange: (value: string) => void;
}

const PhoneNumberField: React.FC<PhoneNumberFieldProps> = ({ value, onChange }) => {
    return (
        <div className="w-full">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">
                Phone Number
            </label>

            <PhoneInput
                country={'us'}
                value={value}
                onChange={onChange}
                enableSearch={false}
                placeholder="Enter phone number"
                inputStyle={{
                    width: '100%',
                    backgroundColor: '#2E3142',
                    border: '1px solid #3B3E54',
                    borderRadius: '6px',
                    padding: '10px 48px 10px 58px',
                    color: '#FFFFFF',
                    fontSize: '16px',
                }}
                buttonStyle={{
                    backgroundColor: '#2E3142',
                    borderRight: '1px solid #3B3E54',
                }}
                dropdownStyle={{
                    backgroundColor: '#2E3142',
                    border: '1px solid #3B3E54',
                    color: '#FFFFFF',
                }}
                containerStyle={{
                    width: '100%',
                }}
            />
        </div>
    );
};

export default PhoneNumberField;
