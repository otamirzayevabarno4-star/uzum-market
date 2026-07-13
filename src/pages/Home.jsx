import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { useState } from 'react'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Barchasi')

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Barchasi' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ['Barchasi', ...new Set(products.map(p => p.category))]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-white mb-12">
        <h1 className="text-4xl font-bold mb-4">🍇 Uzum Market'ga Xush Kelibsiz!</h1>
        <p className="text-lg mb-6">Eng sifatli mevalar va mahsulotlar. To'g'ri uyingizga jo'natish!</p>
        <input
          type="text"
          placeholder="Mahsulot qidiring..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Kategoriyalar</h2>
        <div className="flex gap-2 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6">{selectedCategory} Mahsulotlar</h2>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-xl">Mahsulot topilmadi 😞</p>
          </div>
        )}
      </div>
    </div>
  )
}