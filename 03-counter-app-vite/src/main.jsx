import React from "react";
import ReactDOM from 'react-dom/client';

import './global.css';

import {FirstApp} from "./FirstApp";
import {CounterApp} from "./CounterApp";

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={2}/>
    </React.StrictMode>
)

// Default Props

//         <FirstApp title={'Titulo'} paragraph={498}/>