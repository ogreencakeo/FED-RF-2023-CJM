// index.js는 public/index.html 페이지에 적용되는 컴포넌트다!->루트 컴포넌트
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom"

// 메인페이지 CSS 불러오기
import "./css/index.css";

import { Layout } from "./components/layout/Layout";
import { Main } from "./components/pages/Main";
import { Character } from "./components/pages/Character";
import { Comics } from "./components/pages/Comics";
import { Movies } from "./components/pages/Movies";
import { Games } from "./components/pages/Games";
import { News } from "./components/pages/News";
import { Video } from "./components/pages/Video";
import { SwiperApp } from "./components/plugin/SwiperApp";
import { CatDetail } from "./components/pages/CatDetail";
import { Series } from "./components/pages/Series";
import { SchPage } from "./components/pages/SchPage";
import { Member } from "./components/pages/Member";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>     
          <Route index element={<Main />} />
          <Route path="character" element={<Character />} />
          <Route path="comics" element={<Comics />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="games" element={<Games />} />
          <Route path="news" element={<News />} />
          <Route path="video" element={<Video />} />
          <Route path="board" element={<SwiperApp />} />
          <Route path="detail" element={<CatDetail />} />
          <Route path="schpage" element={<SchPage />} />
          <Route path="member" element={<Member />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
} 

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);