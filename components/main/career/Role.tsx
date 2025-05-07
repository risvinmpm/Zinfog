import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const roles = [
  'ux researcher',
  'head of operation',
  'senior ui designer',
  'backend lead',
  'react developer',
  'front end developer'
];

const Role = () => {
  return (
    <section className='bg-[#131321] main-padding py-10 lg:py-20 xl:py-30'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10  mx-auto'>
        {/* Left Section */}
        <div>
          <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold pb-6'>Find the role</h1>
          <p className='pb-10 xl:pb-20 max-w-md text-gray-300'>
            We’re always expanding our lively, hard-working group of creators, believers, and achievers.
          </p>
          <h5 className='text-xl font-semibold text-[#32E0F8] pb-5 lg:pb-10'>
            If you find your role then shoot your resume to:
          </h5>
          <p className='text-lg lg:text-3xl font-medium'>Mail: <Link href="mailto:hr@zinfog.com">hr@zinfog.com</Link></p>
        </div>

        {/* Right Section: Role List */}
        <div className="flex flex-col max-w-md">
          {roles.map((role, index) => (
            <div key={index}>
              <div className='flex justify-between items-center'>
                <p className='text-2xl font-medium'>{role}</p>
                <Image
                  src="/role-arrow.png"
                  width={35}
                  height={35}
                  alt={`${role} arrow`}
                  className='w-6 h-6 sm:w-8 sm:h-8'
                />
              </div>
              {index < roles.length - 1 && <hr className="border-1 border-gray-300 my-5" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Role;
