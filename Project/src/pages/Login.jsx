import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    const success = login(email, password);
    if (success) {
      navigate("/products"); 
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>

        {error && (
          <p className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm text-center">
            {error}
          </p>
        )}
         
         <form onSubmit={handleLogin}>
          <div>
            <label> Email</label>
            <input
              type="email"
              plaseholder="you@gmail.com"
              className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value = {email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label>Password</label>
            <input
              type="password"
              plaseholder=""
              className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value = {password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-4">
          <button 
          type="submit"
          className="mt-2 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
          </div>
         </form>
      </div>
    </div>
  );
}
