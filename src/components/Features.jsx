import React from 'react';
 
import image from "../assets/image.jpg";
import image2 from "../assets/image3.jpg";

function Features() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
     
      <div className="text-center py-16 w-full shadow-lg">
        <img src={image} className="mx-auto w-full md:w-full rounded-lg" />
      </div>

       
      <button className="mt-4 px-6 py-2 border border-red-500 text-white-500 rounded-2xl  hover:bg-red-500 hover:text-white transition">
                TRY THEO →
              </button>

      
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-12 mt-12">
        
        <div className="md:w-1/2 text-left">
          <h2 className="text-5xl font-bold">Secure & Private</h2>
          <p className="text-lg text-gray-400 mt-4">
            <span className="text-white font-bold text-3xl">No Private Key</span> Sharing, Fully Decentralized, & Transparent.
          </p>
        </div>

         
        <div className="md:w-1/2 flex justify-center gap-4 mt-8 md:mt-0">
            <img src={image2} className="mx-auto w-xl md:w-3xl rounded-lg" />
        </div>    
      </div>
    </div>
  );
}

export default Features;
