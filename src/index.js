import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserGithub from './GitProfile';
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <UserGithub source="https://api.github.com/users/khaos991213"/>
  </React.StrictMode>,
  
  document.getElementById('root')
);