// CGV PJ 메인 페이지 JS - main.js

// DOM 함수 객체
const domFn = {
    // 요소선택함수 ////////
    qs : (x) => document.querySelector(x),
    qsa : (x) => document.querySelectorAll(x),
    
    // 이벤트셋팅함수
    addEvt : (ele, evt, fn) => ele.addEventListener(evt, fn),
};  // domFn 객체

// 구현1. 
// [ 포스터 메뉴를 클릭하여 메인 유튜브 이미지를 변경한다! ]
// 1. 대상
// 1-1. 이벤트 대상 : .poster-menu a
const pmenu = domFn.qsa('.poster-menu a');
// 1-2. 변경 대상 : .screen
const screen = domFn.qs('.screen');
console.log('대상(pmenu) :', pmenu, '대상(screen) :',screen);
