import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails  from "../components/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";




export default function AppRoutes(){
    return(
        
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/productdetails/:id" element={<ProductDetails />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
        </Routes>
    
    );
}