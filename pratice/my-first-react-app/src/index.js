import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./dc/layout/Layout";
import { Main } from "./dc/pages/Main";
import { Character } from "./dc/pages/Character";
import { Comics } from "./dc/pages/Comics";
import { Movies } from "./dc/pages/Movies";
import { Games } from "./dc/pages/Games";
import { News } from "./dc/pages/News";
import { Video } from "./dc/pages/Video";
import { SwiperApp } from "./dc/plugin/SwiperApp";

import './css/index.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="character" element={<Character />} />
                    <Route path="comics" element={<Comics />} />
                    <Route path="movies" element={<Movies />} />
                    <Route path="games" element={<Games />} />
                    <Route path="news" element={<News />} />
                    <Route path="video" element={<Video />} />
                    <Route path="board" element={<SwiperApp />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);