
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthProvider>
        <BrowserRouter>
          <CartProvider>
            <Navbar />
            <main className="flex-grow">
              <AppRoutes />
            </main>
            <Footer />
          </CartProvider>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
