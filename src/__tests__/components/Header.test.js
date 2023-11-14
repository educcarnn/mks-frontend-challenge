import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../../components/common/header/header';
import { useCart } from '../../context/cartContext';


jest.mock('../../context/cartContext');

test('renderiza o componente Header sem erros', () => {

  useCart.mockReturnValue({ totalQuantity: 2 });

  render(<Header />);

  expect(screen.getByText('MKS')).toBeInTheDocument();

  expect(screen.getByText('Sistemas')).toBeInTheDocument();

  expect(screen.getByAltText('cart-icon.svg')).toBeInTheDocument();

  expect(screen.getByText('2')).toBeInTheDocument();

  fireEvent.click(screen.getByAltText('cart-icon.svg'));

  expect(screen.getByText('Conteúdo do carrinho')).toBeInTheDocument();
});
