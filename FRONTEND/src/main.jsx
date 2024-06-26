import React from "react"
import ReactDOM from 'react-dom/client'
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { ErrorProvider } from "./components/ErrorContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorProvider>
        <App />
      </ErrorProvider> 
    </BrowserRouter>
  </React.StrictMode>
)
