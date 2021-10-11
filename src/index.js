import React from 'react';
import { render } from 'react-snapshot'
import {BrowserRouter} from 'react-router-dom'
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);