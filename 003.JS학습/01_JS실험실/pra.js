const domFn = {
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),

    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; 

const stage = domFn.qs('.stage-letters');
const myText = '무궁화 꽃이 피었습니다.';

let hcode = ''
let seqNum = 0;

for(let x of myText){
    if(x == ' ') hcode += '&nbsp;&nbsp;';
    else hcode += `<span style='transition-delay: ${seqNum*0.2}'>${x}</span>`
    seqNum++;
}

stage.innerHTML = hcode;

setTimeout(()=>{
    stage.classList.add('on');
},2000);