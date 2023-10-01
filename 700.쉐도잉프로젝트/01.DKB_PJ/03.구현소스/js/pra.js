import dFn from "./dom.js";
import { startSS, setPos } from "./smoothScroll23.js";
import { gridData, gnbData, previewData, clipData } from "./data_drama.js";

startSS();

setTimeout(() => {
    window.scrollTo(0, 0);
    setPos(0);
}, 400);

dFn.addEvt(window, "mouseup", () => setPos(window.scrollY));
dFn.addEvt(window, "keyup", () => setPos(window.scrollY));

const gridBx = dFn.qsa('.grid-box');
gridBx.forEach((ele, idx) => makeGrid(ele, idx));

function makeGrid(ele, idx){
    let hcode ='';
    gridData[idx].forEach(val => {
        hcode += `
            <li>
                <figure>
                    <img src = 'images/${idx? 'poster_img' : 'live_photo'}/${val.imgName}.jpg' alt='${val.title}'/>
                    <figcaption>${val.title}</figcaption>
                </figure>
            </li>
        `;
    });
    ele.innerHTML = `<ul>${hcode}</ul>`;
}

const gnbList = dFn.qsa('.gnb ul li');
const gnb = dFn.qsa('.gnb ul li');

gnbList.forEach(ele => {
    let atxt = dFn.qsEl(ele, 'a').innerText;
    let gnb_data = gnbData[atxt];
    if(gnb_data){
        ele.innerHTML += `
            <div class = 'smenu'>
                <aside class='smbx'>
                    <h3>${atxt}</h3>
                    <ol>
                        ${gnb_data.map(val => 
                                `<li>${val}</li>`
                        ).join("")}
                    </ol>
                </aside>
            </div>
        `;
    }
});

gnb.forEach(ele => {
    if(dFn.qsEl(ele, '.smenu')){
        dFn.addEvt(ele, 'mouseover', overFn);
        dFn.addEvt(ele, 'mouseout', outFn);
    }
});

function overFn(){
    let hv = dFn.qsEl(this, '.smbx').clientHeight;
    dFn.qsEl(this, '.smenu').style.height = hv + 'px';
}

function outFn(){
    dFn.qsEl(this, '.smenu').style.height = 0 + 'px';
}

const preBx = dFn.qsa('.preview-box div');
let preNewData = previewData.sort((x, y) => {
    let a = Number(x.idx);
    let b = Number(y.idx);

    return (a==b? 0:a>b? -1:1);
});

preBx.forEach((ele, idx) => {
    let pre_data = preNewData[idx];
    ele.innerHTML += `
        <div>
            <h3>${pre_data.idx}</h3>
            <p>${pre_data.story}</p>
        </div>
    `;
});
const clipBx = dFn.qs('.clip-box');
let clipCode = '';
clipData.forEach(ele => {
    clipCode += `
        <li>
            <div class='clip-mv-box'>
                <img src = './images/clip_img/${ele.idx}.jpg' alt = '${ele.title}'/>
            </div>
            <h4>${ele.subtit}</h4>
            <h3>${ele.title}</h3>
        </li>
    `;
});

clipBx.innerHTML = `<ul>${clipCode}</ul>`;

const btnBx = dFn.qsa('.btn-box button');
const clipList = dFn.qs('.clip-box ul');
const LIST_LENGTH = dFn.qsaEl(clipList, 'li').length;
const LIMT_LIST = 4;
const LIMIT_MOVE = LIST_LENGTH-LIMT_LIST;
const BLOCK_NUM = 25.5;
let mvNum = 0;

btnBx.forEach(ele => dFn.addEvt(ele, 'click', moveClip));

function moveClip(){
    let isR = this.classList.contains('fa-chevron-right');
    if(isR){
        mvNum++;
        if(mvNum>LIMIT_MOVE){
            mvNum = LIMIT_MOVE;
            btnBx[1].style.display = 'none';
        }else{
            btnBx[0].style.display = 'block';
        }
    }else{
        mvNum--;
        if(mvNum<0){
            mvNum = 0;
            btnBx[0].style.display = 'none';
        }else{
            btnBx[1].style.display = 'block';
        }
    }
    clipList.style.left = -(BLOCK_NUM * mvNum) + '%';
}