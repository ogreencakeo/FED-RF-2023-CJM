
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Layout } from './component/layout/Layout';
import { Character } from './component/modules/Character';

import "./css/index.css"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    {/* <Route path='character' element={<Character />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);