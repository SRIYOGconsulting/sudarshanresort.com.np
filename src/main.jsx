import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";

if (import.meta.env.MODE !== 'production') {
  import('react-axe').then(axe => {
    const ReactDOM = import('react-axe');
    axe.default(React, ReactDOM, 1000);
  });
}

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
