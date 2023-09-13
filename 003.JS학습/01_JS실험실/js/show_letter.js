// 글자등장1 JS - show_letter.js

const domFn = {
    qs : (x) => document.querySelector(x),
    qsEl : (el,x) => el.querySelector(x),
    qsa : (x) => document.querySelectorAll(x),
    qsaEl : (el,x) => el.querySelectorAll(x),
    
    addEvt : (ele,evt,fn) => ele.addEventListener(evt,fn),
}; 

// 1. 구현요구사항 :
// - 글자를 박스에 넣고 하나씩 날아오면서 등장
// 2. 대상선정 : .stage-letters
const stage = domFn.qs('.stage-letters');
console.log('대상 :', stage);

