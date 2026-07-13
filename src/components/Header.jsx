import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { getTotalItems } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 border-b border-purple-500 text-sm">
          <div className="hidden md:flex gap-6">
            <a href="#" className="hover:text-purple-200 transition">📞 +998 (71) 200-55-55</a>
            <a href="#" className="hover:text-purple-200 transition">📧 support@uzummarket.uz</a>
          </div>
          <div className="flex gap-4">
            <button className="hover:text-purple-200 transition">🌐 O'zbek</button>
            <a href="#" className="hover:text-purple-200 transition">Kirish</a>
            <a href="#" className="hover:text-purple-200 transition">Ro'yxatdan o'tish</a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold hover:text-purple-100 transition shrink-0">
            🍇 Uzum Market
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 flex-1 justify-center items-center">
            <Link to="/" className="hover:text-purple-100 transition font-medium text-lg">
              Bosh sahifa
            </Link>
            <a href="#" className="hover:text-purple-100 transition font-medium text-lg">
              Kategoriyalar
            </a>
            <a href="#" className="hover:text-purple-100 transition font-medium text-lg">
              Chegirmalar
            </a>
            <a href="#" className="hover:text-purple-100 transition font-medium text-lg">
              Biz haqida
            </a>
            <a href="#" className="hover:text-purple-100 transition font-medium text-lg">
              Kontakt
            </a>
          </nav>

          {/* Search & Cart */}
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white text-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 w-64"
              />
              <button className="absolute right-3 top-2.5 text-gray-600">🔍</button>
            </div>

            <Link to="/cart" className="bg-white text-purple-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition flex items-center gap-2 whitespace-nowrap">
              🛒 ({getTotalItems()})
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-2xl font-bold hover:text-purple-100 transition"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="absolute right-3 top-2.5 text-gray-600">🔍</button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-3 border-t border-purple-500 pt-4">
            <Link
              to="/"
              className="block hover:text-purple-200 transition font-medium py-2 px-2 bg-purple-500 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              🏠 Bosh sahifa
            </Link>
            <a
              href="#"
              className="block hover:text-purple-200 transition font-medium py-2 px-2 hover:bg-purple-500 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              📂 Kategoriyalar
            </a>
            <a
              href="#"
              className="block hover:text-purple-200 transition font-medium py-2 px-2 hover:bg-purple-500 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              🎁 Chegirmalar
            </a>
            <a
              href="#"
              className="block hover:text-purple-200 transition font-medium py-2 px-2 hover:bg-purple-500 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              ℹ️ Biz haqida
            </a>
            <a
              href="#"
              className="block hover:text-purple-200 transition font-medium py-2 px-2 hover:bg-purple-500 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              📞 Kontakt
            </a>
            <div className="flex gap-2 pt-2">
              <a href="#" className="flex-1 text-center bg-white text-purple-600 py-2 rounded font-bold hover:bg-gray-100 transition">
                Kirish
              </a>
              <a href="#" className="flex-1 text-center bg-purple-500 text-white py-2 rounded font-bold hover:bg-purple-700 transition">
                Ro'yxat
              </a>
            </div>
          </nav>
        )}
      </div>

      {/* Promo Bar */}
      <div className="bg-purple-700 text-center py-2 text-sm font-medium">
        🎉 Bugun buyurtma bersangiz, 50% chegirma olasiz! 🎉
      </div>
    </header>
  )
}