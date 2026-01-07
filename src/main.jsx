import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Add Inter font from Google Fonts
const _gf = document.createElement('link')
_gf.rel = 'stylesheet'
_gf.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
document.head.appendChild(_gf)

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
	<App />
  </BrowserRouter>
)