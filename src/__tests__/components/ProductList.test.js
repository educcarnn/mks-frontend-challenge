import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from '../../components/store/productList';
import { CartProvider } from '../../context/cartContext'; 


jest.mock('../../hooks/useProducts', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: {
      products: [
        {
          id: 1,
          photo: 'photo-url',
          name: 'Produto de Teste',
          description: 'Descrição do produto de teste',
          price: '10.00',
        },
      ],
    },
    isLoading: false,
    isError: false,
  })),
}));

test('renderiza o componente ProductList sem erros', () => {
  render(
    <CartProvider>
      <ProductList />
    </CartProvider>
  );


  expect(screen.getByText('Produto de Teste')).toBeInTheDocument();


  expect(screen.getByText('COMPRAR')).toBeInTheDocument();


  fireEvent.click(screen.getByText('COMPRAR'));


  expect(screen.getByText('Conteúdo do carrinho')).toBeInTheDocument();
});
