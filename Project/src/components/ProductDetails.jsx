import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products";


export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();
  

  const handleAddtoCart =()=>{
        navigate('/cart');
  };
  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  return (
    <div className="container mx-auto px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full aspect-[4/3] overflow-hidden flex items-center justify-center">
        <img src={product.image} alt={product.name} className="w-full h-full object-contain"/>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">₹{product.price}</p>
          <p className="mb-6"> {product.description}</p>
          <button onClick = {handleAddtoCart} className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}