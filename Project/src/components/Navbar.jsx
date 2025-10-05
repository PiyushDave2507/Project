import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext"; 

export default function Navbar() {
    const { cartItems } = useCart();
    const { user, logout } = useAuth(); 
    const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);

    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="flex items-center space-x-2">
            <img src="/images/logo_big.png" alt="My Shop" className="w-8 h-8 rounded-full"/>
            <h1 className="font-bold">My Shop</h1>
            </div>
            <div className="space-x-4 flex items-center">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart" className="relative">
                    <span className="text-2xl">🛒</span>
                    {totalQty > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            {totalQty}
                        </span>
                    )}
                </Link>

                {user ? (
                    <>
                        <span>Hi, {user.name}</span>
                        <button
                            onClick={logout}
                            className="ml-2 bg-red-500 px-2 py-1 rounded"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
}
