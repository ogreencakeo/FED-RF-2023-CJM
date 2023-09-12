/* 네비게이션 유형6 JS - nav06.js */
// 가로네비 서브별 드롭다운 전체형

// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs : (x) => document.querySelector(x),
    qsEl : (el,x) => el.querySelector(x),
    qsa : (x) => document.querySelectorAll(x),
    qsaEl : (el,x) => el.querySelectorAll(x),
    
    // 이벤트셋팅함수
    addEvt : (ele,evt,fn) => ele.addEventListener(evt,fn),
}; 

// 1. 구현 요구사항
// GNB메뉴의 데이터를 모두 HTML DOM으로 구조화 하여 
// 화면에 출력한다!

// 2. 대상 선정 : .gnb
const gnbBox = domFn.qs('.gnb');
console.log('대상 :', gnbBox);
