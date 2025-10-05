

import { Link,useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";


export default function Cart() {
  const {  cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();
  
  if (cartItems.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-4">No Item Found In This Cart </h2>
        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Shop Now
        </Link>
      </div>        
    );
  }

  const total = cartItems.reduce(
    (sum, product) => sum + product.price * product.qty, 0
);

 const handleCheckout =()=>{
  navigate("/checkout");
 };
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Cart</h1>


      <div className="flex flex-col md:flex-row gap-8">


        <div className="flex-1 space-y-6">
          {cartItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onIncreaseQty={increaseQty}
              onDecreaseQty={decreaseQty}
              onRemove={removeFromCart}
              showQtyControls={true}
              variant="cart"
            />
          ))}
        </div>


        <div className="w-full md:w-1/3 border p-6 rounded bg-gray-50 h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2 text-gray-700">
            <p>Subtotal: ₹{total}</p>
            <p>Discount: ₹0</p>
            <p>Shipping: TBD</p>
          </div>
          <hr className="my-4" />
          <h3 className="text-lg font-bold">Total: ₹{total}</h3>
          <button onClick={handleCheckout} className="mt-4 w-full bg-yellow-400 text-black py-3 rounded font-semibold hover:bg-yellow-500">
            Checkout
          </button>
        </div>

      </div>
    </div>
  );
}
