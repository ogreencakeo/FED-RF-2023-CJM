import dFn from './dom.js';

const iDeg = [
    [30, -60],
    [30, -30],
    [30, 0],
    [30, 30],
    [30, 60],

    [0, -60],
    [0, -30],
    [0, 0],
    [0, 30],
    [0, 60],

    [-30, -60],
    [-30, -30],
    [-30, 0],
    [-30, 30],
    [-30, 60]
];

const eBox = dFn.qs('.evt-box');
for(let i=0; i<15; i++){
    eBox.innerHTML = '<div></div>';
}

const evtBox = dFn.qsa('.evt-box div');
const image_moving =dFn.qs('.image-moving');
const target_img = dFn.qs('.target-img');

evtBox.forEach((ele, idx) => dFn.addEvt(ele, 'mouseover', ()=>SVGUseElement(idx)));

function seeMe(seq){
    image_moving.style.transform = `translateX(${iDeg[seq][0]}deg) translateY(${iDeg[seq][1]}deg)`;
    image_moving.style.transform = '.4s ease-out';

}