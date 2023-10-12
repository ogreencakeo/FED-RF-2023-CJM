// 달력 구현 JS - calendar.js

// DOM 메서드
const Dfn = {
    qs : x => document.querySelector(x),
    qsa : x => document.querySelectorAll(x),
    cg : x => console.log(x),
};  // dFn 객체

// 달력함수 호출
makeDallyeok();

function makeDallyeok(){
    Dfn.cg('달력만들어!');

    //////////////////////////////////////////////////////////////
    // 1. 변수셋팅 
    // 1-1. 변경할 현재 날짜 객체
    const currDate = new Date();
    // 1-2. 오늘 날짜 객체
    const today = new Date();
    // 1-3. 년도요소 : .yearTit
    const yearTit = Dfn.qs('.yearTit');
    // 1-4. 월요소 : .yearTit
    const monthTit = Dfn.qs('.monthTit');
    // 1-5. 일요소 : .yearTit
    const dates = Dfn.qs('.dates');

    // Dfn.cg(yearTit);
    // Dfn.cg(monthTit);
    // Dfn.cg(dates);

    //////////////////////////////////////////////////////////////
    // 2. 함수 만들기
    // (1) 달력 초기화구성 함수
    const initDallyeok = () => {
        // 1. 전달 마지막 날짜(옵션:0) 
        // -> 달력처음 전달 끝쪽 날짜 표시


    };  // initDallyeok함수 ///////////////

}   // makeDallyeok함수 //////////////////////////////