// 메인 페이지 JS - index.js
import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

function App(){ 
  return(
    <h1>나야나</h1>
  )
}  // App 컴포넌트

// 출력하기
const root = createRoot(document.querySelector('#root'));
root.render(<App />)