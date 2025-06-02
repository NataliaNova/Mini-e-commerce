import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


export default function ProductCard({ product, onAddToCart }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={`/producto/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="text-lg font-semibold mt-4 hover:underline">{product.name}</h2>
      </Link>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
      >
        Agregar
      </button>
    </motion.div>
  );
}
