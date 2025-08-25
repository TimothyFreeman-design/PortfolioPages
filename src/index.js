import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: Tailwind or your global styles
import Portfolio from './App'; // If your main component is in App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
