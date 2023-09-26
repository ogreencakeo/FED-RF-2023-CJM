// 배열의 메서드 활용 JS

// DOM 메서드 모듈
import dFn from './dom.js';
console.log(dFn);

// 1. 요구사항 : 배열에 과일정보를 담아서 '과일주세요' 버튼 클릭시 
// 과일 이미지 요소를 화면에 출력해준다.
// 배열구성을 수정, 삭제 등 배열 메서드로 변경할 수 있게 한다!

// 2. 대상선정 : 
// 2-1. 이벤트 대상 : .mbtn (기능버튼들)
const mbtn = dFn.qsa('.mbtn');
// 2-2. 변경 대상 : .showit (배열정보출력) / .cont (과일출력박스)
const showit = dFn.qs('.showit');
const cont = dFn.qs('.cont');
console.log('mbtn :', mbtn, 'showit :', showit, 'cont :', cont);

// 3. 이벤트 설정하기
mbtn.forEach(ele => {
    dFn.addEvt(ele, 'click', 함수);
});

// 4. 함수 만들기
function 함수(){
    
}