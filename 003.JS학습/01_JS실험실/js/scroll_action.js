/* 스크롤 액션 JS - scroll_action.js */
const domFn = {
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),

    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),

    // 바운딩 위치값 함수
    getBCR: (ele) => ele.getBoundingClientRect().top,
};

// 부드러운 스크롤 호출
startSS();

/***********************************************************
    [ 스크롤 이벤트를 활용한 요소 등장액션 기능 구현하기 ]
    1. 사용 이벤트 : scroll
    -> 스크롤바가 있는 페이지에서 또는 부분박스에서 
    스크롤바가 이동할 때 발생하는 이벤트
    -> 주의 : wheel 이벤트와는 다르다! 무엇이?
    스크롤바가 이동하지 않아도 마우스 휠이 작동될때 발생한다!
    (휠 이벤트는 모바일에서 사용불가!)
    
    2. 스크롤바 위치값 알아내기 : 세로방향(Y축)
    -> 가로방향 스크롤바는 Y대신 X라는 문자를 사용함!

    3. 스크롤 등장 대상요소의 보이는 화면에서의 top값
    getBoundingClientRect().top
    -> 보이는 화면상단을 기준으로 이것보다 위로 갈 경우 마이너스 값을 리턴한다
    -> 기준 : 보이는 화면크기를 기준하면 된다
    -> 윈도우 화면 전체 : window.innerHeight
    예) 화면의 3/2는 window.innerHeight/3*2
    예) 화면의 4/3는 window.innerHeight/4*3
    
***********************************************************/
// 1. 대상선정
// 스크롤 등장 대상 : .scact
const scAct = domFn.qsa(".scact");
console.log("대상(scAct) :", scAct);

// 2. 전체 window에 스크롤 이벤트 셋팅하기
domFn.addEvt(window, "scroll", showIt);

// 요소 위치값
// let pos1 = scAct[0].offsetTop;
// let pos2 = scAct[1].offsetTop;
// let pos3 = scAct[2].offsetTop;

// 3. 스크롤 등장 기준설정 : 화면의 3/4
const CRITERIA = (window.innerHeight / 4) * 3;

// 4. 스크롤 등장액션 함수 만들기
function showIt() {
    // 스크롤바 위치값(Y축) 읽어오기
    let scTop = window.scrollY;
    // let scTop = document.querySelector('html').scrollTop;
    // let scTop = document.documentElement.scrollTop;
    // let scTop = document.scrollingElement.scrollTop;
    // console.log(scTop);

    // 스크롤 등장 요소 위치값 찍기
    // console.log('pos1 :', pos1, '/ scTop :', scTop);

    // 정해진 위치의 요소를 스크롤 위치값으로 등장시키기
    // if(scTop > pos1-350) scAct[0].classList.add('on');
    // if(scTop > pos2-350) scAct[1].classList.add('on');
    // if(scTop > pos3-350) scAct[2].classList.add('on');

    // 요소의 바운딩 위치값 찍기
    for(let x of scAct) addOn(x);
}

// 기준값을 검사후 클래스 넣는 함수
function addOn(ele) {
    // ele - 대상요소
    let bTop = domFn.getBCR(ele);
    // console.log("바운딩값 :", bTop);

    // 기준값 보다 작을때 등장
    if (bTop < CRITERIA) ele.classList.add("on");
    // 기준값 보다 크면 원상복귀(숨김)
    else ele.classList.remove("on");
}
