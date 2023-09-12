/* 네비게이션 유형4 JS - nav04.js */
// 세로네비 서브별 드롭다운 세로형

// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs : (x) => document.querySelector(x),
    qsEl : (el,x) => el.querySelector(x),
    qsa : (x) => document.querySelectorAll(x),
    qsaEl : (el,x) => el.querySelectorAll(x),
    
    // 이벤트셋팅함수
    addEvt : (ele,evt,fn) => ele.addEventListener(evt,fn),
}; 

// 1. 구현 요구 사항
// 상위 메뉴 클릭시 하위 메뉴 나타나기
// 영역을 벗어날 때 하위메뉴 닫기

// 2. 대상선정
// 이벤트 대상 : .gnb>ul>li
// 변경 대상 : .smenu -> 클릭된 이벤트 대상 하위요소

const gnbList = domFn.qsa('.gnb>ul>li');
console.log('대상 (gnbList) :', gnbList);

// 3. 이벤트 설정하기
gnbList.forEach(ele=>{
    domFn.addEvt(ele, 'click', showSub);
});

// 4. 함수 생성하기
function showSub(){
    // this는 클릭된 li요소 자신!
    console.log('나야나!', this);
    // 1. 서브메뉴 유무 판별하기
    // -> .smenu가 하위에 있는지 여부를 알아내기
    let isSub = domFn.qsEl(this, '.smenu');
    console.log('서브결과 :', isSub);
    
    // 조건문 조건식에 null 값은 false 처리된다.
    if(isSub){ // .smenu가 있는 경우만 들어옴
        // 2. 서브메뉴 내부 ol박스 높이값 읽기
        let hv = domFn.qsEl(isSub, 'ol').clientHeight;
        console.log('처리해봐! hv :', hv);

        // 3. .smenu(isSub)의 높이값 적용하기
        isSub.style.height = hv + 'px';

        // 4. 클릭된 li 이외의 li 서브는  닫기
        // 방법 : 전체 li를 순회하며 현재 li만 빼고 처리
        // 사용할 DOM메서드 : 요소.isSameNode(비교요소)
        // -> 같은 요소면 true / 다른 요소면 false값 리턴
        gnbList.forEach(ele=>{
            // 판별결과
            let result = ele.isSameNode(this);
            console.log('같니? :', result);
            // 결과 처리 : false일때만 높이값 0처리
            // false일때 true처리 하려면 논리부정(!) 사용!

            if(!result){    // false일때만 들어옴
                if(domFn.qsEl(ele, '.smenu'))   
                    domFn.qsEl(ele, '.smenu').style.height = '0px';
            }
        }); 
    }
}