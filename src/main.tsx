import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import "./app/configs/i18n/i18n";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
