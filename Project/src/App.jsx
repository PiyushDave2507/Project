
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container mx-auto p-4">
      <AppRoutes/>
    </div>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
