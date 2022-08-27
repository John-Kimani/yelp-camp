import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Application from './Application';
import "bootstrap/dist/css/bootstrap.min.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
