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
}
