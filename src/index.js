import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter basename="/Wallmartboss/Last_Project_ReactNode">
    <App />
   <BrowserRouter />
  </React.StrictMode>
);