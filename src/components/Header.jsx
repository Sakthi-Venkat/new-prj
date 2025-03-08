import React from 'react';
import image from "/image4.jpg";
import image6 from "/image6.jpg";
 
const Header = () => {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center p-6">
          <img src={image6} alt="image" className="w-16 mb-20" />
           
          <h1 className="text-3xl sm:text-5xl font-bold text-center">
            Introducing Agent <span className="text-red-500">Theo</span>
          </h1>
          <p className="text-gray-300 text-center max-w-2xl mt-4">
            In the Fiat World, Only The Ultra-Wealthy Can Afford Portfolio Managers—Experts Who Manage
            Their Investments, Make Decisions On Their Behalf, And Drive Their Wealth Forward. But What
            if Everyone Could Have Such A Powerful Money Manager?
          </p>
          <p className="text-gray-300 text-center max-w-2xl mt-2">
            With Agent Theo You Can. Whether You’re Investing A Few Hundred Dollars Or Managing Millions,
            Theo Is Your AI-Powered Money Manager—Affordable, Accessible, And Built To Grow With You.
          </p>
          
           
          <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl mt-12">
             
            <div className="text-left sm:w-1/2">
              <h2 className="text-3xl font-bold">
                Accessible To <span className="text-gray-400">Everyone</span>
              </h2>
              <button className="mt-4 px-6 py-2 border border-red-500 text-white-500 rounded-2xl  hover:bg-red-500 hover:text-white transition">
                TRY THEO →
              </button>
            </div>
            
             
            <div className="sm:w-1/2 flex justify-end">
              <img src={image} className="w-full md:w-3xl rounded-lg border-t-2 border-red-500" />
            </div>
          </div>
          
           
          <div className="w-full max-w-4xl mt-6 text-right">
            <p className="text-gray-400">
              From <span className="text-white font-bold">$100 To Millions</span>, Theo Works For Investors Of All Levels.
            </p>
          </div>
        </div>
      );
};

export default Header;