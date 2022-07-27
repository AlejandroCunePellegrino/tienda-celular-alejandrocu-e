import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Header from './Componentes/header.js;
import reportWebVitals from './reportWebVitals';
import firebase from './firebase/config'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
