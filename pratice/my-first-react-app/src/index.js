import React from "react";
import ReactDOM from "react-dom/client";

import './css/index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "./component/layout/Layout";
import { Main } from "./component/pages/Main";
import {Member} from './component/pages/Member';
import {Login} from './component/pages/Login';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="member" element={<Member />} />
                    <Route path="login" element={<Login />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);