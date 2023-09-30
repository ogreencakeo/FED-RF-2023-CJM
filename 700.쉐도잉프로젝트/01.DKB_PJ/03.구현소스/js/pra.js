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

const gridBox = dFn.qsa('.grid-box');
gridBox.forEach((ele, idx) => makeGrid(ele, idx));

function makeGrid(ele, idx){
    let hcode = '';
    let grid_data = gridData[idx];
    console.log('grid_data :', grid_data);
    grid_data.map((val) => 
        hcode +=  `
            <li>
                <figure>
                    <img src = 'images/${idx? 'poster_img':'live_photo'}/${val.imgName}.jpg' alt = '${val.title}'/>
                    <figcaption>${val.title}</figcaption>
                </figure>
            </li>
        `
    );
    ele.innerHTML = `<ul>${hcode}</ul>`;
}

const gnbList = dFn.qsa('.gnb ul li');
gnbList.forEach(ele => {
    let atxt = dFn.qsEl(ele, 'a').innerText;
    let gnb_data = gnbData[atxt];

    if(gnb_data){
        ele.innerHTML += `
            <div class='smenu'>
                <aside class='smbx'>
                    <h2>${atxt}</h2>
                    <ol>
                        ${gnb_data.map((val)=> 
                            `
                                <li>
                                    <a href = '#'>${val}</a>
                                </li>
                            
                            `
                            ).join("")}
                    </ol>
                </aside>
            </div>
        `;
    }
});

const gnb = dFn.qsa('.gnb ul li');

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

const preBox = dFn.qsa('.preview-box div');
let preNewData = previewData.sort((x, y)=>{
    let a = Number(x.idx);
    let b = Number(y.idx);

    return (a==b? 0:a>b? -1:1);
});

preBox.forEach((ele, idx) => {
    let pre_data = preNewData[idx];
    ele.innerHTML += `
        <div>
            <h3>${pre_data.idx}</h3>
            <p>${pre_data.story}</p>
        </div>
    `;
});

const clipBox = dFn.qs('.clip-box');
let hcode = '';
clipData.forEach((ele)=>{
    hcode += `
    <li>
        <div class = 'clip-mv-box'>
            <img src = './images/clip_img/${ele.idx}.jpg' alt='${ele.title}'/>
        </div>
        <h4>${ele.subtit}</h4>
        <h3>${ele.title}</h3>
    </li>
    `;
});
clipBox.innerHTML = `<ul>${hcode}</ul>`;

const btnBox = dFn.qsa('.btn-box button');

const clipList =dFn.qs('.clip-box ul');

const  CNT_LIST = dFn.qsEl(clipList, 'li').length;
const LIMIT_LIST = 4;
const LIMIT_MOVE = CNT_LIST- LIMIT_LIST;
const BLOCK_NUM = 25.5;
let mvNum = 0;

btnBox.forEach(ele => dFn.addEvt(ele, 'click', moveClip));

function moveClip(){
    let isR = this.classList.contains('fa-chevron-right');

    if(isR){
        mvNum++;
        if(mvNum > LIMIT_MOVE){
            mvNum = LIMIT_MOVE;
            btnBox[1].style.display = 'none';
        }else{
            btnBox[0].style.display = 'block';
        }
    }else{
        mvNum--;
        if(mvNum<0){
            mvNum = 0;
            btnBox[0].style.display = 'none';
        }else{
            btnBox[1].style.display = 'block';
        }
    }
    clipList.style.left = -(BLOCK_NUM * mvNum) + '%';
}