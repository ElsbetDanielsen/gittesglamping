import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MyListProvider } from "./context/myListContext.jsx"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MyListProvider>
        <App />
      </MyListProvider>
      </BrowserRouter>
  </StrictMode>
)