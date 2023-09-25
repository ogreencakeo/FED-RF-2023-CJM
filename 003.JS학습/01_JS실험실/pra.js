const domFn = {
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),

    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; 

const stage = domFn.qs('.stage-letters');
let hcode = '';
const letters = '무궁화 꽃이 피었습니다.';
let seqNum = 0;

for(let x of letters){
    if(x == ' ') hcode += `&nbsp;&nbsp;`;
    else hcode += `<span style = 'transition-delay : ${seqNum*0.02}s'>${x}</span>`;
    seqNum++;
}

stage.innerHTML = hcode;

setTimeout(()=>{
    stage.classList.add('on');
},2000);