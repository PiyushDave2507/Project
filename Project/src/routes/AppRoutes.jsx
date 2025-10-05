import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails  from "../components/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CategoryPage from "../pages/CategoryPage";





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
            <Route path="/electronics" element={<CategoryPage category="electronics" />} />
            <Route path="/fashion" element={<CategoryPage category="fashion" />} />
            <Route path="/footwear" element={<CategoryPage category="footwear" />} />
            <Route path="/accessories" element={<CategoryPage category="accessories" />} />
            <Route path="/bags" element={<CategoryPage category="bags" />} />
            <Route path="/home & kitchen" element={<CategoryPage category="home & kitchen" />} />
            <Route path="/sports" element={<CategoryPage category="sports" />} />
            <Route path="/home decor" element={<CategoryPage category="home decor" />} />
        </Routes>
    
    );
}