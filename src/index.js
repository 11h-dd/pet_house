import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./reset.css"
import 'animate.css';
import App from './App';
import {RouterProvider} from "react-router-dom"
import {router} from "./router";
import AppStoreProvider from "./AppStoreProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppStoreProvider>
        <RouterProvider router={router}>
            <App></App>
        </RouterProvider>
    </AppStoreProvider>

);
