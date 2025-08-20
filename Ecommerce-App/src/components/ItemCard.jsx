import React from "react";

const ItemCard = ({ Items }) => {
  return (
    <div className="flex overflow-x-auto gap-5">
      {Items.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-1/3 max-w-xs" // 👈 ensures only 3 cards fit per full row, rest scroll
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-80 object-cover rounded-md"
          />
          <p className="text-center text-[20px] mt-2">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
