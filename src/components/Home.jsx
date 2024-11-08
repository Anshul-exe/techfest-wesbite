import spiderWeb from '/src/assets/spider-web-svgrepo-com.svg'; // Import as image

const Glitch = () => {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col items-center px-6 py-4 font-[Poppins]">
      

      {/* Main Content */}
      <main className="flex flex-col items-center mt-20 text-center relative">
        {/* Background SVG as image */}
        <img src={spiderWeb} alt="Spider Web Background" className="absolute inset-0 w-full h-full opacity-30" />

        {/* Title */}
        <div className="relative z-10">
          <h1 className="text-6xl font-bold tracking-wide">GLITCH</h1>
          <h3 className="text-red-500 text-2xl mt-2">NOW WAY HOME</h3>
        </div>

        {/* Description */}
        <div className="relative z-10 mt-6 max-w-md">
          <p className="text-gray-400 leading-relaxed">
            No Way Home premiered at the Fox Village Theatre in Hollywood, Los Angeles, on December 13, 2021, and was theatrically released in the United States on December 17.
          </p>
        </div>

        {/* Buttons */}
        <div className="relative z-10 mt-8 flex flex-col items-center space-y-4">
          <button className="bg-white text-gray-900 font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition">
            GO SEE TIMELINE
          </button>
          <div className="flex space-x-4">
            <button className="text-red-500 text-2xl hover:text-red-400 transition">⬇️</button>
            <button className="text-yellow-500 text-2xl hover:text-yellow-400 transition">➡️</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Glitch;
