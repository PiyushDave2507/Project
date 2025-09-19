import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <nav className ="bg-blue-500 p-4 text-white flex justify-between  ">
            <h1 className="font-bold">My App</h1>
            <div className="space-x-4">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/checkout">Checkout</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    );  
}