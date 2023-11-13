// 메인 페이지 JS - index.js
import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { TopArea } from './layout/TopArea';
import { MainArea } from './layout/MainArea';
import { FooterArea } from './layout/FooterArea';

// 최상위 Root 컴포넌트 //////////
function App(){ 

  // 후크상태변수 설정 : 페이지변경
  const [pgName]

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