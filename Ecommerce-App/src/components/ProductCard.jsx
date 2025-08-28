// const ProductCard = ({ Products }) => {
//   // Add safety check to prevent the undefined error
//   if (!Products || !Array.isArray(Products) || Products.length === 0) {
//     return (
//       <div className="col-span-4 text-center py-12">
//         <p className="text-gray-500 text-lg">No products available</p>
//       </div>
//     );
//   }

//   // Function to calculate discounted price
//   const calculateDiscountedPrice = (originalPrice, discountPercent) => {
//     if (!discountPercent || discountPercent === 0) return originalPrice;
//     return Math.round(originalPrice * (1 - discountPercent / 100));
//   };

//   // Function to check if product has valid discount
//   const hasDiscount = (discount) => {
//     return discount && discount > 0;
//   };

//   // Handle Buy Now click
//   const handleBuyNow = (product) => {
//     // You can customize this function based on your needs
//     console.log("Buy Now clicked for:", product.title);
//     // Example: navigate to checkout, add to cart, etc.
//   };

//   return (
//     <div className="grid grid-cols-4 gap-4">
//       {Products.map((product) => {
//         const discountedPrice = calculateDiscountedPrice(
//           product.price,
//           product.discount
//         );
//         const savings = product.price - discountedPrice;
//         const showDiscount = hasDiscount(product.discount);

//         return (
//           <div
//             key={product.id}
//             className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
//           >
//             <div className="p-4 flex flex-col items-center relative">
//               {/* Discount Badge - Only show if there's a discount > 0 */}
//               {showDiscount && (
//                 <div className="absolute bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold z-10 -mt-2 -ml-20">
//                   {product.discount}% OFF
//                 </div>
//               )}

//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-80 h-80 object-cover rounded-lg"
//               />
//               <h3 className="font-medium mt-3 text-center">{product.title}</h3>

//               {/* Price Section - Conditional based on discount */}
//               <div className="flex flex-col items-center mt-2">
//                 {showDiscount ? (
//                   // With Discount: Show both original and discounted price
//                   <>
//                     <div className="flex items-center gap-2">
//                       <span className="text-green-600 font-bold text-lg">
//                         ₹{discountedPrice}
//                       </span>
//                       <span className="text-gray-400 line-through text-sm">
//                         ₹{product.price}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-1 mt-1">
//                       <span className="text-red-500 text-xs font-semibold">
//                         {product.discount}% OFF
//                       </span>
//                       <span className="text-gray-500 text-xs">
//                         • Save ₹{savings}
//                       </span>
//                     </div>
//                   </>
//                 ) : (
//                   // No Discount: Show only regular price
//                   <span className="text-green-600 font-bold text-lg">
//                     ₹{product.price}
//                   </span>
//                 )}
//               </div>

//               {/* Additional product details */}
//               <div className="flex items-center gap-2 mt-2">
//                 <span className="text-sm text-gray-500">
//                   {product.rating} ⭐
//                 </span>
//                 <span className="text-xs text-gray-400">•</span>
//                 <span className="text-xs text-gray-500">{product.brand}</span>
//               </div>

//               {/* Category badge */}
//               <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mt-2">
//                 {product.category}
//               </span>

//               {/* Buy Now Button */}
//               <button
//                 onClick={() => handleBuyNow(product)}
//                 className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
//               >
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ProductCard;

const ProductCard = ({
  Products,
  cart,
  addToCart,
  removeFromCart,
  updateQuantity,
}) => {
  if (!Products || !Array.isArray(Products) || Products.length === 0) {
    return (
      <div className="col-span-4 text-center py-12">
        <p className="text-gray-500 text-lg">No products available</p>
      </div>
    );
  }

  const calculateDiscountedPrice = (originalPrice, discountPercent) => {
    if (!discountPercent || discountPercent === 0) return originalPrice;
    return Math.round(originalPrice * (1 - discountPercent / 100));
  };

  const hasDiscount = (discount) => {
    return discount && discount > 0;
  };

  const handleBuyNow = (product) => {
    console.log("Buy Now clicked for:", product.title);
  };

  const handleAddToCart = (productId) => {
    addToCart(productId);
  };

  const handleIncrement = (productId) => {
    const currentQuantity = cart[productId] || 0;
    updateQuantity(productId, currentQuantity + 1);
  };

  const handleDecrement = (productId) => {
    const currentQuantity = cart[productId] || 0;
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <div className=" grid grid-cols-1 lg:grid lg:grid-cols-4 gap-4">
      {Products.map((product) => {
        const discountedPrice = calculateDiscountedPrice(
          product.price,
          product.discount
        );
        const savings = product.price - discountedPrice;
        const showDiscount = hasDiscount(product.discount);
        const isInCart = cart[product.id] > 0;
        const quantity = cart[product.id] || 0;

        return (
          <div
            key={product.id}
            className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-4 flex flex-col items-center relative">
              {/* Discount Badge */}
              {showDiscount && (
                <div className="absolute bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold z-10 -mt-2 -ml-20">
                  {product.discount}% OFF
                </div>
              )}

              <img
                src={product.image}
                alt={product.title}
                className="w-80 h-80 object-cover rounded-lg"
              />
              <h3 className="font-medium mt-3 text-center">{product.title}</h3>

              {/* Price Section */}
              <div className="flex flex-col items-center mt-2">
                {showDiscount ? (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-bold text-lg">
                        ₹{discountedPrice}
                      </span>
                      <span className="text-gray-400 line-through text-sm">
                        ₹{product.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-red-500 text-xs font-semibold">
                        {product.discount}% OFF
                      </span>
                      <span className="text-gray-500 text-xs">
                        • Save ₹{savings}
                      </span>
                    </div>
                  </>
                ) : (
                  <span className="text-green-600 font-bold text-lg">
                    ₹{product.price}
                  </span>
                )}
              </div>

              {/* Product Details */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-gray-500">
                  {product.rating} ⭐
                </span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-500">{product.brand}</span>
              </div>

              {/* Category Badge */}
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mt-2">
                {product.category}
              </span>

              {/* Buy Now Button */}
              <button
                onClick={() => handleBuyNow(product)}
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Buy Now
              </button>

              {/* Add to Cart / Quantity Controls */}
              <div className="w-full mt-2">
                {!isInCart ? (
                  // Add to Cart Button
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Add to Cart
                  </button>
                ) : (
                  // Quantity Controls
                  <div className="flex items-center justify-between bg-gray-100 rounded-lg p-2">
                    <button
                      onClick={() => handleDecrement(product.id)}
                      className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors duration-200"
                    >
                      -
                    </button>
                    <span className="font-semibold text-lg px-4">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleIncrement(product.id)}
                      className="bg-green-500 hover:bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors duration-200"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
