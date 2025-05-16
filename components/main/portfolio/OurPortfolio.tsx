import React from 'react';
import Title from '../../common/Title';
import FilterTabs from '../../Ui/FilterTabs';

const OurPortfolio = () => {
    const headerItems = ['Portfolio'];

    return (
        <section className="pb-10 lg:pb-20 xl:pb-30 main-padding">
            <div className="lg:pb-10">
                {/* Header */}
                <div className="text-center mb-2">
                    <Title items={headerItems} />
                </div>

                <hr className="border border-gray-700 mb-7" />

                <div className="grid sm:grid-cols-6 gap-6">
                    <div className="sm:col-span-3">
                        <h1 className="text-3xl font-semibold sm:max-w-[270px]">
                            We are proud to display our work
                        </h1>
                    </div>

                    <div className="sm:col-span-3">
                        <p className="text-lg font-extralight">
                            We ensure the highest quality of work for each client, meeting their unique needs.
                            Our skilled team is dedicated to achieving every objective and goal businesses set
                            in the digital space.
                        </p>
                    </div>
                </div>
            </div>

            <hr className="border border-gray-700 mt-7" />
            <main className="h-full">
                <FilterTabs />
            </main>
        </section>
    );
};

export default OurPortfolio;
