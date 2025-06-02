/// <reference types="vitest" />

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';

const product = {
  id: 1,
  name: 'Producto Test',
  price: 19.99,
  image: 'https://via.placeholder.com/150',
};

test('muestra el nombre y precio del producto', () => {
  render(
    <MemoryRouter>
      <ProductCard product={product} onAddToCart={() => {}} />
    </MemoryRouter>
  );
  expect(screen.getByText('Producto Test')).toBeInTheDocument();
  expect(screen.getByText('$19.99')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /agregar/i })).toBeInTheDocument();
});

test('muestra la imagen del producto', () => {
  render(
    <MemoryRouter>
      <ProductCard product={product} onAddToCart={() => {}} />
    </MemoryRouter>
  );
  expect(screen.getByRole('img')).toHaveAttribute('src', product.image);
});
