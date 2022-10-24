import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { GoogleOAuthProvider } from '@react-oauth/google';
// import { BrowserRouter as Router } from 'react-router-dom';
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Router>
  <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_API_KEY}`}>
    <App />
  </GoogleOAuthProvider>
  // </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
