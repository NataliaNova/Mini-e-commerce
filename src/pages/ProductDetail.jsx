import { useParams } from 'react-router-dom';

export default function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-6">Producto no encontrado.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded mb-4" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600 text-lg mt-2">${product.price}</p>
      <p className="mt-4 text-sm text-gray-500">
        Este es un producto increíble con muchos beneficios. Puedes personalizar esta descripción.
      </p>
    </div>
  );
}
