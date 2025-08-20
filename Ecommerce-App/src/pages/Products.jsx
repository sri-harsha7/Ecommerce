// import { useState } from "react";
// import Slider from "@mui/material/Slider";
// import ProductCard from "../components/ProductCard";

// const Products = () => {
//   const products = [
//     {
//       id: 1,
//       title: "Product 1",
//       description: "This is the description of Product 1.",
//       price: 19.99,
//       image:
//         "https://image.hm.com/assets/hm/7e/3f/7e3f24c5c31585b1a07703f2c49a60a3bc357cc3.jpg?imwidth=1536",
//       rating: 4.5,
//     },
//     {
//       id: 2,
//       title: "Product 2",
//       description: "This is the description of Product 2.",
//       price: 29.99,
//       image:
//         "https://image.hm.com/assets/hm/0e/12/0e12de5ebb1c6198d1a91503713819d0090d1032.jpg?imwidth=1536",
//       rating: 4.0,
//     },
//     {
//       id: 3,
//       title: "Product 3",
//       description: "This is the description of Product 3.",
//       price: 39.99,
//       image:
//         "https://image.hm.com/assets/hm/53/23/53233edc608e047612a0467e157f9d1acd1b65fa.jpg?imwidth=1536",
//       rating: 3.5,
//     },
//     {
//       id: 4,
//       title: "Product 4",
//       description: "This is the description of Product 4.",
//       price: 49.99,
//       image:
//         "https://image.hm.com/assets/hm/13/b7/13b7a698018742d446494be3af98f23ade6f56fc.jpg?imwidth=1536",
//       rating: 4.5,
//     },
//   ];
//   const [price, setPrice] = useState([200]);
//   const [rating, setRating] = useState([4]);
//   return (
//     <div>
//       <main className="flex flex-1">
//         {/* Sidebar Filters */}
//         <aside className="w-64 p-6 border-r bg-white">
//           <h2 className="font-semibold mb-4">Filters</h2>

//           <div className="mb-6">
//             <label className="block mb-2 font-medium">Category</label>
//             <select className="w-full border rounded-lg p-2">
//               <option>All</option>
//               <option>Clothing</option>
//               <option>Accessories</option>
//               <option>Shoes</option>
//             </select>
//           </div>

//           <div className="mb-6">
//             <label className="block mb-2 font-medium">Price</label>
//             <Slider
//               value={price}
//               onValueChange={setPrice}
//               max={500}
//               step={10}
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block mb-2 font-medium">Brand</label>
//             <select className="w-full border rounded-lg p-2">
//               <option>All</option>
//               <option>Brand A</option>
//               <option>Brand B</option>
//               <option>Brand C</option>
//             </select>
//           </div>

//           <div>
//             <label className="block mb-2 font-medium">Rating</label>
//             <Slider value={rating} onValueChange={setRating} max={5} step={1} />
//             <span className="text-sm mt-1 inline-block">{rating}</span>
//           </div>
//         </aside>

//         {/* Products Section */}
//         <section className="flex-1 p-8">
//           <h2 className="text-2xl font-bold mb-6">All Products</h2>

//           <div className="flex flex-wrap">
//             <ProductCard Products={products}></ProductCard>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Products;
import { useState } from "react";
import Slider from "@mui/material/Slider";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "This is the description of Product 1.",
      price: 19.99,
      image:
        "https://image.hm.com/assets/hm/7e/3f/7e3f24c5c31585b1a07703f2c49a60a3bc357cc3.jpg?imwidth=1536",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Product 2",
      description: "This is the description of Product 2.",
      price: 29.99,
      image:
        "https://image.hm.com/assets/hm/0e/12/0e12de5ebb1c6198d1a91503713819d0090d1032.jpg?imwidth=1536",
      rating: 4.0,
    },
    {
      id: 3,
      title: "Product 3",
      description: "This is the description of Product 3.",
      price: 39.99,
      image:
        "https://image.hm.com/assets/hm/53/23/53233edc608e047612a0467e157f9d1acd1b65fa.jpg?imwidth=1536",
      rating: 3.5,
    },
    {
      id: 4,
      title: "Product 4",
      description: "This is the description of Product 4.",
      price: 49.99,
      image:
        "https://image.hm.com/assets/hm/13/b7/13b7a698018742d446494be3af98f23ade6f56fc.jpg?imwidth=1536",
      rating: 4.5,
    },
    {
      id: 1,
      title: "Product 1",
      description: "This is the description of Product 1.",
      price: 19.99,
      image:
        "https://image.hm.com/assets/hm/7e/3f/7e3f24c5c31585b1a07703f2c49a60a3bc357cc3.jpg?imwidth=1536",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Product 2",
      description: "This is the description of Product 2.",
      price: 29.99,
      image:
        "https://image.hm.com/assets/hm/0e/12/0e12de5ebb1c6198d1a91503713819d0090d1032.jpg?imwidth=1536",
      rating: 4.0,
    },
    {
      id: 3,
      title: "Product 3",
      description: "This is the description of Product 3.",
      price: 39.99,
      image:
        "https://image.hm.com/assets/hm/53/23/53233edc608e047612a0467e157f9d1acd1b65fa.jpg?imwidth=1536",
      rating: 3.5,
    },
    {
      id: 4,
      title: "Product 4",
      description: "This is the description of Product 4.",
      price: 49.99,
      image:
        "https://image.hm.com/assets/hm/13/b7/13b7a698018742d446494be3af98f23ade6f56fc.jpg?imwidth=1536",
      rating: 4.5,
    },
  ];

  // ✅ Use numbers instead of arrays
  const [price, setPrice] = useState(200);
  const [rating, setRating] = useState(4);

  return (
    <div>
      <main className="flex flex-1">
        {/* Sidebar Filters */}
        <aside className="w-64 p-6 border-r bg-white">
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
        </aside>

        {/* Products Section */}
        <section className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-6">All Products</h2>

          <div className="flex flex-wrap">
            <ProductCard Products={products}></ProductCard>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;
