<<<<<<< HEAD
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full flex">
          {[...Array(12)].map((_, index) => (
            <div 
              key={index} 
              className="border-red-900/20 border-r h-full"
              style={{ width: '8.333%' }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container ml-35 pt-40 pb-16 flex flex-col md:flex-row">
        {/* Left side - Main text content */}
        <div className="md:w-1/2  flex flex-col justify-center space-y-6">
          {/* Logo instead of T box */}
          <div className="mb-4">
            <img 
              src="/image6.jpg" 
              alt="THEO Logo" 
              className="h-12"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            The Money Manager For Everyone
          </h1>
          
          <p className="text-3xl text-red-600 font-semibold">
            From $100 To Millions
          </p>
          
          <button className="bg-black text-white border border-white rounded-full py-3 px-6 flex items-center gap-2 w-fit hover:bg-gray-900 transition-all">
            TRY THEO <FaArrowRight />
          </button>
        </div>
        
        {/* Right side - Added image and cryptocurrency displays */}
        <div className="md:w-1/2 relative  mt-16 md:mt-0">
          {/* Main right side image */}
          <div className="absolute inset-0 z-0 left-[50%] opacity-70">
            <img 
              src="/image7.png" 
              alt="Financial illustration" 
              className=" h-[350px] w-[250px]"
            />
          </div>

          <div className="absolute top-0 right-0 w-full h-full">
            {/* Circular gradient overlay */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-full h-full rounded-full bg-gradient-to-r from-transparent to-red-600/50 blur-3xl"></div>
            
            {/* Crypto price indicators with logos */}
            <div className="relative h-full">
              {/* USDT */}
              <div className="absolute top-[0%] right-[45%] flex items-center gap-7">
                <div className="bg-white text-black rounded-full px-4 py-2 font-medium">$1</div>
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="/api/placeholder/32/32" alt="USDT" className="w-full h-full object-cover bg-white" />
                </div>
              </div>
              
              {/* ETH */}
              <div className="absolute top-[25%] right-[50%] flex items-center gap-8">
                <div className="bg-red-400 text-white rounded-full px-4 py-2 font-medium">$2056</div>
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="/api/placeholder/32/32" alt="ETH" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* BTC */}
              <div className="absolute top-[60%] right-[56%] flex items-center  gap-2">
                <div className="bg-white text-black rounded-full px-4 py-2 font-medium">$98,620</div>
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="/api/placeholder/32/32" alt="BTC" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Another coin */}
              <div className="absolute top-[85%] right-[45%] flex items-center gap-2">
                <div className="bg-red-400 text-white rounded-full px-4 py-2 font-medium">$168.86</div>
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="/api/placeholder/32/32" alt="Coin" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Another coin */}
              <div className="absolute top-[100%] right-[30%] flex items-center gap-2">
                <div className="bg-white text-black rounded-full px-4 py-2 font-medium">$101</div>
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="/api/placeholder/32/32" alt="Coin" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          
         
        </div>
      </div>

      {/* Bottom section */}
    
            
            <div className="text-center">
              <div className="flex justify-center ">
                <img src="/image5.jpg" alt="Feature icon" className="h-[300px] " />
              </div>
             
            </div>
            
            
        </div>
      
=======
import React from "react";
import image from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image5 from "../assets/Mask group (1).png";

const Hero = () => {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col">
       
      <div className="absolute top-10 left-10 text-left pl-14">
        <img src={image6} alt="image" className="w-16 mb-5" />
        <h1 className="text-6xl pt-24  font-bold">The Money Manager For<br></br> Everyone</h1>
        <p className="text-4xl text-red-500 mt-2">From $100 To Millions</p>
        <button className="mt-4 px-6 py-2 border border-red-500 text-white-500 rounded-2xl  hover:bg-red-500 hover:text-white transition">
                TRY THEO →
              </button>
      </div>

       
      <div className="absolute top-30 flex items-end justify-end relative">
 {/* Image in the center with red drop shadow */}
 <img
    src={image5}
    className="w-[18%] h-[20%] "
    alt="centered"
  />

  {/* Dollar amounts positioned around the image */}
  <span className="absolute top-0 left-[85%] transform -translate-x-1/2 bg-white text-black px-3 py-1 rounded-full">$1</span>
  <span className="absolute top-1/2 right-[23%] transform -translate-y-1/2 bg-red-500 px-3 py-1 rounded-full">$2056</span>
  <span className="absolute bottom-24 left-[78%] transform -translate-x-1/2 bg-yellow-500 px-3 py-1 rounded-full">$98,620</span>
  <span className="absolute top-[25%] left-[75%] transform -translate-y-1/2 bg-blue-600 px-3 py-1 rounded-full">$101</span>
</div>

       
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
  <img 
    src={image} 
    className="w-full max-w-full md:w-[100%] rounded-lg drop-shadow-[0px_10px_20px_rgba(0,0,0,0.7)]"
  />
</div>

    </div>
>>>>>>> 577e186435655260ae61bd56a3cf9c69d6cfca3c
  );
};

export default Hero;