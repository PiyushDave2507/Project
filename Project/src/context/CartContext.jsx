// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();


// export function CartProvider({props}){
//     const [cartItems, setcartItems] = useState([]);

//     const addToCart =(product)=>{
//         setcartItems([...cartItems,product]);
//     };

//     const removeFromCart =(productId)=>{
//         setcartItems(cartItems.filter(item => item.id != productId));
//     };
//     return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {props}
//     </CartContext.Provider>
//   );
// }
// export function useCart() {
//   return useContext(CartContext);
// }