/* 네비게이션 유형4 JS - nav04.js */
// 세로네비 서브별 드롭다운 세로형

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

// 로딩구역 호출설정
window.addEventListener('DOMContentLoaded',loadFn);

