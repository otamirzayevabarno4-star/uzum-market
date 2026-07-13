export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">🍇 Uzum Market</h4>
            <p className="text-gray-400 text-sm">Online bozor platformasi. Faqat sifatli mahsulotlar!</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Kategoriyalar</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Yangi Mahsulotlar</a></li>
              <li><a href="#" className="hover:text-white transition">Chegirmalar</a></li>
              <li><a href="#" className="hover:text-white transition">Top Savolar</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Yordam</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Biz haqida</a></li>
              <li><a href="#" className="hover:text-white transition">Savollar</a></li>
              <li><a href="#" className="hover:text-white transition">Bog'lanish</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ijtimoiy Tarmoqlar</h4>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-purple-400 transition">📱</a>
              <a href="#" className="hover:text-purple-400 transition">💬</a>
              <a href="#" className="hover:text-purple-400 transition">📧</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Uzum Market. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}