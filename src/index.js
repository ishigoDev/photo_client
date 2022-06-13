import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import Main from './Main';
import { Provider } from 'react-redux';
import store from './store/store.js';
import reportWebVitals from './reportWebVitals';
import ScrolltoTop from './ScrolltoTop'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <ScrolltoTop />      
        <Main />
      </BrowserRouter>
    </React.StrictMode>,
   </Provider>,
  document.getElementById('neutro_graphy')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
