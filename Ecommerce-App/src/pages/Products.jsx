// import { useState } from "react";
// import Slider from "@mui/material/Slider";
// import ProductCard from "../components/ProductCard";

// const Products = () => {
//   const products = [
//     {
//       id: 1,
//       title: "Cotton T-Shirt",
//       description: "Comfortable cotton t-shirt for daily wear.",
//       price: 1999,
//       discount: 20, // 20% discount
//       image:
//         "https://image.hm.com/assets/hm/7e/3f/7e3f24c5c31585b1a07703f2c49a60a3bc357cc3.jpg?imwidth=1536",
//       rating: 4.5,
//       category: "Clothing",
//       brand: "Brand A",
//     },
//     {
//       id: 2,
//       title: "Designer Jeans",
//       description: "Premium quality designer jeans.",
//       price: 2999,
//       discount: 15, // 15% discount
//       image:
//         "https://image.hm.com/assets/hm/0e/12/0e12de5ebb1c6198d1a91503713819d0090d1032.jpg?imwidth=1536",
//       rating: 4.0,
//       category: "Clothing",
//       brand: "Brand B",
//     },
//     {
//       id: 3,
//       title: "Leather Watch",
//       description: "Stylish leather strap watch.",
//       price: 3999,
//       discount: 25, // 25% discount
//       image:
//         "https://image.hm.com/assets/hm/53/23/53233edc608e047612a0467e157f9d1acd1b65fa.jpg?imwidth=1536",
//       rating: 3.5,
//       category: "Accessories",
//       brand: "Brand C",
//     },
//     {
//       id: 4,
//       title: "Running Shoes",
//       description: "Comfortable running shoes for sports.",
//       price: 4999,
//       discount: 30, // 30% discount
//       image:
//         "https://image.hm.com/assets/hm/13/b7/13b7a698018742d446494be3af98f23ade6f56fc.jpg?imwidth=1536",
//       rating: 4.5,
//       category: "Shoes",
//       brand: "Brand A",
//     },
//     {
//       id: 5,
//       title: "Casual Shirt",
//       description: "Light casual shirt for office wear.",
//       price: 2499,
//       discount: 10, // 10% discount
//       image:
//         "https://image.hm.com/assets/hm/7e/3f/7e3f24c5c31585b1a07703f2c49a60a3bc357cc3.jpg?imwidth=1536",
//       rating: 4.2,
//       category: "Clothing",
//       brand: "Brand B",
//     },
//     {
//       id: 6,
//       title: "Sunglasses",
//       description: "UV protection sunglasses.",
//       price: 2799,
//       discount: 35, // 35% discount
//       image:
//         "https://image.hm.com/assets/hm/0e/12/0e12de5ebb1c6198d1a91503713819d0090d1032.jpg?imwidth=1536",
//       rating: 4.1,
//       category: "Accessories",
//       brand: "Brand C",
//     },
//     {
//       id: 7,
//       title: "Formal Shoes",
//       description: "Premium leather formal shoes.",
//       price: 5499,
//       discount: 18, // 18% discount
//       image:
//         "https://image.hm.com/assets/hm/53/23/53233edc608e047612a0467e157f9d1acd1b65fa.jpg?imwidth=1536",
//       rating: 4.3,
//       category: "Shoes",
//       brand: "Brand A",
//     },
//     {
//       id: 8,
//       title: "Backpack",
//       description: "Spacious backpack for travel.",
//       price: 3499,
//       discount: 0, // No discount
//       image:
//         "https://image.hm.com/assets/hm/13/b7/13b7a698018742d446494be3af98f23ade6f56fc.jpg?imwidth=1536",
//       rating: 4.4,
//       category: "Accessories",
//       brand: "Brand B",
//     },
//   ];

//   // Filter states
//   const [price, setPrice] = useState(6000);
//   const [rating, setRating] = useState(1);
//   const [category, setCategory] = useState("All");
//   const [brand, setBrand] = useState("All");
//   const [sortBy, setSortBy] = useState("default");

//   // Filter and sort logic
//   const getFilteredAndSortedProducts = () => {
//     // First filter the products
//     let filtered = products.filter((product) => {
//       // Handle products without discount or discount = 0
//       const discount = product.discount || 0;
//       const discountedPrice = product.price * (1 - discount / 100);
//       const priceFilter = discountedPrice <= price;
//       const ratingFilter = product.rating >= rating;
//       const categoryFilter =
//         category === "All" || product.category === category;
//       const brandFilter = brand === "All" || product.brand === brand;

//       return priceFilter && ratingFilter && categoryFilter && brandFilter;
//     });

//     // Then sort the filtered products
//     switch (sortBy) {
//       case "price-low-high":
//         return filtered.sort((a, b) => {
//           const aDiscount = a.discount || 0;
//           const bDiscount = b.discount || 0;
//           const aDiscounted = a.price * (1 - aDiscount / 100);
//           const bDiscounted = b.price * (1 - bDiscount / 100);
//           return aDiscounted - bDiscounted;
//         });
//       case "price-high-low":
//         return filtered.sort((a, b) => {
//           const aDiscount = a.discount || 0;
//           const bDiscount = b.discount || 0;
//           const aDiscounted = a.price * (1 - aDiscount / 100);
//           const bDiscounted = b.price * (1 - bDiscount / 100);
//           return bDiscounted - aDiscounted;
//         });
//       case "rating-high-low":
//         return filtered.sort((a, b) => b.rating - a.rating);
//       case "discount-high-low":
//         return filtered.sort((a, b) => (b.discount || 0) - (a.discount || 0));
//       default:
//         return filtered;
//     }
//   };

//   const filteredProducts = getFilteredAndSortedProducts();

//   return (
//     <div>
//       <main className="flex flex-1">
//         {/* Sidebar Filters */}
//         <aside className="w-64 p-6 border-r bg-white">
//           <h2 className="font-semibold mb-4">Filters</h2>

//           <div className="mb-6">
//             <label className="block mb-2 font-medium">Category</label>
//             <select
//               className="w-full border rounded-lg p-2"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               <option value="All">All</option>
//               <option value="Clothing">Clothing</option>
//               <option value="Accessories">Accessories</option>
//               <option value="Shoes">Shoes</option>
//             </select>
//           </div>

//           <div className="mb-6">
//             <label className="block mb-2 font-medium">Price (Max)</label>
//             <Slider
//               value={price}
//               onChange={(e, newValue) => setPrice(newValue)}
//               min={1000}
//               max={6000}
//               step={100}
//             />
//             <span className="text-sm mt-1 inline-block">₹{price}</span>
//           </div>

//           <div className="mb-6">
//             <label className="block mb-2 font-medium">Brand</label>
//             <select
//               className="w-full border rounded-lg p-2"
//               value={brand}
//               onChange={(e) => setBrand(e.target.value)}
//             >
//               <option value="All">All</option>
//               <option value="Brand A">Brand A</option>
//               <option value="Brand B">Brand B</option>
//               <option value="Brand C">Brand C</option>
//             </select>
//           </div>

//           <div className="mb-6">
//             <label className="block mb-2 font-medium">Rating (Min)</label>
//             <Slider
//               value={rating}
//               onChange={(e, newValue) => setRating(newValue)}
//               min={1}
//               max={5}
//               step={0.5}
//             />
//             <span className="text-sm mt-1 inline-block">
//               {rating} ⭐ & above
//             </span>
//           </div>

//           <div className="mb-6">
//             <label className="block mb-2 font-medium">Sort By</label>
//             <select
//               className="w-full border rounded-lg p-2"
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//             >
//               <option value="default">Default</option>
//               <option value="price-low-high">Price: Low to High</option>
//               <option value="price-high-low">Price: High to Low</option>
//               <option value="rating-high-low">Rating: High to Low</option>
//               <option value="discount-high-low">Discount: High to Low</option>
//             </select>
//           </div>

//           {/* Filter Results Summary */}
//           <div className="mt-6 p-3 bg-gray-100 rounded-lg">
//             <p className="text-sm font-medium">
//               Showing {filteredProducts.length} of {products.length} products
//             </p>
//           </div>
//         </aside>

//         {/* Products Section */}
//         <section className="flex-1 p-8">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold">All Products</h2>
//             <p className="text-gray-600">
//               {filteredProducts.length} products found
//             </p>
//           </div>

//           {/* Pass filtered products to your ProductCard component */}
//           <ProductCard Products={filteredProducts} />
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
      title: "Cotton T-Shirt",
      description: "Comfortable cotton t-shirt for daily wear.",
      price: 1999,
      discount: 20,
      image:
        "https://image.hm.com/assets/hm/7e/3f/7e3f24c5c31585b1a07703f2c49a60a3bc357cc3.jpg?imwidth=1536",
      rating: 4.5,
      category: "Clothing",
      brand: "Brand A",
    },
    {
      id: 2,
      title: "Designer Jeans",
      description: "Premium quality designer jeans.",
      price: 2999,
      discount: 15,
      image:
        "https://image.hm.com/assets/hm/0e/12/0e12de5ebb1c6198d1a91503713819d0090d1032.jpg?imwidth=1536",
      rating: 4.0,
      category: "Clothing",
      brand: "Brand B",
    },
    {
      id: 3,
      title: "Leather Watch",
      description: "Stylish leather strap watch.",
      price: 3999,
      discount: 25,
      image:
        "https://image.hm.com/assets/hm/53/23/53233edc608e047612a0467e157f9d1acd1b65fa.jpg?imwidth=1536",
      rating: 3.5,
      category: "Accessories",
      brand: "Brand C",
    },
    {
      id: 4,
      title: "Running Shoes",
      description: "Comfortable running shoes for sports.",
      price: 4999,
      discount: 30,
      image:
        "https://image.hm.com/assets/hm/13/b7/13b7a698018742d446494be3af98f23ade6f56fc.jpg?imwidth=1536",
      rating: 4.5,
      category: "Shoes",
      brand: "Brand A",
    },
    {
      id: 5,
      title: "Casual Shirt",
      description: "Light casual shirt for office wear.",
      price: 2499,
      discount: 10,
      image:
        "https://image.hm.com/assets/hm/7e/3f/7e3f24c5c31585b1a07703f2c49a60a3bc357cc3.jpg?imwidth=1536",
      rating: 4.2,
      category: "Clothing",
      brand: "Brand B",
    },
    {
      id: 6,
      title: "Sunglasses",
      description: "UV protection sunglasses.",
      price: 2799,
      discount: 35,
      image:
        "https://image.hm.com/assets/hm/0e/12/0e12de5ebb1c6198d1a91503713819d0090d1032.jpg?imwidth=1536",
      rating: 4.1,
      category: "Accessories",
      brand: "Brand C",
    },
    {
      id: 7,
      title: "Formal Shoes",
      description: "Premium leather formal shoes.",
      price: 5499,
      discount: 18,
      image:
        "https://image.hm.com/assets/hm/53/23/53233edc608e047612a0467e157f9d1acd1b65fa.jpg?imwidth=1536",
      rating: 4.3,
      category: "Shoes",
      brand: "Brand A",
    },
    {
      id: 8,
      title: "Backpack",
      description: "Spacious backpack for travel.",
      price: 3499,
      discount: 0,
      image:
        "https://image.hm.com/assets/hm/13/b7/13b7a698018742d446494be3af98f23ade6f56fc.jpg?imwidth=1536",
      rating: 4.4,
      category: "Accessories",
      brand: "Brand B",
    },
  ];

  // Filter states
  const [price, setPrice] = useState(6000);
  const [rating, setRating] = useState(1);
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // Cart state - stores product id and quantity
  const [cart, setCart] = useState({});

  // Cart functions
  const addToCart = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setCart((prev) => {
        const newCart = { ...prev };
        delete newCart[productId];
        return newCart;
      });
    } else {
      setCart((prev) => ({
        ...prev,
        [productId]: quantity,
      }));
    }
  };

  // Filter and sort logic
  const getFilteredAndSortedProducts = () => {
    let filtered = products.filter((product) => {
      const discount = product.discount || 0;
      const discountedPrice = product.price * (1 - discount / 100);
      const priceFilter = discountedPrice <= price;
      const ratingFilter = product.rating >= rating;
      const categoryFilter =
        category === "All" || product.category === category;
      const brandFilter = brand === "All" || product.brand === brand;

      return priceFilter && ratingFilter && categoryFilter && brandFilter;
    });

    switch (sortBy) {
      case "price-low-high":
        return filtered.sort((a, b) => {
          const aDiscount = a.discount || 0;
          const bDiscount = b.discount || 0;
          const aDiscounted = a.price * (1 - aDiscount / 100);
          const bDiscounted = b.price * (1 - bDiscount / 100);
          return aDiscounted - bDiscounted;
        });
      case "price-high-low":
        return filtered.sort((a, b) => {
          const aDiscount = a.discount || 0;
          const bDiscount = b.discount || 0;
          const aDiscounted = a.price * (1 - aDiscount / 100);
          const bDiscounted = b.price * (1 - bDiscount / 100);
          return bDiscounted - aDiscounted;
        });
      case "rating-high-low":
        return filtered.sort((a, b) => b.rating - a.rating);
      case "discount-high-low":
        return filtered.sort((a, b) => (b.discount || 0) - (a.discount || 0));
      default:
        return filtered;
    }
  };

  const filteredProducts = getFilteredAndSortedProducts();

  return (
    <div>
      <main className="flex flex-1">
        {/* Sidebar Filters */}
        <aside className="w-64 p-6 border-r bg-white">
          <h2 className="font-semibold mb-4">Filters</h2>

          <div className="mb-6">
            <label className="block mb-2 font-medium">Category</label>
            <select
              className="w-full border rounded-lg p-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
              <option value="Shoes">Shoes</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">Price (Max)</label>
            <Slider
              value={price}
              onChange={(e, newValue) => setPrice(newValue)}
              min={1000}
              max={6000}
              step={100}
            />
            <span className="text-sm mt-1 inline-block">₹{price}</span>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">Brand</label>
            <select
              className="w-full border rounded-lg p-2"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Brand A">Brand A</option>
              <option value="Brand B">Brand B</option>
              <option value="Brand C">Brand C</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">Rating (Min)</label>
            <Slider
              value={rating}
              onChange={(e, newValue) => setRating(newValue)}
              min={1}
              max={5}
              step={0.5}
            />
            <span className="text-sm mt-1 inline-block">
              {rating} ⭐ & above
            </span>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">Sort By</label>
            <select
              className="w-full border rounded-lg p-2"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating-high-low">Rating: High to Low</option>
              <option value="discount-high-low">Discount: High to Low</option>
            </select>
          </div>

          {/* Filter Results Summary */}
          <div className="mt-6 p-3 bg-gray-100 rounded-lg">
            <p className="text-sm font-medium">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {/* Cart Summary */}
          {Object.keys(cart).length > 0 && (
            <div className="mt-6 p-3 bg-green-100 rounded-lg">
              <h3 className="text-sm font-semibold text-green-800 mb-2">
                Cart Summary
              </h3>
              <p className="text-xs text-green-700">
                {Object.keys(cart).length} item(s) •{" "}
                {Object.values(cart).reduce((a, b) => a + b, 0)} total qty
              </p>
            </div>
          )}
        </aside>

        {/* Products Section */}
        <section className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6 ">
            <h2 className="text-2xl font-bold">All Products</h2>
            <p className="text-gray-600">
              {filteredProducts.length} products found
            </p>
          </div>

          <ProductCard
            Products={filteredProducts}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        </section>
      </main>
    </div>
  );
};

export default Products;
