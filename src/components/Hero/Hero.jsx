import React from 'react';
import beach from '../../assets/beach.jpg';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return ( 
    <div className='overflow-hidden '>
      <div className="container min-h-[620px]">
        <div className="relative">
          <div
            className="w-screen bg-opacity-60 bg-cover bg-center min-h-[90vh] flex items-center justify-start overflow-hidden relative"
            style={{ backgroundImage: `url(${beach})` }}
          >
            
            <div className="text-white text-left p-10 px-40">
              <h1 className="text-6xl font-bold py-6">PORTAL TO POSSIBILITIES</h1>
              <p className="mt-2 text-2xl font-semibold w-2/3 text-wrap py-4">Discover the allure of Portugal's vibrant lifestyle and secure your future with HighDream - where residency and investment seamlessly converge for unparalleled success.</p>
              <div className='py-7 '><button className="btn btn-active btn-secondary text-white hover:shadow-gray-50">Assess Your code</button></div>
              <div className='flex mt-2'>
              <FaFacebookF/>
              <FaXTwitter/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    
  );
};

export default Hero;
