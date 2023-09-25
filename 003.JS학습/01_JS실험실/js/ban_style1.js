// DOM 모듈 함수
import dFn from './dom.js';

dFn.addEvt()

let clickSts = 0;
const TIME_SLIDE = 400;

// 함수명 : slideFn
function slideFn(selEl) {   // selEl : 선택 슬라이드 요소
    // 1. 변경대상 : 전달된 선택요소 -> selEl
    const slide = dFn.qs(selEl);
    // 2. 이벤트 대상 : 선택슬라이드 하위 .abtn
    const abtn = dFn.qsaEl(slide, '.abtn');
    // 3. 블릿박스 대상
    const indic = dFn.qsaEl(slide, '.indic li');

    console.log("대상 abtn :", abtn, ", slide :", slide, ', indic :', indic);

    slide.querySelectorAll('li').forEach(
        (ele, idx) => ele.setAttribute('data-seq', idx)
    );

    abtn.forEach((ele) => addEvt(ele, "click", goSlide));

    function goSlide() {
        if(clickSts) return; 
        clickSts = 1; 
        setTimeout(()=>clickSts = 0,TIME_SLIDE); 

        console.log("나야나!", this, this.classList.contains("ab2"));

        let isRight =  this.classList.contains('ab2');
        let eachOne = slide.querySelectorAll('li');

        if(isRight){  
            rightSlide();
        }else{  
            slide.insertBefore(eachOne[eachOne.length-1], eachOne[0]);
            // left값 -330% 바꾸기 : 들어올 위치 준비
            slide.style.left = '-330%';
            slide.style.transition = 'none';
        
            setTimeout(()=> {
                // left값 -220%
                slide.style.left = '-220%';
                slide.style.transition = TIME_SLIDE+'ms ease-in-out'
            }, 0);
        }

        chgIndic(isRight); 
        clearAuto();
    }

    function chgIndic(isRight){
        let nowSeq = slide.querySelectorAll('li')[isRight? 1:0].getAttribute('data-seq');

        indic.forEach((ele, idx)=>{
            if(idx==nowSeq) ele.classList.add('on');
            else ele.classList.remove('on');
        });
    }

    function rightSlide(){
        // 대상 이동하기
        slide.style.left = '-330%';
        slide.style.transition = TIME_SLIDE+'ms ease-in-out';

        setTimeout(() => {
            slide.appendChild(slide.querySelectorAll('li')[0]);
            slide.style.left = '-220%';
            slide.style.transition = 'none';
        }, TIME_SLIDE);
    }

    let autoI;
    let autoT;

    function slideAuto(){
        autoI = setInterval(() => {
            rightSlide();
            chgIndic(1);

            abtn[1].click();
        }, 3000);
    }
    
    slideAuto();

    function clearAuto(){
        console.log('멈춤!');
        clearInterval(autoI);
        clearTimeout(autoT);

        autoT = setTimeout(slideAuto, 5000);
    }
} 
