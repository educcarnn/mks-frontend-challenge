import { render, screen } from '@testing-library/react';
import Footer from '../../components/common/footer/footer';

test('renderiza o componente Footer sem erros', () => {
  render(<Footer />);


  expect(screen.getByText('MKS Sistemas © Todos os direitos reservados')).toBeInTheDocument();


  const styledFooter = screen.getByTestId('styled-footer'); 
  expect(styledFooter).toHaveStyle({
    background: '#eeeeee',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  });
});
