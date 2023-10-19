// JS실험실: 10. 드래그배너 JS - drag_banner.js

// DOM 메서드
import dFn from './dom.js';

// 슬라이드 대상요소 : .banbx
const banBox = dFn.qsa('.banbx');
console.log('banBox :', banBox);

// 슬라이드만큼 모두 호출하기!
banBox.forEach(ele => {
    slideFn(ele);
    // 실제 DOM요소를 보낸다.
});
// 슬라이드 함수 호출하기
// slideFn('.banbx');

// 함수명 : slideFn
function slideFn(selEl) {   // selEl : 선택 슬라이드 부모 요소
    console.log('슬라이드 함수 호출확인!');

    // 0. 슬라이드 공통변수
    let clickSts = 0;
    const TIME_SLIDE = 400;

    // 1. 대상선정
    // 1-1. 슬라이드 부모요소 : 전달된 선택요소 -> selEl
    // const sldWrap = dFn.qs(selEl);
    const sldWrap = selEl; // DOM요소를 직접 받음!!
    // 1-2. 변경대상 : 선택요소 하위 .slide
    const slide = dFn.qsEl(sldWrap, '.slide');
    // 1-3. 이벤트 대상 : 선택요소 하위 .abtn
    const abtn = dFn.qsaEl(sldWrap, '.abtn');
    // 1-4. 블릿박스 대상 : 선택요소 하위 .indic li
    let indic = dFn.qsEl(sldWrap, '.indic');

    console.log("대상 abtn :", abtn, ", slide :", slide, ', indic :', indic);

    // 1.4. 슬라이드 개수와 동일한 블릿 동적 생성
    // 대상 : .indic -> indic변수
    // 슬라이드 개수 
    let sldCnt = dFn.qsaEl(slide, 'li').length;
    // for문으로 블릿 li 생성 (0번만 클래스 on 넣기)
    for(let i=0; i<sldCnt; i++){
        indic.innerHTML += `
            <li ${i==0? 'class="on"' : ''}>
                <img src="images/dot1.png" alt="흰색">
                <img src="images/dot2.png" alt="회색">
            </li>
        `;
    }

    // 블릿 li 재선택할당하기
    indic = dFn.qsaEl(sldWrap, '.indic li');

    // 1.5.
    slide.querySelectorAll('li').forEach(
        (ele, idx) => ele.setAttribute('data-seq', idx)
    );

    // 2
    abtn.forEach((ele) => dFn.addEvt(ele, "click", goSlide));

    // 3
    function goSlide() {

        // a요소 기본이동 막기
        event.preventDefault();

        if(clickSts) return; 
        clickSts = 1; 
        setTimeout(()=>clickSts = 0,TIME_SLIDE); 

        console.log("this :", this, ' / contains(ab2) :', this.classList.contains("ab2"));

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
    
    // slideAuto();

    function clearAuto(){
        console.log('멈춤!');
        clearInterval(autoI);
        clearTimeout(autoT);

        autoT = setTimeout(slideAuto, 5000);
    }
} 

////////////////////////////////////////////////////////////////////////////////////////
// 1. 드래그 적용 이벤트 설정하기
const dtg = dFn.qsa('.dtg');
dtg.forEach(ele => goDrag(ele));

function goDrag(ele){   

    let drag = false;
    let fx, fy;
    // 처음 위치는 슬라이드 최초 left위치값으로 읽어옴
    let lx = dFn.qs('.slide').offsetLeft, ly = 0;
    let mvx, mvy;
    let rx, ry;


    const dTrue = () => drag = true;
    const dFalse = () => drag = false;

    const dMove = (e) => {
        console.log('드래그 상태:', drag);
        if(drag){
            mvx = e.pageX || e.touches[0].screenX;
            // mvy = e.pageY || e.touches[0].screenY;

            rx = mvx - fx;
            // ry = mvy - fy;

            ele.style.left = (rx + lx) + 'px';
            // ele.style.top = (ry + ly) + 'px';

            dtg.forEach(ele=> ele.style.zIndex=0);
            ele.style.zIndex = 1;

            console.log(`fx, fy : ${fx}, ${fy}`);
            console.log(`mvx, mvy : ${mvx}, ${mvy}`);
            console.log(`rx, ry : ${rx}, ${ry}`);
            console.log(`lx, ly : ${lx}, ${ly}`);
        }

        ele.style.cursor = drag? 'grabbing' : 'grab';
    };

    const firstPoint = (e) => {
        fx = e.pageX || event.touches[0].screenX;
        // fy = e.pageY || event.touches[0].screenY;

    };

    const lastPoint = () => {
        lx += rx;
        // ly += ry;
    };

    dFn.addEvt(ele, 'mousedown', (e)=>{
        dTrue();
        firstPoint(e);
    });

    dFn.addEvt(ele, 'touchstart', (e)=>{
        dTrue();
        firstPoint(e);
    });

    dFn.addEvt(ele, 'mouseup', ()=>{
        dFalse();
        lastPoint();
    });

    dFn.addEvt(ele, 'touchend', ()=>{
        dFalse();
        lastPoint();
    });

    dFn.addEvt(ele, 'mousemove', dMove);
    dFn.addEvt(ele, 'touchmove', dMove);
    dFn.addEvt(ele, 'mouseleave', dFalse);
}

///////////////////////////////////////////////////////////////////////
// 함수명 : goWhere
// 기능 : 드래그시 왼쪽 / 오른쪽 이동 판별
// 호출 : 드래그시 mouseup / touchend 이벤트에서 호출
function goWhere(target){
    // target - 드래그 대상(슬라이드 요소)
    // 1. 현재 드래그 대상  left 위치값
    let tgLeft = target.offsetLeft;
    console.log('슬라이드 LEFT :', tgLeft);
}   // goWhere 함수