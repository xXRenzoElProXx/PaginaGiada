// Importa createRoot desde "react-dom/client"
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import './index.css';

// Utiliza createRoot para renderizar el componente principal
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
