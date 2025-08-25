import { useState } from "react";

const Filter = () => {
  const [price, setPrice] = useState(200);
  const [rating, setRating] = useState(4);

  return (
    <div>
      <h2 className="font-semibold mb-4">Filters</h2>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Category</label>
        <select className="w-full border rounded-lg p-2">
          <option>All</option>
          <option>Clothing</option>
          <option>Accessories</option>
          <option>Shoes</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Price</label>
        <Slider
          value={price}
          onChange={(e, newValue) => setPrice(newValue)} // ✅ FIXED
          max={500}
          step={10}
        />
        <span className="text-sm mt-1 inline-block">${price}</span>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Brand</label>
        <select className="w-full border rounded-lg p-2">
          <option>All</option>
          <option>Brand A</option>
          <option>Brand B</option>
          <option>Brand C</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium">Rating</label>
        <Slider
          value={rating}
          onChange={(e, newValue) => setRating(newValue)} // ✅ FIXED
          max={5}
          step={1}
        />
        <span className="text-sm mt-1 inline-block">{rating} ⭐</span>
      </div>
    </div>
  );
};

export default Filter;
