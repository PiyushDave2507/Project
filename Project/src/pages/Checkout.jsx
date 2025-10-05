import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cartItems, removeFromCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    payment: "cod",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let orderDetails = `
      Name: ${formData.name}
      Email: ${formData.email}
      Address: ${formData.address}
      Payment: ${formData.payment}
      Total: ₹${total}
    `;

    if (formData.payment === "card") {
      orderDetails += `
      Card Number: ${formData.cardNumber}
      Expiry: ${formData.expiry}
      CVV: ${formData.cvv}
      `;
    }

    alert(`Order Placed Successfully!\n${orderDetails}`);

    cartItems.forEach(item => removeFromCart(item.id));

    setFormData({
      name: "",
      email: "",
      address: "",
      payment: "cod",
      cardNumber: "",
      expiry: "",
      cvv: "",
    });
  };

  return (
    <div className="p-6 grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between border-b pb-2">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    Qty: {item.qty} × ₹{item.price}
                  </p>
                </div>
                <p className="font-bold">₹{item.qty * item.price}</p>
              </div>
            ))}
            <hr className="my-4" />
            <h3 className="text-xl font-bold">Total: ₹{total}</h3>
          </div>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Checkout Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <div>
            <label className="block mb-2 font-semibold">Payment Method</label>
            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
            </select>
          </div>

          {formData.payment === "card" && (
            <div className="space-y-2">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                  className="w-1/2 p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-1/2 p-2 border rounded"
                  required
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
