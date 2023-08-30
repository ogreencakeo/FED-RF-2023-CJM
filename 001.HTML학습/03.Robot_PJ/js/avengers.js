// 어벤저스 JS - avengers.js

// 초기 데이터 셋팅하기
// 데이터 : 어벤져스 데이터 - data.js > character

// console.log(character);

// 공통 DOM 선택함수
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

// 어벤져스 캐릭터 박스 셋팅하기
// 1. 대상선정 : .avengers-box
const avengers = qs('.avengers-box');
console.log('대상 :', avengers);

// 2. 데이터 자동 순회하여 태그 만들기
// html코드 변수
let hcode = '';

// for in
for(let x in character){
    // 변수 x는 객체의 속성이다.
    // 객체 값은 객체변수[x]
    // console.log(x, ' / ', character[x]);

    // html 코드를 만들어준다!

    hcode += `
        
    `;
}
