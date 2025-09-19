import React, { useState, useEffect } from "react";
import productsData from "../data/products";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  

  const handleAddtoCart =()=>{
        navigate('/cart');
  };
  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col">
            <div className="w-full aspect-[4/3] overflow-hidden flex items-center justify-center">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain"/>
            </div>
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">₹{product.price}</p>
            <button onClick = {handleAddtoCart} className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Add to Cart
            </button>
            <Link to={`/productdetails/${product.id}`} className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
