import React from 'react';

const methodsData = [
    {
        id: 1,
        title: 'Better Collaboration',
        description: 'At Zinfog codelabs, The works are collaborated with each other that will improve the quality of the work. In this way, You will be able to learn and develop your skills as well.'
    },
    {
        id: 2,
        title: 'Customer Collaboration',
        description: 'Most of the work at Zinfog are collaborated with the customers as the projects are done to meet their requirements. The nature have to be flexible in order to work with various requirements and providing efficiency in it.'
    },
    {
        id: 3,
        title: 'Smaller tasks, Bigger outputs',
        description: 'There will be smaller tasks that need to be done daily for the final outcome that will be presented to the Customers. We adopted agile method for the dragging maximum efficiency and effectiveness to the work.'
    }
];

const Methods = () => {
    return (
        <div className="main-padding py-10 lg:py-20 xl:py-30">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold pb-5 lg:pb-10 text-center">
                We Adopt Agile Method
            </h1>
            <hr className="border border-gray-300 mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {methodsData.map((method, index) => (
                    <div key={method.id} className="relative p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                        <div className="relative">
                            <h1 className="text-8xl font-bold opacity-[0.05]">{String(index + 1).padStart(2, '0')}</h1>
                            <p className="absolute top-1/2 left-0 transform -translate-y-1/2 text-xl font-semibold text-[#DADADA]">
                                {method.title}
                            </p>
                        </div>
                        <p className="text-[#DADADA]">{method.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Methods;
