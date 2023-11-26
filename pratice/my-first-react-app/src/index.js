
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './component/layout/Layout';
import { Main } from './component/pages/Main';
import { Character } from './component/pages/Character';
import { Comics } from './component/pages/Comics';
import { Movies } from './component/pages/Movies';
import { Series } from './component/pages/Series';
import { Games } from './component/pages/Games';
import { News } from './component/pages/News';
import { Video } from './component/pages/Video';
import { SwiperApp} from './component/plugin/SwiperApp';

import "./css/index.css"

export default function App() {
    return (
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
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);