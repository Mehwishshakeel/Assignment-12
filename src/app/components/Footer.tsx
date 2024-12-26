import React from 'react';

import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-900 text-white py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">

           {/* Logo and Whitepace Text */}
           <div className="mb-8 md:mb-0 flex items-center">
              <div className="pt-[2.5px] w-[37px] h-[29px] relative flex-shrink-0 mr-2">
                <Image
                  src="/Logo.png"  // Corrected path
                  alt="Whitepace Logo"
                  layout="fill"   // Make the image fill its parent container
                  objectFit="contain"  // Use contain to scale without cropping
                />
              </div>

             <span className="font-bold text-lg w-[144px] h-[34px] size-[28px] ">
              whitepace
             </span>

            <p className="text-sm ml-4 w-[240px] h-[120px]">
              whitepace was created for 
              the new ways we live and work.
               We make a
              better workspace around the world
            </p>
          </div>


          <div className="flex flex-col md:flex-row md:space-x-16">
            <div>
              <h4 className="font-bold mb-2">Product</h4>
              <ul className="text-sm">
                <li className="mb-1">
                  <a href="#">Overview</a>
                </li>
                <li className="mb-1">
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Customer stories</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Resources</h4>
              <ul className="text-sm">
                <li className="mb-1">
                  <a href="#">Blog</a>
                </li>
                <li className="mb-1">
                  <a href="#">Guides & tutorials</a>
                </li>
                <li>
                  <a href="#">Help center</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Company</h4>
              <ul className="text-sm">
                <li className="mb-1">
                  <a href="#">About us</a>
                </li>
                <li className="mb-1">
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Media kit</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 text-center text-xs border-t border-blue-700 pt-4">
          <p>©2021 Whitepace LLC.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;