import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext";


export default function Home() {
  const { addToCart } = useCart();
  const products = [
    { id: 1, name: "Product 1", price: 2499, image: "/images/shopping.webp" },
    { id: 2, name: "Product 2", price: 1999, image: "/images/fitness band.webp" },
    { id: 3, name: "Product 3", price: 799, image: "/images/Men's Cotton T-Shirt.webp" },
    { id: 4, name: "Product 4", price: 1499, image: "/images/Women's Summer Dress.webp" },
  ];
  return (
    <div className="space-y-10">
      <section className="bg-gray-800 text-white h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/banner.png')" }}>
        <h1 className="text-4xl font-bold text-orange-700">Welcome To My Store</h1>
        <p className="mt-2 text-lg font-bold">Best Products At Best Price</p>
        <Link to="/products" className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded text-white font-semibold">
          Shop now
        </Link>
      </section>
      <section className="px-10">
        <h2 className="text-2xl font-bold mb-5">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-6">
          <Link to="/electronics" className="bg-gray-200 p-8 text-center hover:sclale-105 transition transform cursor-pointer">Electronics</Link>
          <Link to="/fashion" className="bg-gray-200 p-8 text-center hover:sclale-105 transition transform cursor-pointer">Fashion</Link>
          <Link to="/footwear" className="bg-gray-200 p-8 text-center hover:sclale-105 transition transform cursor-pointer">Footwear</Link>
          <Link to="/accessories" className="bg-gray-200 p-8 text-center hover:sclale-105 transition transform cursor-pointer">Accessories</Link>
          <Link to="/bags" className="bg-gray-200 p-8 text-center hover:sclale-105 transition transform cursor-pointer">Bags</Link>
          <Link to="/home & Kitchen" className="bg-gray-200 p-8 text-center hover:sclale-105 transition transform cursor-pointer">Home & kitchen</Link>
          <Link to="/sports" className="bg-gray-200 p-8 text-center hover:sclale-105 transition transform cursor-pointer">Sports</Link>
          <Link to="/home decor" className="bg-gray-200 p-8 text-center hover:sclale-105 transition transform cursor-pointer">Home Decor</Link>
        </div>
      </section>
      <section className="px-10">
        <h2 className="text-2xl font-bold mb-5">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border w-60 p-4 rounded shadow hover:scale-105 transition">
              <img src={product.image} alt={product.name} className="w-40 h-40 mx-auto" />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-600">₹ {product.price}</p>

              <button
                onClick={() => addToCart(product)}
                className="mt-2 px-4 bg-orange-500 hover:bg-orange-600 rounded text-white font-semibold"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}