import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-blue-900 text-white py-4">
            <div className="container mx-auto px-4 flex items-center justify-between">

              {/* Logo and Whitepace Text */}
              <div className="flex items-center mr-4">
                <div className="w-[37px] h-[29px] flex-shrink-0 mr-2">
                <Link href="/">
                  <Image
                      src="/Logo.png"  // Path to your logo in public
                      alt="Logo"
                      width={150}   // Adjusted Width
                      height={30}    //Adjusted Height
                    />
                </Link>
              </div>

              <Link href="/" className="font-bold text-lg">
                whitepace
               </Link>
            </div>



                <nav className="hidden md:flex space-x-6">
                    <Link href="/products" className="hover:text-gray-300">
                        Products
                    </Link>
                    <Link href="/solutions" className="hover:text-gray-300">
                        Solutions
                    </Link>
                    <Link href="/resources" className="hover:text-gray-300">
                        Resources
                    </Link>
                     <Link href="/pricing" className="hover:text-gray-300">
                        Pricing
                    </Link>

                </nav>

                <div className="hidden md:block">
                    <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded hover:bg-yellow-500 transition-colors duration-200">
                        Login
                    </button>
                </div>

                {/* Hamburger menu (for mobile) */}
                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;