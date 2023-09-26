import dFn from './dom.js';
import { startSS, setPos } from './smoothScroll23.js';
import { gridData, gnbData, previewData } from "./data_drama.js";

startSS();

setTimeout(()=>{
    window.scrollTo(0,0);
    setPos(0);
},
400);

dFn.addEvt(window, 'mouseup', ()=> setPos(window.scrollY));
dFn.addEvt(window, 'keyup', ()=> setPos(window.scrollY));

let desc_box = document.querySelectorAll('.desc-box');

desc_box.forEach((ele)=>{
    ele.onwheel = (e) => e.stopPropagation();
});

//////////////////////////////

const grid_box = dFn.qsa('.grid-box');

grid_box.forEach((ele, idx) => {
    makeGrid(ele, idx)
});

function makeGrid(ele, idx){
    let hcode = '<ul>';
    gridData[idx].forEach(val => 
        hcode += `
            <li>
                <figure>
                <img src="./images/poster_img/poster1.jpg" alt="">
                    <img src = './images/${idx? 'poster_img':'live_photo'}/${val.imgName}.jpg' alt='${val.title}'>
                    <figcaption>${val.title}</figcaption>
                </figure>
            </li>
            
        `
    );

    hcode += '</ul>';

    ele.innerHTML = hcode;
}

const gnbList = dFn.qsa('.gnb ul li');

gnbList.forEach(ele => {
    let atxt = dFn.qsEl(ele, 'a').innerText;
    let gnb_data = gnbData[atxt];
    if(gnb_data){
        ele.innerHTML += `
            <div class = 'smenu'>
                <aside class = 'smbx'>
                    <h2>${atxt}</h2>
                    <ol>
                        ${gnb_data.map(val => 
                            `
                                <li>
                                    <a href = "#">${val}</a>
                                </li>
                            `
                        ).join('')}
                    </ol>
                </aside>
            </div>
        `;
    }
});

const gnb = dFn.qsa('.gnb ul li');

gnb.forEach((ele) => 
    {
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
    dFn.qsEl(this,'.smenu').style.height = '0';
}

let preview_data = previewData.sort((x, y) => {
    let a = Number(x.idx); 
    let b = Number(y.idx); 

    return a==b ? 0 : a>b? -1:1;
});

console.log('preNewData :', preview_data);
const preBox = dFn.qsa('.preview-box div');

preBox.forEach((ele, idx) => {
    ele.innerHTML = `
        <div>
            <h3>${preview_data[idx].title}</h3>
            <h3>${preview_data[idx].story}</h3>

        </div>
    `;

});