
  import React from "react";

  export default function ProductCard({
    product,
    onAddToCart,
    onViewDetails,
    onIncreaseQty,
    onDecreaseQty,
    onRemove,
    showActions = false,
    variant = "grid",
  }) {
    if (variant === "cart") {
      return (
        <div className="border rounded-lg p-4 mb-4  shadow-sm">
          <div className="flex items-center gap-4 mb-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">₹{product.price}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => onDecreaseQty?.(product.id)}
                className="px-2 py-1 border rounded hover:bg-gray-200"
              >
                -
              </button>
              <span className="min-w-[20px] text-center">{product.qty}</span>
              <button
                onClick={() => onIncreaseQty?.(product.id)}
                className="px-2 py-1 border rounded hover:bg-gray-200"
              >
                +
              </button>
            </div>
            <p className="font-semibold">₹{product.price * product.qty}</p>
            <button
              onClick={() => onRemove?.(product.id)}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition  hover:scale-105 flex flex-col">
        <div className="w-full aspect-[4/3] overflow-hidden flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">₹{product.price}</p>
        {showActions && (
          <div className="mt-3 flex flex-col gap-2">
            <button
              onClick={() => onAddToCart?.(product)}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
            <button
              onClick={() => onViewDetails?.(product.id)}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        )}
      </div>
    );
  }
