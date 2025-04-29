import Image from 'next/image'
import React from 'react'

const BestMobApp: React.FC = () => {
    const sections = [
        {
            imageFirst: true,
            image: '/ecom.png',
            title: 'Building your trust and partnership at right time.',
            description:
                'An efficient and strong employee team working to meet the customised needs of a client is essential for achieving organizational goals and success. It enables effective collaboration, maximizes individual strengths, and minimizes weaknesses.',
            points: [
                'Understanding the needs and make customized ecommerce app.',
                'Ecommerce app that provides sales, insights, enhancement, grabbing trend all at one place.',
                'Setting up schedules to understand your needs better and developing quality oriented ecommerce app.',
            ],
        },
        {
            imageFirst: false,
            image: '/ecoms.png',
            title: 'Enhanced User-Interface',
            description:
                `An ecommerce app's success relies on an intuitive user interface, simplifying navigation and checkout with seamless payment gateway integration. A visually appealing design with concise information ensures a seamless shopping experience, driving customer engagement and loyalty.`,
            points: [
            ],
        },
    ]

    return (
        <div className="main-padding bg-[#131321] py-10 lg:py-20">
            <h4 className="text-center text-2xl font-bold max-w-lg mx-auto text-white mb-10">
                Why we are the best ecommerce mobile app development company.
            </h4>

            <div className="space-y-16 lg:max-w-4xl mx-auto">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row ${
                            !section.imageFirst ? 'md:flex-row-reverse' : ''
                        } items-center gap-8`}
                    >
                        <div className="w-full lg:w-1/2">
                            <Image
                                src={section.image}
                                alt="ecom"
                                width={400}
                                height={400}
                                className="w-full h-auto mx-auto"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 text-white space-y-4">
                            <h6 className="text-lg font-semibold">{section.title}</h6>
                            <p className='text-[#ABABAB]'>{section.description}</p>
                            <ul className="list-disc list-inside space-y-1 text-[#ABABAB]">
                                {section.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestMobApp
