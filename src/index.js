import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home'
import Register from "./pages/RegisterPage/register";


ReactDOM.render(
    <React.StrictMode>

<Register/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
