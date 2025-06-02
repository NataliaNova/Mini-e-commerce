import ProductCard from './ProductCard';

export default function ProductList({ products, onAddToCart }) {
  return (
    <main className="w-full flex justify-center">
      <div className="px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div> 
    </main>
    
  );
}
