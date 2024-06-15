import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Routing from './Routing.jsx'
import AuthProvider from './components/Auth/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Routing />
    </AuthProvider>
  </React.StrictMode>,
)