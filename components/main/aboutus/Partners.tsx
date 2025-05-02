import React from 'react'
import Title from '../../common/Title';
import Image from 'next/image';

const Partners = () => {
    const headerItems = ['proud partners'];
    return (
        <div className='main-padding relative py-10 lg:py-20 xl:py-30'>
            {/* Section Title */}
            <div className="text-center mb-5">
                <Title items={headerItems} />
            </div>

            <hr className="border border-gray-300" />

            <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold text-center py-10 lg:py-20'>We partnership with</h1>

            <div className="relative w-full mx-auto aspect-[15/1.5]">
                <Image
                    src="/partners-image.png"
                    alt="Our Partners"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    priority
                />
            </div>
        </div>
    )
}

export default Partners
