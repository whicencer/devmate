import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import "./app/configs/i18n/i18n";
import {BrowserRouter} from "react-router-dom";
import {ErrorBoundary} from "./app/providers/ErrorBoundary";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
);
