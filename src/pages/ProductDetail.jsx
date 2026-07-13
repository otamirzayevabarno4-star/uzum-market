import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Mahsulot topilmadi</h1>
        <Link to="/" className="text-purple-600 hover:text-purple-800 font-bold">← Orqaga qaytish</Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-purple-600 hover:text-purple-800 font-bold mb-6 inline-block">← Bosh sahifaga</Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4 text-yellow-500 text-lg">
              ⭐ {product.rating} ({product.reviews} ta sharh)
            </div>

            <p className="text-gray-600 text-lg mb-6">{product.description}</p>

            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4">{product.details}</p>
              <p className="text-3xl font-bold text-purple-600 mb-4">
                {product.price.toLocaleString()} so'm
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition font-bold text-lg"
              >
                🛒 Savat qo'shish
              </button>
              <button className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-bold">
                ❤️ Saqlash
              </button>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚚</span>
                <div>
                  <p className="font-bold">Bepul yetkazib berish</p>
                  <p className="text-gray-600 text-sm">100 000 so'm va undan ko'p buyurtmalar uchun</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-bold">100% Sof va Sertifikatlangan</p>
                  <p className="text-gray-600 text-sm">Barcha mahsulotlar tekshirilgan</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">↩️</span>
                <div>
                  <p className="font-bold">30 kunlik qaytarish garantiyasi</p>
                  <p className="text-gray-600 text-sm">Qoniqmaydigan bo'lsa pulni qaytaramiz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}