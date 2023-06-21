import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import { Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Routes>
        <Route>
          <App />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
