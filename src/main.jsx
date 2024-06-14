import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider } from './components/header/CartContext.jsx'
import './index.css'
import Routing from './Routing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <Routing />
    </CartProvider>
  </React.StrictMode>,
)