import dfn from './dom.js';
import tData from './data/com_module.js';
import { setPos } from './smoothScroll23.js';

const comArea = dfn.qsa('.common-area');

comArea[0].innerHTML = tData.topArea;
comArea[1].innerHTML = tData.footerArea;

$(()=>{
    $('a').click(e=>e.preventDefault());

    const logo = $('.logo a');
    const gnb = $('.gnb a');

    logo.click(()=>location.href = 'index.html');

    gnb.click(e=>
        location.href = 'category.html?cat=' +
        $(e.target).text().toLowerCase()    
    );
})

const hideBox = $('.main-area section');

hideBox.each((idx, ele)=>{
    if(idx!=0) $(ele).addClass('scAct')
})

let winH = $(window).height()/3*2;

const topArea = $('#top-area');
const tbtn = $('.tbtn');

$(window).scroll(()=>{
    let scTop = $(window).scrollTop();

    if(scTop>100) topArea.addClass('on');
    else topArea.removeClass('on');

    if(scTop>300) tbtn.addClass('on');
    else tbtn.removeClass('on');

    hideBox.each((idx, ele)=>{
        if(idx!=0){
            let val = dfn.getBCR(ele);
            if(val<winH) $(ele).addClass('on')
        }
    })
})

tbtn.click((e) => {
    e.preventDefault();
    setPos(0);
})

let pm = location.href;
setValue();
function setValue(){
    try{
        if(pm.indexOf('?')== -1 || pm.indexOf('=')==-1){
            throw '잘못된 접근입니다.';
        }
    }catch(err){
        alert(err);
        location.href = 'index.html';
    }
    pm = pm.split('?')[1].split('=');
    pm = decodeURIComponent(pm);
}