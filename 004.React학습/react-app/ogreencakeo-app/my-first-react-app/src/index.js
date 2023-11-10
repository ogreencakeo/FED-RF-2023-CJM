// index.js는 public/index.html 페이지에 적용되는 컴포넌트다!->루트 컴포넌트
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom"

// css 도 불러온다!
import './css/index.css';
import { Layout } from './dc/layout/Layout';

// 라우터 구성 컴포넌트 : 스스로 내보내기 셋팅 필수
// 레이아웃 컴포넌트를 라우터에 입혀서 화면에
// 풀력해야하기 때문에 스스로 내보내기를 셋팅해야 하는 것!
export default function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
} // App 컴포넌트 ////////////////

// 컴포넌트 출력 //////////
// 먼저 root객체만들고
const root = ReactDOM.createRoot(document.querySelector('#root'));
// render메서드로 출력
root.render(<App />);