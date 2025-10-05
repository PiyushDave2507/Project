// import React, { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";


// const AuthContext = createContext();


// export function AuthProvider({ children }) {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null); 
//   const [loading, setLoading] = useState(true); 
 
//   useEffect(() => {
//     const token = localStorage.getItem("auth_token");
//     if (token) {
//       setUser({ token }); 
//     }
//     setLoading(false);
//   }, []);

  
//   const login = (email, password) => {
    
//     if (email === "test@test.com" && password === "123456") {
//       const token = "sample_token";
//       localStorage.setItem("auth_token", token);
//       setUser({ token, email });
//       return true;
//     }
//     return false;
//   };

  
//   const logout = () => {
//     localStorage.removeItem("auth_token");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }


// export function useAuth() {
//   return useContext(AuthContext);
// }

import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = ({ name, email, password }) => {
    return new Promise((resolve, reject) => {
      if (!email || !password) {
        reject(new Error("Email and password are required"));
      } else {
        const newUser = { name, email, password };

        localStorage.setItem("user", JSON.stringify(newUser));
        console.log("User registered and saved:", newUser);

        setUser(newUser);
        resolve(newUser);
      }
    });
  };

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("Trying login with:", email, password);
    console.log("Stored user:", storedUser);

    if (!storedUser) {
      alert("No user registered yet");
      return false;
    }

    if (storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      localStorage.setItem("user", JSON.stringify(storedUser));
      console.log("Login success ✅");
      return true;
    }

    console.log("Login failed ❌");
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    console.log("Logged out");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
