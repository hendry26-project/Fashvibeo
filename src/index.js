


import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { CartProvider } from './Data/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
  <CartProvider>
    <App />
  </CartProvider>
</HelmetProvider>
);