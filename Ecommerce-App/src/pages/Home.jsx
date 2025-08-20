import React from "react";
import Hero from "../Landing/Hero";
import ShopByCategory from "../Landing/ShopByCategory";
import FeaturedProducts from "../Landing/FeaturedProducts";

const Home = () => {
  return (
    <div className="px-40 pt-5">
      <Hero></Hero>
      <ShopByCategory></ShopByCategory>
      <FeaturedProducts></FeaturedProducts>
    </div>
  );
};

export default Home;
