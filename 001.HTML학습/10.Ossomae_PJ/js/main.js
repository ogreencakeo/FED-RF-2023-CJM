// 옷소매 갤러리 JS - main.js

// DOM함수
import dFn from './dom.js';
// console.log(dFn);

// 1. 기능정의 : 버튼 클릭시 갤러리박스를 잘라서 앞/뒤로 이동함
// 1-1. 오른쪽버튼 클릭시 - 맨앞 div 맨뒤로 이동
// -> 갤러리부모박스.appendChild(맨앞자식 div)
// 1-2. 왼쪽버튼 클릭시 - 맨뒤 div 맨앞으로 이동
// -> 갤러리부모박스.insertBefore(맨뒤자식 div, 맨앞자식 div)

// 2. 대상선정 
// 2-1. 이벤트대상 : .abtn(이동버튼들)
const abtn = dFn.qsa('.abtn');
// 2-2. 변경대상 : .gbx(갤러리부모박스)
const gbx = dFn.qs('.gbx');
// console.log('abtn :', abtn, 'gbx :', gbx);

// 3. 이벤트 설정하기
abtn.forEach(ele =>{
    dFn.addEvt(ele, 'click', goSlide);
});

// 4. 함수 만들기
function goSlide(){
    // 1. 버튼 구분하기
    let isR = this.classList.contains('rb');
    console.log('고고씽~!', this, 'isR :', isR);

    // 2. 기능 분기하기
    // 2-1. 오른쪽버튼 : 맨앞 div 맨뒤로 이동
    if(isR){

    }
    // 2-2. 왼쪽버튼 : 맨뒤 div 맨앞으로 이동
    else{

    }
}
