import dFn from './dom.js';
console.log(dFn); 

const slide = dFn.qs('#slide');
const abtn = dFn.qsa('.abtn');
const indic = dFn.qsa('.indic li');
dFn.qsaEl(slide, 'li').forEach((ele, idx) => ele.setAttribute('data-seq', idx));

abtn.forEach(ele => dFn.addEvt(ele, 'click', goSlide));

function goSlide(){
    let isR = this.classList.contains('ab2');
    let eachOne = dFn.qsaEl(slide, 'li');
    if(isR){
        rightSlide();
    }else{
        slide.insertBefore(eachOne[eachOne.length-1], eachOne[0]);
        slide.style.left = '-100%';
        slide.style.transition = 'none';
        setTimeout(()=>{
            slide.style.left = '0';
            slide.style.transition = '.4s ease-in-out';
        },0);
    }
    chgIndic(isR);
    clearAuto();
}
function chgIndic(isR){
    let seq = dFn.qsaEl(slide, 'li')[isR? 1:0].getAttribute('data-seq');
    indic.forEach((ele, idx) => {
        if(seq == idx){
            ele.classList.add('on');
        }else{
            ele.classList.remove('on');
        }
    });
}
    

function rightSlide(){
    slide.style.left = '-100%';
    slide.style.transition = '.4s ease-in-out';
    setTimeout(()=>{
        slide.appendChild(dFn.qsaEl(slide,'li')[0]);
        slide.style.left = '0';
        slide.style.transition = 'none';
    }, 400);
}

let autoI;
let autoT;

function slideAuto(){
    autoI = setInterval(()=>{
        rightSlide();
        chgIndic(1);
        abtn[1].click();
    }, 3000);
}
slideAuto();

function clearAuto(){
    clearInterval(autoI);
    clearTimeout(autoT);
    autoT = setTimeout(slideAuto, 5000);
}
