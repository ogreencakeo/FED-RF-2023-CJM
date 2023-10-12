// 달력 구현 JS - calendar.js

// DOM 메서드
const Dfn = {
    qs : x => document.querySelector(x),
    qsa : x => document.querySelectorAll(x),
    cg : x => console.log(x),
    // 날짜 찍기 형식 변경 함수(yyyy-mm-dd시간)
    fm : x => `
        ${x.getFullYear()
        }-${x.getMonth()+1 <10? '0'+(x.getMonth()+1) : x.getMonth()+1
        }-${x.getDate() <10? '0'+x.getDate() : x.getDate()
        } (${week[x.getDay()]})
    `
};  // dFn 객체

// 요일변경배열
const week = ['일', '월', '화', '수', '목', '금', '토']; 

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
    // 2-1. 달력 초기화구성 함수
    const initDallyeok = () => {
        // 현재년
        let cYr = currDate.getFullYear();
        // 현재달
        let cMt = currDate.getMonth();

        // [ 선택달 끝날짜, 첫날짜 알아오기 ]
        // new Date(년도, 월, 옵션)
        // 전달값
        // (1) 년도
        // (2) 월
        // (3) 옵션 : 0 - 현재달끝날짜 / 1 - 다음달첫날짜

        // 2-1-1. 전달 마지막 날짜(옵션:0) 
        // -> 달력처음 전달 끝쪽 날짜 표시
        const prevLast = new Date(cYr, cMt, 0);
        Dfn.cg('전달 끝날짜 :' + Dfn.fm(prevLast));

        // 2-1-2. 현재달 첫째날짜(옵션:1)
        // -> 전달로 셋팅
        //  달력 전달 셋팅을 위한 요일 구하기
        const thisFirst = new Date(cYr, cMt, 1);
        Dfn.cg('현재달 첫째날짜 :' + Dfn.fm(thisFirst));



    };  // initDallyeok함수 ///////////////

    // 초기셋팅함수 호출
    initDallyeok();

}   // makeDallyeok함수 //////////////////////////////