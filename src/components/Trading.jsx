 import React from 'react'
 import image from "../assets/image1.jpg";
 
 function Trading() {
   return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen py-10">
    <h1 className="text-5xl font-bold mb-6">24/7 Trading</h1>
    <img src={image} className="mx-auto w-3xl md:w-3xl rounded-lg" />
    <p className="mt-6 text-sm text-gray-400 max-w-md text-center">
      <span className="text-white text-3xl font-semibold">Unlike Human</span> Managers, Theo Never Sleeps—Monitoring Markets And Seizing Opportunities Round-The-Clock.
    </p>
  </div>
);
};
 
 export default Trading