import dom from './dom.js';
import dFn from './dom.js'

const atxt = [
    "Let's explore",
    "Let's meet",
    "Let's attend",
    "Let's dance"
];

const slidePg = dFn.qs('.slidePg');
let hcode = '';

for(let i=1; i<8; i++){
    hcode += `
        <li>
            <img src = './images/dance/${i}.jpg' alt='dance'/>
        </li>
    `;
}

slidePg.innerHTML = `<ul>${hcode}</ul>`;

const tpg = dFn.qs('.tpg');
const slide_ul = dFn.qsEl(slidePg,'ul');

dFn.addEvt(window, 'scroll', scrollMove);

function scrollMove(){
    let bTop = dFn.getBCR(tpg);
    if(bTop > 0){
        slide_ul.style.left = '0px';
    }else if(bTop<=0 && bTop>=-3000){
        slide_ul.style.left = bTop + 'px';
    }else{
        slide_ul.style.left = '-3000px';
    }
}



let gnbCode = '';
const gnb_ul = dFn.qs('.gnb ul');

for(let x of atxt){
    gnbCode += `
        <li>
            <a href = "#">${x}</a>
        </li>
    `;
}

gnb_ul.innerHTML = `<ul>${gnbCode}</ul>`;



const gnbList = dFn.qsaEl(gnb_ul, 'li');
const mbg = dFn.qs('.mbg');

gnbList.forEach((ele)=>{
    dFn.addEvt(ele, 'mouseover', overFn);
    dFn.addEvt(ele, 'mouseout', outFn);
})

function overFn(){
    let posL = this.offsetLeft;
    mbg.style.opacity = 1;
    mbg.style.left = posL + 'px';
}

function outFn(){
    mbg.style.opacity = 0;

}