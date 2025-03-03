import React from "react";
import image from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";

const Hero = () => {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col">
       
      <div className="absolute top-10 left-10 text-left">
        <img src={image6} alt="image" className="w-16 mb-5" />
        <h1 className="text-4xl font-bold">The Money Manager For Everyone</h1>
        <p className="text-xl text-red-500 mt-2">From $100 To Millions</p>
        <button className="mt-4 px-6 py-2 border border-red-500 text-white-500 rounded-2xl  hover:bg-red-500 hover:text-white transition">
                TRY THEO →
              </button>
      </div>

       
      <div className="absolute top-10 right-10 flex flex-col gap-3">
        <span className="bg-white text-black px-3 py-1 rounded-full">$1</span>
        <span className="bg-red-500 px-3 py-1 rounded-full">$2056</span>
        <span className="bg-yellow-500 px-3 py-1 rounded-full">$98,620</span>
        <span className="bg-blue-600 px-3 py-1 rounded-full">$101</span>
      </div>

       
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2">
        <img src={image} className="w-full max-w-full md:w-full rounded-lg" />
      </div>
    </div>
  );
};

export default Hero;
