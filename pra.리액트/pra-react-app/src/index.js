import React from 'react';
import ReactDOM  from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from '././dc/layout/Layout';
import {Main} from './dc/contents/Main';

import "./css/index.css";

import { Character } from './dc/contents/Character';
import { Comics } from './dc/contents/Comics';
import { Movies } from './dc/contents/Movies';
import { Games } from './dc/contents/Games';
import { News } from './dc/contents/News';
import { Video } from './dc/contents/Video';
import { SwiperApp } from './dc/contents/SwiperApp';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Main />} />
          <Route path="character" element={<Character />} />
          <Route path="comics" element={<Comics />} />
          <Route path="movies" element={<Movies />} />
          <Route path="games" element={<Games />} />
          <Route path="news" element={<News />} />
          <Route path="video" element={<Video />} />
          <Route path="swiperapp" element={<SwiperApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);