import dFn from "./dom.js";
import { startSS, setPos } from "./smoothScroll23.js";
import { gridData, gnbData, previewData, clipData, linkData } from "./data_drama.js";

startSS();

setTimeout(() => {
    window.scrollTo(0, 0);
    setPos(0);
}, 400);

dFn.addEvt(window, "mouseup", () => setPos(window.scrollY));
dFn.addEvt(window, "keyup", () => setPos(window.scrollY));

const gridBox = dFn.qsa('.grid-box');
gridBox.forEach((ele, idx) => makeGrid(ele, idx));
function makeGrid(ele, idx) {
    let hcode = '';
    gridData[idx].forEach(val => {
        hcode += `
            <li>
                <figure>
                    <img src = './images/${idx ? 'poster_img' : 'live_photo'}/${val.imgName}.jpg' alt = '${val.title}'/>
                    <figcaption>${val.title}</figcaption>
                </figure>
            </li>
        `;
    });
    ele.innerHTML = `<ul>${hcode}</ul>`;
}

const gnbList = dFn.qsa('.gnb ul li');
gnbList.forEach(ele => {
    let atxt = dFn.qsEl(ele, 'a').innerText;
    let gnb_data = gnbData[atxt];
    if (gnb_data) {
        ele.innerHTML += `
            <div class = 'smenu'>
                <aside class = 'smbx'>
                    <h2>${atxt}</h2>
                    <ol>
                        ${gnb_data.map((val) =>
            `
                                <li>${val}</li>
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
    if (dFn.qsEl(ele, '.smenu')) {
        dFn.addEvt(ele, 'mouseover', overFn);
        dFn.addEvt(ele, 'mouseout', outFn);
    }
});

function overFn() {
    let hv = dFn.qsEl(this, '.smbx').clientHeight;
    dFn.qsEl(this, '.smenu').style.height = hv + 'px';
}
function outFn() {
    dFn.qsEl(this, '.smenu').style.height = 0 + 'px';
}

const preBox = dFn.qsa('.preview-box div');
let preNewData = previewData.sort((x, y) => {
    let a = Number(x.idx);
    let b = Number(y.idx);

    return (a == b ? 0 : a > b ? -1 : 1);
});

preBox.forEach((ele, idx) => {
    ele.innerHTML += `
        <div>
            <h2>${preNewData[idx].idx}</h2>
            <p>${preNewData[idx].story}</p>
        </div>
    `;
});

const clipBox = dFn.qs('.clip-box');
let clipCode = '';
clipData.forEach(val => {
    clipCode += `
    <li>
        <div class="clip-mv-box">
            <img src="./images/clip_img/${val.idx}.jpg" alt="${val.subtit}">
        </div>
        <h4>${val.subtit}</h4>
        <h3>${val.title}</h3>
    </li>
    `;
});
clipBox.innerHTML = `<ul>${clipCode}</ul>`;


const btnBox = dFn.qsa('.btn-box button');
btnBox.forEach(ele => {
    dFn.addEvt(ele, 'click', moveClip);
});

const clipBox_ul = dFn.qs('.clip-box ul');
const list_length = dFn.qsa('.clip-box ul li').length;
const limit_lengh = 4;
const move_length = list_length - limit_lengh;
const block_num = 25.5;
let mvNum = 0;

function moveClip(){
    let isR = this.classList.contains('fa-chevron-right');
    // console.log('isR:', isR);
    if(isR){
        mvNum++;
        if(mvNum > move_length){
            mvNum = move_length;
            btnBox[1].style.display = 'none';
        }else{
            btnBox[0].style.display = 'block'
        }
    }else{
        mvNum--;
        if(mvNum < 0){
            mvNum = 0;
            btnBox[0].style.display = 'none';
        }else{
            btnBox[1].style.display = 'block'
        }
    }
    clipBox_ul.style.left = -(block_num * mvNum) + '%';
}

const brandBox = dFn.qs('#brand');
const corpBox = dFn.qs('#corp');

brandBox.innerHTML = '';
corpBox.innerHTML = '';

linkData.brand.map(ele => {
    brandBox.innerHTML += `<option value = "${ele}">${ele}</option>`;
}).join("");

let corpData = Object.keys(linkData.corp);

corpData.forEach(ele => {
    corpBox.innerHTML += `
        <optgroup label = "${ele}">
            ${linkData.corp[ele].map((v) => 
                `<option value="${v}">${v}</option>`
            ).join("")}
        </optgroup>
    `;
})