import React from 'react'
import Title from '../../common/Title';
import CounterSection from '../../Ui/CounterSection';

const WeHelped = () => {
    const headerItems = ['we helped'];
    return (
        <div className='main-padding'>
            {/* Section Title */}
            <div className="text-center mb-5">
                <Title items={headerItems} />
            </div>

            <hr className="border border-gray-300" />

            <p className='py-10 xl:py-20 text-center text-xl md:text-2xl lg:text-3xl lg:max-w-3xl mx-auto'>We&apos;ve helped business increase their revenue on an average by 90% in their first year with us!</p>

            <CounterSection />
        </div>
    )
}

export default WeHelped
