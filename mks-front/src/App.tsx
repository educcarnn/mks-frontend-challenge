

import { CartProvider } from './context/cartContext';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Main />
      </CartProvider>
    </div>
  );
}

export default App;
