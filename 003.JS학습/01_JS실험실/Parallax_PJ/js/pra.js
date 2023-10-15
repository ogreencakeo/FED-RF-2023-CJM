
import domFn from "./dom";

setTimeout(()=>{
    window.scrollTo(0, 0);
}, 500);

const txtBox = domFn.qsa('.txt');
const icon = domFn.qsa('.icon');

domFn.addEvt(window, 'scroll', scrollFn);

function scrollFn(){
    txtBox.forEach(ele => {
        moveEl(domFn.getBCR(ele), ele, setH2);
    });
    icon.forEach(ele => {
        moveEl(domFn.getBCR(ele), ele, setH1);
    });
}

const winH = window.innerHeight;
const setH1 = 100, setH2 = 200;

function moveEl(elPos, ele, setH){
    if(elPos < winH && elPos > -200 ){
        let x = setH 
    }
}