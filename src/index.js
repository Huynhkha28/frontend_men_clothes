import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './route/router.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <React.StrictMode>
      <GoogleOAuthProvider clientId="327644700340-6qi21csd43uhmvg6s7vvcr1q1kjlkmuu.apps.googleusercontent.com">
        <Router />
      </GoogleOAuthProvider>
    </React.StrictMode>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
