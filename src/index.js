import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/home/Login';
import Register from './components/home/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
      <App />
   
  </React.StrictMode>
);


