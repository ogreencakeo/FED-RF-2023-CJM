let pg_num = 0;
let sts_wheel = 0;
let ele_pg;
let total_pg;

const domFn = {
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; 

domFn.addEvt(window, 'load', loadFn);
domFn.addEvt(window, 'wheel', wheelFn);

setTimeout(()=>{window.scrollTo(0, 0)},500);

function loadFn(){
    ele_pg = domFn.qsa('.page');
    total_pg = ele_pg.length;
}

function wheelFn(e){
    if(sts_wheel) return;
    sts_wheel = 1;
    setTimeout(()=>{sts_wheel=0}, 500);
    let delta = e.wheelDelta;
    
    if(delta<0) pg_num++;
    else pg_num--;

    if(pg_num<0) pg_num = 0;
    if(pg_num==total_pg) pg_num = total_pg-1;

    window.scrollTo(0, window.innerHeight*pg_num);
    chgMenu();
}

const gnbList = domFn.qsa('.gnb li');
const indicList = domFn.qsa('.indic li');

const chgMenuList = [gnbList, indicList];

function chgMenu(){
    const comFn = (target) => {
        target.forEach((ele, idx)=> {
            if(idx == pg_num) ele.classList.add('on');
            ele.classList.remove('on');
        });
    };

    chgMenuList.forEach(val => comFn(val));
}

for(let x of chgMenuList){
    x.forEach((ele, idx) => {
        domFn.addEvt(ele, 'click', ()=>{
            pg_num = idx;
            chgMenu();
        })
    });
}