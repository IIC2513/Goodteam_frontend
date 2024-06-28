import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider } from './components/header/CartContext.jsx'
import './index.css'
import Routing from './Routing.jsx'
import AuthProvider from './components/Auth/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <Routing />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
)