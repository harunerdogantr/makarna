import { useState } from 'react'
import { menuData } from './data/menu'


function App() {
  const [selectedCategory, setSelectedCategory] = useState(menuData[0].id)

  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategory(categoryId)
  }

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Header */}
      <header className="bg-dark text-white py-8">
        <div className="container relative">
          <h1 className="header-title">İSKENDERUN MAKARNACIM</h1>
          <p className="header-subtitle">En lezzetli İtalyan lezzetleri...</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        {/* Category Buttons */}
        <div className="category-buttons-container">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`category-button ${
                selectedCategory === category.id ? 'category-button-active' : ''
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="menu-items-container">
          {menuData
            .filter((category) => category.id === selectedCategory)
            .map((category) => (
              <div key={category.id} className="menu-category">
                <h2>{category.name}</h2>
                <p className="category-description">{category.description}</p>
                <div className="menu-items">
                  {category.items.map((item) => (
                    <div key={item.id} className="menu-item">
                      <img src={item.image} alt={item.name} />
                      <div className="item-info">
                        <h3 className="item-name">{item.name}</h3>
                        <p className="item-description">{item.description}</p>
                        <p className="item-price">{item.price.toFixed(2)} ₺</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="text-center">
            <h2 className="footer-title">İSKENDERUN MAKARNACIM</h2>
            <p className="footer-copyright">© 2024 Tüm hakları saklıdır.</p>
            <p className="designer">Harkan Media tarafından tasarlandı</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
