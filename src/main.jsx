import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Home.jsx'
import './index.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import Router from './routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Routes> */}
        <Router />
      {/* </Routes> */}
    </BrowserRouter>
  </StrictMode>,
)
