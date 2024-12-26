import React from 'react';
import Image from 'next/image';

const SponsorsSection = () => {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-8 text-gray-800">
                    Our sponsors
                </h2>
                <div className="flex items-center justify-center space-x-10 md:space-x-20">

                  {/* Apple Logo */}
                  <div className="w-16 h-16 relative">
                  <Image
                       src="/Apple.png"
                       alt="Apple Logo"
                       layout="fill"
                       objectFit="contain"
                      />
                 </div>
                  {/* Microsoft Logo */}
                   <div className="w-20 h-10 relative">
                   <Image
                        src="/microsoft 1.png"
                        alt="Microsoft Logo"
                         layout="fill"
                       objectFit="contain"
                        />
                   </div>

                   {/* Slack Logo */}
                   <div className="w-20 h-8 relative">
                   <Image
                          src="/Slack_Technologies_Logo 1.png"
                          alt="Slack Logo"
                           layout="fill"
                         objectFit="contain"
                          />
                   </div>

                   {/* Google Logo */}
                    <div className="w-20 h-8 relative">
                    <Image
                        src="/Google.png"
                       alt="Google Logo"
                        layout="fill"
                      objectFit="contain"
                      />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SponsorsSection;