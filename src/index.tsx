import React from 'react';
import './common/styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root')!)
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App/>
    </BrowserRouter>)

reportWebVitals();
