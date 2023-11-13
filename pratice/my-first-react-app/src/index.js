import React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './css/index.css';

import { Layout } from './dc/layout/Layout';
import { Character } from './dc/content/Character';
import { Comics } from './dc/content/Comics';
import { Movies } from './dc/content/Movies';
import { Games } from './dc/content/Games';
import { News } from './dc/content/News';
import { SwiperApp } from './dc/plugin/SwiperApp';
import { Video } from './dc/content/Video';
import { Main } from './dc/content/Main';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/character' element={<Character />} />
          <Route path='/comics' element={<Comics />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/games' element={<Games />} />
          <Route path='/news' element={<News />} />
          <Route path='/video' element={<Video />} />
          <Route path='/board' element={<SwiperApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>)