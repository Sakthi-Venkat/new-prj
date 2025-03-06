import React from "react";
import image7 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";


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

       
<div className="absolute top-20 flex items-end justify-rightend left-180">

 {/* Image in the center with red drop shadow */}


  {/* Dollar amounts positioned around the image */}
  <span className="absolute top-0 left-[60%] transform -translate-x-1/2 bg-white text-black px-3 py-1 rounded-full">$1</span>
  <span className="absolute top-1/2 right-[23%] transform -translate-y-1/2 bg-red-500 px-3 py-1 rounded-full">$2056</span>
  <span className="absolute bottom-24 left-[78%] transform -translate-x-1/2 bg-yellow-500 px-3 py-1 rounded-full">$98,620</span>
  <span className="absolute top-[25%] left-[75%] transform -translate-y-1/2 bg-blue-600 px-3 py-1 rounded-full">$101</span>
</div>

       
<div className="absolute bottom-[-20px] left-[80%] transform -translate-x-1/2">
  <img 
    src={image7} 
    className="w-[120%] h-[140%] max-w-none md:w-[110%] md:h-[120%] rounded-lg drop-shadow-[0px_30px_20px_rgba(0,0,0,0.7)]"
  />
</div>


    </div>
  );
};

export default Hero;