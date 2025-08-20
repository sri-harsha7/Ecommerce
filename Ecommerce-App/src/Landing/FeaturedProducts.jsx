import React from "react";
import ItemCard from "../components/ItemCard";
const FeaturedProducts = () => {
  const items = [
    {
      img: "https://cdn.shopify.com/s/files/1/0568/1132/3597/files/qbvqkgcn7dm2kuhx3hcn_600x600.jpg?v=1736976433",
      title: "DieCast Collectibles",
    },
    {
      img: "https://creations.mattel.com/cdn/shop/files/dnr3axqofza67f8yufhq.jpg?v=1752709949",
      title: "DieCast Collectibles",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0568/1132/3597/files/xddanpqx4okkydrvoepf_600x600.jpg?v=1734555887",
      title: "DieCast Collectibles",
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold py-3">Featured Products</h1>
      <div>
        <ItemCard Items={items}></ItemCard>
      </div>
    </div>
  );
};

export default FeaturedProducts;
