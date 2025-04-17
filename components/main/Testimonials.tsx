'use client';

import dynamic from 'next/dynamic';

const ClientSwiper = dynamic(() => import('../Ui/ClientSwiper'), { ssr: false });

const testimonials = [
  {
    name: 'Ali akbar ellyes',
    role: '',
    message: 'I recommend zinfog codelabs to everyone lokking for mobile app development',
  },
  {
    name: 'Ali akbar ellyes',
    role: '',
    message: 'I recommend zinfog codelabs to everyone lokking for mobile app development',
  },
  {
    name: 'Ali akbar ellyes',
    role: '',
    message: 'I recommend zinfog codelabs to everyone lokking for mobile app development',
  },
];

export default function Testimonials() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our customers become our friends </h2>
        <ClientSwiper testimonials={testimonials} />
      </div>
    </section>
  );
}
