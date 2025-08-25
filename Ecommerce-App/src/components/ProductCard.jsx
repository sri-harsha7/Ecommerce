const ProductCard = ({ Products }) => {
  // Add safety check to prevent the undefined error
  if (!Products || !Array.isArray(Products) || Products.length === 0) {
    return (
      <div className="col-span-4 text-center py-12">
        <p className="text-gray-500 text-lg">No products available</p>
      </div>
    );
  }

  // Function to calculate discounted price
  const calculateDiscountedPrice = (originalPrice, discountPercent) => {
    if (!discountPercent || discountPercent === 0) return originalPrice;
    return Math.round(originalPrice * (1 - discountPercent / 100));
  };

  // Function to check if product has valid discount
  const hasDiscount = (discount) => {
    return discount && discount > 0;
  };

  // Handle Buy Now click
  const handleBuyNow = (product) => {
    // You can customize this function based on your needs
    console.log("Buy Now clicked for:", product.title);
    // Example: navigate to checkout, add to cart, etc.
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {Products.map((product) => {
        const discountedPrice = calculateDiscountedPrice(
          product.price,
          product.discount
        );
        const savings = product.price - discountedPrice;
        const showDiscount = hasDiscount(product.discount);

        return (
          <div
            key={product.id}
            className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-4 flex flex-col items-center relative">
              {/* Discount Badge - Only show if there's a discount > 0 */}
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

              {/* Price Section - Conditional based on discount */}
              <div className="flex flex-col items-center mt-2">
                {showDiscount ? (
                  // With Discount: Show both original and discounted price
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
                  // No Discount: Show only regular price
                  <span className="text-green-600 font-bold text-lg">
                    ₹{product.price}
                  </span>
                )}
              </div>

              {/* Additional product details */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-gray-500">
                  {product.rating} ⭐
                </span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-500">{product.brand}</span>
              </div>

              {/* Category badge */}
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
