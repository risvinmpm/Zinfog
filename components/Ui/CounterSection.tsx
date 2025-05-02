'use client';

import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type CounterItem = {
    value: number;
    suffix?: string;
    description: string;
};

const counterData: CounterItem[] = [
    { value: 200, suffix: '+', description: 'Satisfied Clients Across The Globe' },
    { value: 150, suffix: '+', description: 'Projects Delivered Successfully' },
    { value: 550, suffix: '+', description: 'Experts Under The Same Roof' },
];

const CounterSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const [key, setKey] = useState(0);

    React.useEffect(() => {
        if (inView) {
            setKey(prev => prev + 1);
        }
    }, [inView]);

    return (
        <section ref={ref} className='py-10'>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
                {counterData.map((item, index) => (
                    <div key={`${index}-${key}`} className="flex flex-col items-center">
                        <h2 className="text-3xl lg:text-5xl font-extrabold mb-2">
                            <CountUp
                                start={0}
                                end={item.value}
                                duration={2}
                                suffix={item.suffix || ''}
                            />
                        </h2>
                        <p className="text-lg text-gray-300">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CounterSection;
