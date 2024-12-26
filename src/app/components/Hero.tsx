import React from 'react';

const HeroSection = () => {
    return (
        <div className="bg-blue-900 py-16">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="text-white mb-8 lg:mb-0 lg:w-1/2">
                  <h1 className="text-4xl font-bold mb-4">
                    Get More Done with
                    <br />
                    whitepace
                    </h1>
                    <p className="text-sm mb-6">
                       Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                    </p>
                    <button className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded inline-flex items-center">
                        Try Whitepace free
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                        </svg>

                    </button>
                </div>

                {/* Right Placeholder Square */}
                <div className="bg-blue-200 w-full lg:w-1/2 h-64">

                </div>
            </div>
        </div>
    );
};

export default HeroSection;