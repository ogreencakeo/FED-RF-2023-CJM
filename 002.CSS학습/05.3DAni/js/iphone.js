/* 움직이는 폰 + 무한글자이동 CSS - iphone.js */

// DOM 메서드
import dFn from './dom.js';

/************************************* 
    [ 아이폰 영역오버시 회전기능 ]
    1. 화면에 10등분된 투명 영역을 구현
    2. 이 영역이 이벤트 대상이 됨
    3. 오버시 변경대상인 아이폰에 회전값 변경
    4. 트랜지션으로 애니메이션 설정적용!
    5. 애니메이션 후에 이벤트박스를 보이게함
    (최초 width:0 -> width:100vw)
*************************************/

// 0. 데이터 셋팅 : x, y축 회전 각도를 배열에 셋팅
const iDeg = [
    // 상단영역
    [25, -60, "Bart_Simpson.png"], 
    [25, -30, "simpson.png"], 
    [25, 0, "Lisa_Simpson.png"], 
    [25, 30, "Maggie_Simpson.png"], 
    [25, 60, "Marge_Simpson.png"], 
    // 하단영역
    [-25, -60, "capma.png"], 
    [-25, -30, "elsa.png"], 
    [-25, 0, "jupiter.png"], 
    [-25, 30, "seoulCity.jpg"], 
    [-25, 60, "superman.png"], 
];

// 1. 대상선정
// 1-1. 이벤트 대상 : .evt-box div
const evtBx = dFn.qsa('.evt-box div');
// 1-2. 변경대상 : .iphone
const iphone = dFn.qs('.iphone');
console.log('evtBx :', evtBx, 'iphone :', iphone);
// 1-3. 스크린 : #screen
const screen = dFn.qs('#screen');


// 2. 이벤트 설정 : 이벤트 종류 - mouseenter(경계선 안에 들어옴)
evtBx.forEach( (ele, idx) => dFn.addEvt(ele, 'mouseenter', ()=>seeMe(idx)) );

// 3. 함수 만들기
function seeMe(seq){  // seq - 순번 받기
    // console.log('나를 봐!', event.currentTarget, seq);

    // 1. 변경 적용하기 : 대상 - .iphone
    iphone.style.transform = `rotateX(${iDeg[seq][0]}deg) rotateY(${iDeg[seq][1]}deg)`;
    // 트랜지션 변경하기
    iphone.style.transition = '.4s ease-out';

    // 2. 변경 적용하기 : 앞면 이미지

} 
