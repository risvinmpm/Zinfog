import Image from 'next/image'
import React from 'react'

const Pathway: React.FC = () => {
    const steps = [
        {
            title: 'Planning and research',
            icon: '/ecomicon.png',
            description:
                'Plan and research your eCommerce app by defining goals, identifying target audience, conducting market research, and developing a strategy for features and user experience.',
        },
        {
            title: 'Design and Development',
            icon: '/ecomicon2.png',
            description:
                'Design and develop your app by creating wireframes, backend infrastructure, UI/UX, front-end interface, and integrating secure payment gateways.',
        },
        {
            title: 'Testing and Launching',
            icon: '/ecomicon3.png',
            description:
                'Test, optimize, and deploy your app by identifying and fixing bugs, performing user acceptance testing, and optimizing performance before deployment.',
        },
        {
            title: 'Maintenance and Support',
            icon: '/ecomicon4.png',
            description:
                'Maintain and support your app by monitoring performance, providing customer service, updating regularly, and continuously testing and optimizing for user experience.',
        },
    ]

    return (
        <div className="main-padding py-10 md:py-16 lg:py-20 xl:py-24">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
               
                <div className="lg:w-1/3">
                    <h6 className="text-lg sm:text-xl lg:text-2xl font-bold">
                        The pathway of developing the best ecommerce mobile app for your firm.
                    </h6>
                </div>

                
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="card-bg p-6 md:p-8 rounded-xl flex flex-col items-center text-center"
                        >
                            <Image
                                src={step.icon}
                                width={50}
                                height={50}
                                alt={`icon-${index}`}
                                className="mb-4"
                            />
                            <h6 className="font-semibold text-base md:text-lg mb-3">{step.title}</h6>
                            <p className="mt-2 text-sm md:text-[15px] text-[#ABABAB]">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pathway
