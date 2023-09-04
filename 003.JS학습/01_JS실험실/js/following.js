// 따라다니는 원 JS - following.js

// 1. 이벤트 등록하기
window.addEventListener('DOMContentLoaded', loadFn);

// 2. 함수 만들기
// DOM선택함수
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

// 2-1. 로드함수
function loadFn(){
    // 함수 호출확인
    console.log('로딩완료');

    // [1] html 코드 넣기
    // 1. 대상선정
    // 변경대상 : .cont-box
    const cont_box = qs('.cont-box');
    console.log('대상(cont_box) :', cont_box);

    // 2. html 태그 만들기
    // 50개 이미지 만들기
    let hcode = '';

    for(let i=1; i<=50; i++){
        hcode += `
        <div>
            <img src="../images/dress/${i}.jpg" alt="dress">
            <a href="#" class="link">이것은 너의 드레스야!</a>
        </div>
        `;
    }
    console.log('코드 :', hcode);
    
    // 3. 대상에 html 넣기
    cont_box.innerHTML = hcode;

    // [2] 따라다니는 원 셋팅하기
    // 1. 대상선정 : 
    // (1) 움직일 대상 : .mover
    const mover = qs('.mover');
    // (2) 이벤트 대상 : document.body
    const myBody = document.body;

    /*
    */
    // 무버 크기의 절반계산
    let gap = mover.clientWidth / 2;
    // 선택요소의 크기 JS
    // width는 clientWidth, height는 clientHeight
    console.log('무버 width :', gap);


    console.log('요소 mover :', mover, ',myBody :', myBody);

    // 2. 이벤트 대상에 마우스 무드 이벤트가 적용될때 
    // 무버가 따라다니게 기능 구현
    myBody.onmousemove = e => {     // e - 이벤트 전달변수
        // 1. 위치값 가져오기
        let posX = e.pageX - gap;
        let posY = e.pageY - gap;

        // 2. 무버에 위치값 적용하기
        mover.style.top = posY + 'px';
        mover.style.left = posX + 'px';

        // console.log('e.pageX :', e.pageX, '/ e.pageY :', e.pageY);
        // console.log('e.screenX :', e.screenX, '/ e.screenY :', e.screenY);
        // console.log('e.offsetX :', e.offsetX, '/ e.offsetY :', e.offsetY);
        // console.log('e.clientX :', e.clientX, '/ e.clientY :', e.clientY);
        // console.log('------------------------------');
    };
}
