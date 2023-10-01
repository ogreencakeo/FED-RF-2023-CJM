const domFn = {
    qs : (x) => document.querySelector(x),
    qsEl : (el,x) => el.querySelector(x),
    qsa : (x) => document.querySelectorAll(x),
    qsaEl : (el,x) => el.querySelectorAll(x),
    
    addEvt : (ele,evt,fn) => ele.addEventListener(evt,fn),

    getBCR : (ele) => ele.getBoundingClientRect().top,
}; 

const slidePg = domFn.qs('.slidePg');
let hcode = '';

for(let i=1; i<8; i++){
    hcode += `
        <li>
            <img src = './images/dance/${i}.jpg' alt = 'dance'/>
        </li>
    `;
}

slidePg.innerHTML = `<ul>${hcode}</ul>`;

const tpg = domFn.qs('.tpg');
const target = domFn.qs('.slidePg > ul');

domFn.addEvt(window, 'scroll', showSlide);

function showSlide(){
    let bTop = domFn.getBCR(tpg);
    if(bTop>0){
        target.style.left = '0px';
    }else if(bTop<0 && bTop>-3000){
        target.style.left = bTop + 'px';
    }else{
        target.style.left = '-3000px';
    }
}