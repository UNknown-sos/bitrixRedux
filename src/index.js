import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import { Router, createMemorySource, createHistory, LocationProvider } from '@reach/router';

import { store } from './store/store';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import Home from './pages/home'
import App from './App'
const root = ReactDOM.createRoot(document.getElementById('root'));
let history = createHistory(window);
root.render(
  <Provider store={store}>
     <LocationProvider history={history}>
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={<App />} />
            <Route  path="/home" element={<Home />} />
          

          </Routes>
        </BrowserRouter>
      </LocationProvider>
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

