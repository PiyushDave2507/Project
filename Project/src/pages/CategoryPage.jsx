import React from "react";
import productsData from "../data/products";
import { useCart } from "../context/CartContext";

export default function CategoryPage({ category }) {
  const { addToCart } = useCart();

  const filteredProducts = productsData.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 capitalize">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transition">
            <img src={product.image} alt={product.name} className=" w-full h-48 object-contain bg-gray-50 rounded-lg mb-3" />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-700">₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
