// const Hero = () => {
//   return (
//     <div className=" w-full lg:flex lg:justify-center lg:items-center lg:relative">
//       <img
//         className=" w-350 h-150 object-cover"
//         src="https://creations.mattel.com/cdn/shop/files/bomjlmtwp2hkylaprvfs.jpg?v=1753908188"
//         alt=""
//       />
//       <div className="justify-center items-end absolute bottom-40 text-white">
//         <h1 className="text-6xl font-bold">Elevate Your DieCast Dreams</h1>
//         <p className="text-2xl text-center mt-5">
//           Discover the World of DieCast Collectibles
//         </p>
//         <div className="flex justify-center mt-10">
//           <button className="bg-[#47579E] text-white px-12 py-3 mt-5 rounded-md ">
//             Shop Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh] sm:h-screen">
      {/* Background Image */}
      <img
        className=" w-350 h-150 object-cover lg:{w-full h-full object-cover}"
        src="https://creations.mattel.com/cdn/shop/files/bomjlmtwp2hkylaprvfs.jpg?v=1753908188"
        alt="Hero Banner"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-snug drop-shadow-md">
          Elevate Your DieCast Dreams
        </h1>
        <p className="text-lg sm:text-xl mt-4 drop-shadow-md">
          Discover the World of DieCast Collectibles
        </p>
        <button className="bg-[#47579E] text-white px-8 py-3 mt-6 rounded-md text-base sm:text-lg">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
