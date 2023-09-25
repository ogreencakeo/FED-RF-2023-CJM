// 옷소매 갤러리 JS - main.js
import dFn from './dom.js';

const gbx = dFn.qs('.gbx');
let abtn = dFn.qsa('.abtn');
const stsClick = 0;

abtn.forEach(ele => {
    dFn.addEvt(ele, 'click', showIt);
});

function showIt(){
    if(stsClick) return;
    stsClick = 1;
    setTimeout(()=>{stsClick = 0},400);
    let isR = this.classList.contains('rb');
    let gbx_li = dFn.qsaEl(gbx, 'div');

    if(isR){
        gbx.appendChild(gbx_li[0]);
    }else{
        gbx.insertBefore(gbx_li[gbx_li.length-1], gbx_li[0]);
    }
}

const RightFn = () => {gbx.appendChild(dFn.qsaEl(gbx, 'div')[0]);}

let autoI, autoT;

const autoSlide = () => autoI = setInterval(RightFn, 3000);

autoSlide();

const clearAuto = () => {
    clearInterval(autoI);
    clearTimeout(autoT);
    autoT = setTimeout(autoSlide, 5000);
}

abtn.forEach(ele => dFn.addEvt(ele, 'click', clearAuto));
