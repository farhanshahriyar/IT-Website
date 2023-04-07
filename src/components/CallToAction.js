import React from 'react';

const CallToAction = () => {
    return (
        <section className="bg-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Don't Miss Our Exclusive Offers
                    </h2>
                    <p className="text-lg text-white mb-6">
                        Sign up for our newsletter and be the first to know about our latest deals and promotions.
                    </p>
                    <div className="flex justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="rounded-l-md px-4 py-2 bg-white text-gray-800 border border-r-0 w-72
                            outline-none focus:outline-none focus:shadow-outline"
                        />
                        <button className="bg-blue-500 hover:bg-cyan-600 px-6 py-2 text-white font-semibold rounded-r-md">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
