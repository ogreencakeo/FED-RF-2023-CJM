// 메인 페이지 JS - index.js
import React, { useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { TopArea } from './layout/TopArea';
import { MainArea } from './layout/MainArea';
import { FooterArea } from './layout/FooterArea';

// 최상위 Root 컴포넌트 //////////
function App(){ 

  // 후크상태변수 설정 : 페이지변경
  const [pgName, setPgName] = useState('main');

  // 페이지 변경 상태변수 업데이트 함수
  const chgPgName = (txt) => {
    setPgName(txt)
  }; // chgPgName 함수 ////////

  return(
    <>
      <TopArea />
      <button onClick={()=>chgPgName('main')}>메인 페이지</button>
      <button onClick={()=>chgPgName('men')}>남성 페이지</button>
      <button onClick={()=>chgPgName('women')}>여성 페이지</button>
      <button onClick={()=>chgPgName('style')}>스타일 페이지</button>
      <MainArea page={pgName} />
      <FooterArea />
    </>
  )
}  // App 컴포넌트

// 출력하기
const root = createRoot(document.querySelector('#root'));
root.render(<App />)