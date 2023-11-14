import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../../components/common/header/header';
import { useCart } from '../../context/cartContext';

// Mockando o useCart
jest.mock('../../context/cartContext');

test('renderiza o componente Header sem erros', () => {
  // Configurando o retorno desejado para o mock do useCart
  useCart.mockReturnValue({ totalQuantity: 2 });

  render(<Header />);

  // Verificando se o texto "MKS" está presente
  expect(screen.getByText('MKS')).toBeInTheDocument();

  // Verificando se o texto "Sistemas" está presente
  expect(screen.getByText('Sistemas')).toBeInTheDocument();

  // Verificando se o ícone do carrinho está presente
  expect(screen.getByAltText('cart-icon.svg')).toBeInTheDocument();

  // Verificando se o contador de quantidade do carrinho está presente
  expect(screen.getByText('2')).toBeInTheDocument();

  // Simulando o clique no ícone do carrinho
  fireEvent.click(screen.getByAltText('cart-icon.svg'));

  // Verificando se o componente CartDrawer é renderizado após o clique
  expect(screen.getByText('Conteúdo do carrinho')).toBeInTheDocument();
});
