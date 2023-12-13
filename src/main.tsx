import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import "./app/configs/i18n/i18n";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
