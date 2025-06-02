import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartDrawer from './components/CartDrawer';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';

const products = [
  {
    id: 1,
    name: 'Producto 1',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=700&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    name: 'Producto 2',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=700&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    name: 'Producto 3',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=700&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    name: 'Producto 4',
    price: 39.99,
    image: 'https://plus.unsplash.com/premium_photo-1661597156656-75ba116e9e1d?w=700&auto=format&fit=crop&q=60',
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />

      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/producto/:id"
          element={<ProductDetail products={products} />}
        />
      </Routes>
      <CartDrawer
        isOpen={isCartOpen}
        cartItems={cartItems}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}

export default App;
