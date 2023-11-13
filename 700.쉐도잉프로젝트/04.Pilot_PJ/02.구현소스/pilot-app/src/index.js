// 메인 페이지 JS - index.js
import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { TopArea } from './layout/topArea';
import { MainArea } from './layout/MainArea';
import { FooterArea } from './layout/FooterArea';

function App(){ 
  return(
    <>
      <TopArea />
      <MainArea page='main'/>
      <FooterArea />
    </>
  )
}  // App 컴포넌트

// 출력하기
const root = createRoot(document.querySelector('#root'));
root.render(<App />)