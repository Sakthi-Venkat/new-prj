export default function Testimonials() {
  return (
    <section className="text-center py-20 relative overflow-hidden bg-black text-white">
      <h2 className="text-4xl font-bold mb-6">Testimonials</h2>
      <button className="mt-4 px-6 py-2 border border-red-500 text-white-500 rounded-2xl  hover:bg-red-500 hover:text-white transition">
                TRY THEO →
              </button>
       
      <div className="absolute inset-0 flex justify-center items-center">
      <div className="w-[350px] h-[340px] border-[3px] border-red-600 rounded-full absolute opacity-50"></div>
        <div className="w-[500px] h-[500px] border-[3px] border-red-600 rounded-full absolute"></div>
        <div className="w-[650px] h-[650px] border-[3px] border-red-600 rounded-full absolute opacity-50"></div>
      </div>

       
      <div className="relative mt-16">
        <div className="absolute top-0 left-50 bg-red-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
          <img src="/profile1.png" className="w-8 h-8 rounded-full" alt="Sarah" />
          <span>"Highly Recommended!" - Sarah</span>
        </div>
        <div className="absolute top-20 right-10 bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <img src="/profile2.png" className="w-8 h-8 rounded-full" alt="Hana" />
          <span>"Theo is the best, love it!" - Hana</span>
        </div>
        <div className="absolute bottom-24 left-100 bg-red-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
          <img src="/profile3.png" className="w-8 h-8 rounded-full" alt="Louis" />
          <span>"I finally trade </span>
        </div>
        <div className="absolute bottom-10 right-50 bg-red-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
          <img src="/profile3.png" className="w-8 h-8 rounded-full" alt="Louis" />
          <span>"I finally trade with confidence." - Louis</span>
        </div>
        <div className="absolute bottom-40 right-30 bg-red-600 text-white px-4 py-2 rounded-full flex items-center space-x-2">
          <img src="/profile3.png" className="w-8 h-8 rounded-full" alt="Louis" />
          <span>"I finally trade with confidence." - Louis</span>
        </div>
        <div className="absolute bottom-44 left-[40%] space-y-2">
          <img src="../assets/image1.jpg" className="w-8 h-8 rounded-full" alt="Louis" />
          <h1 className="bg-white rounded-full  w-2 h-2 border-[50%]"></h1>
        </div>
        <div className="absolute bottom-0 left-148 space-y-2">
          <img src="../assets/image1.jpg" className="w-8 h-8 rounded-full" alt="Louis" />
          <h1 className="bg-white rounded-full  w-2 h-2  ml-4 border-[50%]"></h1>
        </div>
        <div className="absolute bottom-35 right-128 space-y-2">
          <img src="../assets/image1.jpg" className="w-8 h-8 rounded-full" alt="Louis" />
          <h1 className="bg-white rounded-full  w-2 h-2 ml-5 border-[50%]"></h1>
        </div>
      </div>
    </section>
  );
}

