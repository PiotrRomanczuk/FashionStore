import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from "./Home"
import Nav from "./Nav"


ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);