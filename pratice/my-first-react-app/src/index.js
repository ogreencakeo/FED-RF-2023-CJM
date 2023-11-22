import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Main } from "./dc/pages/Main.jsx";
import { Character } from "./dc/pages/Character.jsx";
import { Comics } from "./dc/pages/Comics.jsx";
import { Movies } from "./dc/pages/Movies.jsx";
import { Series } from "./dc/pages/Series.jsx";
import { Games } from "./dc/pages/Games.jsx";
import { News } from "./dc/pages/News.jsx";
import { Video } from "./dc/pages/Video.jsx";
import { CatDetail } from "./dc/pages/CatDetail.jsx";
import { Layout } from "./dc/layout/Layout.jsx";
import { SwiperApp } from "./dc/plugin/SwiperApp.jsx";

import './css/index.css';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path='character' element={<Character />} />
                    <Route path="comics" element={<Comics />} />
                    <Route path="movies" element={<Movies />} />
                    <Route path="series" element={<Series />} />
                    <Route path="games" element={<Games />} />
                    <Route path="news" element={<News />} />
                    <Route path="video" element={<Video />} />
                    <Route path="board" element={<SwiperApp />} />
                    <Route path="detail" element={<CatDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>);