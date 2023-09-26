// 배열의 메서드 활용 JS

// DOM 메서드 모듈
import dFn from "./dom.js";
console.log(dFn);

// 0. 기본정보 셋팅
// (1) 배열변수 선언과 할당
const fruit = ["배", "사과", "용과", "딸기"];

// (2) 과일명과 배경이미지명을 매칭함 -> 객체
const frObj = {
    배: "fruits_01",
    사과: "fruits_02",
    용과: "fruits_14",
    딸기: "fruits_09",
    두리안: "fruits_17",
    바나나: "fruits_15",
    수박: "fruits_12",
    파인애플: "fruits_13",
    망고: "fruits_24",
    오렌지: "fruits_03",
    체리: "fruits_05",
    멜론: "fruits_11",
    블루베리: "fruits_20",
    레몬: "fruits_04",
}; 

// 1. 요구사항 : 배열에 과일정보를 담아서 '과일주세요' 버튼 클릭시
// 과일 이미지 요소를 화면에 출력해준다.
// 배열구성을 수정, 삭제 등 배열 메서드로 변경할 수 있게 한다!

// 2. 대상선정 :
// 2-1. 이벤트 대상 : .mbtn (기능버튼들)
const mbtn = dFn.qsa(".mbtn");
// 2-2. 변경 대상 : .showit (배열정보출력) / .cont (과일출력박스)
const showit = dFn.qs(".showit");
const cont = dFn.qs(".cont");
// 2-3. 전체과일 콤보 박스 : #sel
const sel = dFn.qs('#sel');
// 2-4. 선택과일 콤보 박스(anum = array number) : #anum
const anum = dFn.qs('#anum');
console.log("mbtn :", mbtn, "showit :", showit, "cont :", cont, 'sel :', sel, 'anum :', anum);

// 3. 초기화 작업 : 처음배열출력 / 콤보박스 바인딩
// 3-1. 처음 배열 출력하기 
showit.innerText = fruit.join('♥');
// join() : 전체배열을 사이 구분자를 넣고 문자열 출력
// 3-2. 전체 과일 콤보박스 바인딩
// 대상 : #sel / 데이터 : frObj

// 객체는 끕이 높아 forEach를 쓸 수 없다. -> for in
for(let x in frObj){
    // x - 객체의 속성
    // frObj[x] - 객체의 값
    console.log(x);
}

// 4. 이벤트 설정하기
mbtn.forEach((ele) => {
    dFn.addEvt(ele, "click", showFruit);
});

// 5. 함수 만들기
// 배열을 조작하여 과일을 화면에 출력!
function showFruit() {
    // this - 버튼자신!
    // 버튼 텍스트
    let btxt = this.innerText
    console.log("나야나", 'btxt :', btxt);

    if(btxt == '과일주세요~!'){
        // 출력박스에 배열정보로 태그 넣기
        // 구조 : ul > li
        // 과일 배열만큼 돌면서 만들기
        let hcode = '<ul>';
        fruit.forEach(val => {
            hcode += `
                <li style = 'background:url(./addimg/${frObj[val]}.png) no-repeat center/cover'>
                    ${val}
                </li>
            `;
        })
        hcode += '</ul>';

        // 출력박스에 태그 넣기        
        cont.innerHTML = hcode;
    }
}
