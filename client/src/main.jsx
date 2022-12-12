import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const ENV = "dev";
// const ENV = "production";
const apiUrl = ENV == "dev" ? "http://localhost:3001" : "https://scout-tracker.onrender.com";

console.log("API:", apiUrl);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
