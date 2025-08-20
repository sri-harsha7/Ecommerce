import React from "react";
import ItemCard from "../components/ItemCard";
const ShopByCategory = () => {
  const items = [
    {
      img: "https://creations.mattel.com/cdn/shop/files/bomjlmtwp2hkylaprvfs.jpg?v=1753908188",
      title: "DieCast Collectibles",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0568/1132/3597/files/ksivd14dokpxhswtfdyv_da136ab6-d487-4d89-a545-eac44a6c6500_600x600.jpg?v=1752709989",
      title: "DieCast Collectibles",
    },
    {
      img: "https://creations.mattel.com/cdn/shop/files/bomjlmtwp2hkylaprvfs.jpg?v=1753908188",
      title: "DieCast Collectibles",
    },
    {
      img: "https://creations.mattel.com/cdn/shop/files/bomjlmtwp2hkylaprvfs.jpg?v=1753908188",
      title: "DieCast Collectibles",
    },
    {
      img: "https://creations.mattel.com/cdn/shop/files/bomjlmtwp2hkylaprvfs.jpg?v=1753908188",
      title: "DieCast Collectibles",
    },
  ];
  return (
    <div className=" py-10">
      <h1 className="text-2xl font-bold py-3">Shop By Category</h1>
      <div>
        <ItemCard Items={items}></ItemCard>
      </div>
    </div>
  );
};

export default ShopByCategory;
