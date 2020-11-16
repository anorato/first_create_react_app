import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from "./components/Root";
import {SecondRoot} from "./components/SecondRoot";
import {Counter} from "./components/Counter";


ReactDOM.render(
  <React.StrictMode>
   <div>
       <Counter/>
   </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
