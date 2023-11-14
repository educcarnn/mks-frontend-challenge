

import { CartProvider } from './context/cartContext';
import Main from './pages/main';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <CartProvider>
        <Main />
        <GlobalStyle/>
      </CartProvider>
    </>
  );
}

export default App;
