import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:scale-105">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover hover:opacity-90 transition"
        />
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="hover:text-purple-600 transition">
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-purple-600">
            {product.price.toLocaleString()} so'm
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition font-medium text-sm"
          >
            + Savat
          </button>
        </div>
        
        {product.rating && (
          <div className="mt-3 flex items-center gap-1 text-yellow-500">
            ⭐ {product.rating} ({product.reviews})
          </div>
        )}
      </div>
    </div>
  )
}