// 보그 PJ 메인 페이지 js - main.js
import dFn from './dom.js';

// [ 1. 메인 페이지 등장 액션 클래스 넣기 ]
// 대상 : .main-area section
const hideBox = $('.main-area section');
// const hideBox = dFn.qsa('.main-area section');

// 첫번째 박스 빼고 숨김 클래스 넣기
// 제이쿼리 사용코드 : each((idx, ele)=>{코드})
hideBox.each((idx, ele)=>{
    if(idx != 0) $(ele).addClass('scAct');
});

// JS용 오리지널 코드
// hideBox.forEach((ele, idx) => {
//     if(idx != 0){
//         ele.classList.add('scAct');
//     }
// });

///////////////////////////////////////////////////////
// 제이쿼리 라이브러리 사용하여 구현해보자

// 1. 스크롤 등장 액션 구현하기
// 대상 : window
// 이벤트 : scroll
// 기준값 사용 : getBoundingClientRect() -> dFn.getBCR()
// console.log(dFn);
// 등장액션 대상 : .main-area section
// 기준값 : 윈도우 높이값의 3/2 지점
let winH = $(window).height()/3 * 2;
console.log('윈도우 높이값 :', winH);

// 스크롤 메뉴 적용대상 : .top-area
const topArea = $('#top-area');

$(window).scroll(()=>{
    // 세로방향 스크롤 위치값
    let scTop = $(window).scrollTop();
    console.log('스크롤~~~~!', scTop);

    // 1. 스크롤 위치값이 100을 초과하면 슬림 상단 클래스 넣기
    if(scTop > 100) topArea.addClass('on');
    else topArea.removeClass('on');

    hideBox.each((idx, ele) => {
        if(idx!=0){
            let val = dFn.getBCR(ele);
            // 2. console.log(`대상요소 getBCR값[${idx}] :`, dFn.getBCR(ele));
            if(val < winH) $(ele).addClass('on');
        }
    });
});

