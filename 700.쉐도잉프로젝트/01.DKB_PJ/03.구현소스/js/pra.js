import dFn from "./dom.js";
import { startSS, setPos } from "./smoothScroll23.js";
import { gridData, gnbData, previewData } from "./data_drama.js";

startSS();

setTimeout(() => {
    window.scrollTo(0, 0);
    setPos(0);
}, 400);

dFn.addEvt(window, "mouseup", () => setPos(window.scrollY));
dFn.addEvt(window, "keyup", () => setPos(window.scrollY));

startSS();

let desc_box = document.querySelectorAll(".desc-box");

desc_box.forEach((ele) => {
    ele.onwheel = (e) => e.stopPropagation();
});

const grid_box = dFn.qsa('.grid-box');
grid_box.forEach((ele,idx) => {
    makeGrid(ele, idx);
});

function makeGrid(ele, idx){
    let hcode = '<ul>';
    gridData[idx].forEach(val => {
        hcode += `
            <li>
                <figure>
                <img src="images/${idx ? "poster_img" : "live_photo"}/${val.imgName}.jpg" alt="${val.title}">
                    <figcaption>${val.title}</figcaption>
                </figure>
            </li>
        `;
        hcode += '</ul>'
    });
    ele.innerHTML = hcode;
}

const gnbList = dFn.qsa('.gnb li');

gnbList.forEach(ele => {
    let atxt = dFn.qsEl(ele, 'a').innerText;
    let gData = gnbData[atxt];
    if(gData){
        ele.innerHTML = `
            <div class = 'smenu'>
                <aside class = 'smbx'>
                    <h2>${atxt}</h2>
                    <ol>
                        ${gData
                            .map(
                                (val) => `
                            <li>
                                <a href="#">${val}</a>
                            </li>
                        `
                            )
                            .join("")}
                    </ol>
                </aside>
            </div>
        `;
    }
});

const gnb = dFn.qsa('.gnb li');
gnb.forEach(ele => {
    if(dFn.qsEl(ele, '.smenu'))
        dFn.addEvt(ele, 'mouseover', overFn);
        dFn.addEvt(ele, 'mouseout', outFn);
});

function overFn(){
    let hv = dFn.qsEl(this, '.smbx').clientHeight;
    dFn.qsEl(this, '.smenu').style.height = hv + 'px';
}

function outFn(){
    dFn.qsEl(this, '.smenu').style.height = '0';
}

