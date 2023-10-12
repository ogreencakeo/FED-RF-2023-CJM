// 달력 구현 JS - calendar.js

// DOM 메서드
const Dfn = {
    qs : x => document.querySelector(x),
    qsa : x => document.querySelectorAll(x),
    cg : x => console.log(x),
    addZero : x => x<10? '0'+x : x,
    // 날짜 찍기 형식 변경 함수(yyyy-mm-dd시간)
    fm : x => `
        ${x.getFullYear()
        }-${Dfn.addZero(x.getMonth()+1)
        }-${Dfn.addZero(x.getDate())
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
    // 1-6. 날짜 넣을 배열 변수
    const dateSet = [];

    // Dfn.cg(yearTit);
    // Dfn.cg(monthTit);
    // Dfn.cg(dates);

    /////////////////////////////////////////////////////////////////
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

        ///////////////////////////////////////////////////////////////////////
        // 2-1-1. 전달 마지막 날짜(옵션:0) 
        // -> 달력처음 전달 끝쪽 날짜 표시
        const prevLast = new Date(cYr, cMt, 0);
        Dfn.cg('전달 끝날짜 :' + Dfn.fm(prevLast)); // 2023-10-31 (화)

        // 2-1-2. 현재달 첫째날짜(옵션:1)
        // -> 전달로 셋팅
        //  달력 전달 셋팅을 위한 요일 구하기
        const thisFirst = new Date(cYr, cMt, 1);
        Dfn.cg('현재달 첫째날짜 :' + Dfn.fm(thisFirst)); // 2023-11-01 (수)

        // 2-1-3. 현재달 마지막 날짜(옵션:0)
        const thisLast = new Date(cYr, cMt+1, 0);
        Dfn.cg('현재달 마지막날짜 : ' + Dfn.fm(thisLast)); // 2023-11-30(목)

        // 2-1-4. 년도 표사하기
        yearTit.innerHTML = cYr;
        
        // 2-1-4. 월 표사하기
        monthTit.innerHTML = cMt + 1;

        ///////////////////////////////////////////////////////////////////////
        // 2-2. 날짜 데이터 태그 구성하기
        // 2-2-1. 전달 날짜 앞쪽 채우기
        // 조건 : 현재달 첫날짜 요일이 0이 아니면 내용있음
        // -> 왜 0인가? 0은 일요일 이므로 0이면 앞에 내용없음
        let fDay = thisFirst.getDay();
        Dfn.cg('이번달 첫날 요일 : ' + fDay); // 3 - 수요일
        if(fDay !=0 ){
            // 만약 요일 번호가 0이 아니면 for문 돌림
            for(let i=0; i < fDay; i++){    // 29 30 31
                // 반복횟수만큼 배열 앞쪽에 추가
                // 앞에 추가 메서드 : unshift()
                dateSet.unshift(`
                    <span style="color:#ccc" class="bm">
                        ${prevLast.getDate() - i}
                    </span>
                `)
                // 전달 마지막 날짜 - for문 i값(0, 1, 2, .........)
            }
        }

        // 2-2-2. 현재월 삽입하기
        // 반복문 구성 : 현재월 1일부터 마지막 날짜까지 반복 배열 추가
        for(let i=1; i<=thisLast.getDate(); i++){
            dateSet.push(i);
        }

        // 2-2-3. 다음달 나머지 칸 삽입하기
        // 다음달은 클래스 'am'으로 구분
        // 반복구성 : 1부터 2주분량 정도 넣는다
        for(let i=1; i<=14; i++){
            dateSet.push(`
                <span style="color:#ccc" class="am">
                    ${i}
                </span>
            `);
        }  
        Dfn.cg('날짜배열 : '+ dateSet);

        ///////////////////////////////////////////////////////////////////////
        // 2-3. 날짜 배열로 날짜태그 구성하여 출력하기7일 
        // 7일 * 6주 = 42개
        dates.innerHTML = dateSet.map((v, i)=>
            i<42? `
                <div class="date">
                    ${v}
                </div>
            ` : ``).join('');

    };  // initDallyeok함수 ///////////////

    // 초기셋팅함수 호출
    initDallyeok();

}   // makeDallyeok함수 //////////////////////////////