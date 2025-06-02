import { ShoppingCart } from 'lucide-react';

export default function Header({ cartCount, onCartClick }) {
  return (
    <header className="bg-white shadow p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Tienda</h1>
        <button className="relative" onClick={onCartClick}>
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  );
}
