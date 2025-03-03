export default function Testimonials() {
  return (
    <section className="text-center py-20 relative overflow-hidden bg-black text-white">
      <h2 className="text-4xl font-bold mb-6">Testimonials</h2>
      <button className="mt-4 px-6 py-2 border border-red-500 text-white-500 rounded-2xl  hover:bg-red-500 hover:text-white transition">
                TRY THEO →
              </button>
       
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[500px] h-[500px] border-[3px] border-red-600 rounded-full absolute"></div>
        <div className="w-[650px] h-[650px] border-[3px] border-red-600 rounded-full absolute opacity-50"></div>
      </div>

       
      <div className="relative mt-16">
        <div className="absolute top-0 left-10 bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <img src="/profile1.png" className="w-8 h-8 rounded-full" alt="Sarah" />
          <span>"Highly Recommended!" - Sarah</span>
        </div>
        <div className="absolute top-20 right-10 bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <img src="/profile2.png" className="w-8 h-8 rounded-full" alt="Hana" />
          <span>"Theo is the best, love it!" - Hana</span>
        </div>
        <div className="absolute bottom-10 left-20 bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <img src="/profile3.png" className="w-8 h-8 rounded-full" alt="Louis" />
          <span>"I finally trade with confidence." - Louis</span>
        </div>
      </div>
    </section>
  );
}

