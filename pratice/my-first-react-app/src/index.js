import React from "react";
import ReactDOM from "react-dom/client";

import './css/index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "./component/layout/Layout";


export default function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<Layout />}>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);