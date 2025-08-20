const Hero = () => {
  return (
    <div className="flex justify-center items-center relative">
      <img
        className="w-350 h-150 object-cover"
        src="https://creations.mattel.com/cdn/shop/files/bomjlmtwp2hkylaprvfs.jpg?v=1753908188"
        alt=""
      />
      <div className="justify-center items-end absolute bottom-10 text-white">
        <h1 className="text-6xl font-bold">Elevate Your DieCast Dreams</h1>
        <p className="text-2xl text-center mt-5">
          Discover the World of DieCast Collectibles
        </p>
      </div>
    </div>
  );
};

export default Hero;
