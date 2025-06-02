import { motion } from 'framer-motion';

export default function CartDrawer({ isOpen, cartItems, onClose }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-4"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Carrito</h2>
        <button onClick={onClose} className="text-sm text-red-600">Cerrar</button>
      </div>
      <div className="space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Tu carrito está vacío.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">x{item.qty}</p>
              </div>
              <p>${(item.price * item.qty).toFixed(2)}</p>
            </div>
          ))
        )}
      </div>
      <div className="mt-6 border-t pt-4 font-semibold">
        Total: ${total.toFixed(2)}
      </div>
    </motion.div>
  );
}
