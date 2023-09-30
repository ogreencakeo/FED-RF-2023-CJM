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

const grid_box = dFn.qsa('.grid-box');

grid_box.forEach((ele, idx) => makeGrid(ele, idx));

function makeGrid(ele, idx){
    let hcode = '<ul>';
    gridData[idx].map((val) => {
        hcode += `
            <li>
                <figure>
                    <img src = 'images/${idx? 'poster_img' :'live_photo'}/${val.imgName}.jpg' alt='${val.title}'/>
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
            <div class='smenu'>
                <aside class='smbx'>
                <ol>
                    <h3>${atxt}</h3>
                    ${gnb_data.map((val) => 
                        `<li>
                            <a href="#">${val}</a>
                        </li>`
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

let preNewData = previewData.sort((x,y) => {
    let a = Number(x.idx);
    let b = Number(y.idx);

    return (a==b? 0:a>b? -1:1);
});

const preBx = dFn.qsa('.preview-box div');

preBx.forEach((ele,idx) => {
    let preview = preNewData[idx];
    ele.innerHTML += `
        <div>
            <h3>${preview.idx}</h3>
            <p>${preview.story}</p>
        </div>
    `;
})