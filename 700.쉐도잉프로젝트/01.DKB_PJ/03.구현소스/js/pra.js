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

let desc_box = document.querySelectorAll(".desc-box");

desc_box.forEach((ele) => {

    ele.onwheel = (e) => e.stopPropagation();
});

const gird_box = dFn.qsa('.grid-box');
gird_box.forEach((ele, idx) => makeGrid(ele, idx));

function makeGrid(ele, idx){
    let hcode = '<ul>';
    gridData[idx].forEach((val) => {
        hcode += `
            <li>
                <figure>
                    <img src = 'images/${idx? "poster_img" : "live_photo"}/${val.imgName}.jpg' alt=${val.imgName}/>
                    <figcaption>${val.title}</figcaption>
                </figure>
            </li>
        `;
    });
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
                    <ol>
                        ${gnb_data.map((val)=>
                            `
                                <li>
                                    <a href="#">${val}</a>
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

const mvBx = dFn.qs('.intro-mv-img');

dFn.addEvt(mvBx, 'click', showMv);

function showMv(){
    
}