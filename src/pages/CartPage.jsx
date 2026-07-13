import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart()
  const totalPrice = getTotalPrice()
  const shippingCost = totalPrice > 100000 ? 0 : 15000
  const finalTotal = totalPrice + shippingCost

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Savat Bo'sh 😔</h1>
        <p className="text-gray-600 mb-6">Savatingizda hali mahsulot yo'q</p>
        <Link to="/" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition font-bold inline-block">
          Mahsulotlarni ko'rish
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">🛒 Savat</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {cart.map(item => (
              <div key={item.id} className="border-b p-4 last:border-b-0 hover:bg-gray-50 transition">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`} className="font-bold text-lg hover:text-purple-600 transition">
                      {item.name}
                    </Link>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <p className="font-bold text-purple-600 mt-2">{item.price.toLocaleString()} so'm</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-lg">{(item.price * item.quantity).toLocaleString()} so'm</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition text-sm font-bold mt-2"
                    >
                      O'chirish
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/" className="text-purple-600 hover:text-purple-800 font-bold mt-4 inline-block">
            ← Yana mahsulot qo'shish
          </Link>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-2xl font-bold mb-6">Buyurtma Xulosa</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Mahsulotlar:</span>
                <span className="font-bold">{cart.reduce((sum, item) => sum + item.quantity, 0)} ta</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-bold">{totalPrice.toLocaleString()} so'm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Yetkazib berish:</span>
                <span className="font-bold">
                  {shippingCost === 0 ? (
                    <span className="text-green-500">Bepul ✓</span>
                  ) : (
                    `${shippingCost.toLocaleString()} so'm`
                  )}
                </span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="text-lg font-bold">Jami:</span>
                  <span className="text-2xl font-bold text-purple-600">{finalTotal.toLocaleString()} so'm</span>
                </div>
              </div>
            </div>

            {shippingCost > 0 && (
              <p className="text-sm text-gray-600 mb-4 p-3 bg-blue-50 rounded">
                💡 {(100000 - totalPrice).toLocaleString()} so'm qo'shilsa, bepul yetkazib berish olasiz!
              </p>
            )}

            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-bold text-lg mb-3">
              Buyurtma berish
            </button>
            <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition font-bold">
              Davom ettirish
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}