import React from 'react'
import Button from '../../common/Button'

const WayOfWorking: React.FC = () => {
    const cards = [
        {
            title: 'Personalised product',
            description:
                'At Zinfog, we help with serving ecommerce app development services customized to meet the needs of the clients. You dream, we make it happen by ticking down all the objectives of your firm.',
        },
        {
            title: 'Personalised product',
            description:
                'At Zinfog, we help with serving ecommerce app development services customized to meet the needs of the clients. You dream, we make it happen by ticking down all the objectives of your firm.',
        },
        {
            title: 'Personalised product',
            description:
                'At Zinfog, we help with serving ecommerce app development services customized to meet the needs of the clients. You dream, we make it happen by ticking down all the objectives of your firm.',
        },
    ]

    return (
        <div className="py-10 lg:py-20 xl:py-30 relative overflow-hidden">
           
            <div
                className="absolute inset-0 z-0 bg-top bg-no-repeat bg-cover"
                style={{ backgroundImage: 'url("/mobileappsimg.png")' }}
            />

            <div className="relative z-10 flex flex-col justify-center items-center mx-auto max-w-xl text-center mb-10">
                <h5 className="text-xl font-semibold">
                    We are the right ecommerce mobile app development company you are looking for!
                </h5>
                <p className="pt-7 pb-5">
                    Get in touch with us to understand our way of working
                </p>
                <Button variant="btn_light_blue" title="Learn more now" type="button" />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 main-padding">
                {cards.map((card, index) => (
                    <div key={index} className="card card-bg p-10 rounded-lg">
                        <h6 className="font-semibold mb-2">{card.title}</h6>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WayOfWorking
