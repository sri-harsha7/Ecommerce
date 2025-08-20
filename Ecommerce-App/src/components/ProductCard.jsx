const ProductCard = ({ Products }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {Products.map((product) => (
        <div key={product.id} className="rounded-2xl overflow-hidden shadow-sm">
          <div className="p-4 flex flex-col items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-80 h-80 object-cover"
            />
            <h3 className="font-medium">{product.title}</h3>
            <p className="text-blue-600 font-semibold">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
