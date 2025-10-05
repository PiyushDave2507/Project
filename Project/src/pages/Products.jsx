import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";


export default function Products() {
  const [products, setProducts] = useState(productsData);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleProductDetails = (id) => {
    navigate(`/productdetails/${id}`);
  }

  const handleAddtoCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddtoCart}
            onViewDetails={handleProductDetails}
            showActions={true}
          />
        ))}
      </div>
    </div>
  );
}

