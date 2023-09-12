// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = 
(ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window,"DOMContentLoaded", loadFn);

function loadFn(){
    let snum = 0;
    let abtn = qsa('.abtn');
    let slide = qsa('#slide li');
    let CNT_SLIDE = slide.length;

    abtn.forEach(ele => {
        addEvt(ele, 'click', goSlide);
    });

    function goSlide(){
        let isR = this.classList.contains('ab2');
        if(isR){
            snum++;
            if(snum == CNT_SLIDE) snum=0;
        }else{
            snum--;
            if(snum <0 ) snum = CNT_SLIDE-1;
        }
        slide[snum].classList.add('on');
        slide.forEach(ele=>{
            if(!ele.isSameNode(slide[snum])){
                ele.classList.remove('on');
            }
        });
    }
}