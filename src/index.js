import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBY85AdvdBfYq8YPLD5cB-pxxgn8URY9XM",
  authDomain: "enmarcados-37fe4.firebaseapp.com",
  projectId: "enmarcados-37fe4",
  storageBucket: "enmarcados-37fe4.appspot.com",
  messagingSenderId: "1072614779551",
  appId: "1:1072614779551:web:62d49a78e3dfb031cd10aa"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
