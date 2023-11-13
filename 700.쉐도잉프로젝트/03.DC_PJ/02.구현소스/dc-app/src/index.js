// index.js는 public/index.html 페이지에 적용되는 컴포넌트다!->루트 컴포넌트
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom"

// 메인페이지 CSS 불러오기
import "./css/index.css";

import { Layout } from "./dc/layout/Layout";
import { Main } from "./dc/contents/Main";
import { Character } from "./dc/contents/Character";
import { Comics } from "./dc/contents/Comics";
import { Movies } from "./dc/contents/Movies";
import { Games } from "./dc/contents/Games";
import { News } from "./dc/contents/News";
import { Video } from "./dc/contents/Video";
import { SwiperApp } from "./dc/plugin/SwiperApp";

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
  );
} 

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);