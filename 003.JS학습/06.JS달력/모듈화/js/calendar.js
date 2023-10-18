// 달력 구현 JS - calendar.js

// DOM 메서드
const Dfn = {
    qs: (x) => document.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsEl: (el, x) => el.querySelector(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
    cg: (x) => console.log(x),
    addZero: (x) => (x < 10 ? "0" + x : x),
    // 날짜 찍기 형식 변경 함수(yyyy-mm-dd시간)
    fm: (x) => `
        ${x.getFullYear()}-${Dfn.addZero(x.getMonth() + 1)}-${Dfn.addZero(x.getDate())}(${week[x.getDay()]})
    `,
}; // dFn 객체

// 요일변경배열
const week = ["일", "월", "화", "수", "목", "금", "토"];

// 달력함수 호출 -> 이젠 여기서 안함!
// makeDallyeok();

// 함수명을 대문자로 시작하여 생성자함수로 변환함!
function MakeDallyeok(selEl) {
    // selEl - 달력 넣을 요소(선택자만 보냄)
    Dfn.cg("달력만들어!");

    //////////////////////////////////////////////////////////////
    // 0. 달력 컴포넌트 HTML 넣기
    Dfn.qs(selEl).innerHTML = insertHcode();

    //////////////////////////////////////////////////////////////
    // 1. 변수셋팅
    // 1-1. 변경할 현재 날짜 객체
    const currDate = new Date();
    // 1-2. 오늘 날짜 객체
    const today = new Date();
    // 1-3. 년도요소 : .yearTit
    const yearTit = Dfn.qs(selEl + " .yearTit");
    // 1-4. 월요소 : .yearTit
    const monthTit = Dfn.qs(selEl + " .monthTit");
    // 1-5. 일요소 : .yearTit
    const dates = Dfn.qs(selEl + " .dates");
    // 1-6. 날짜 넣을 배열 변수
    const dateSet = [];
    // 1-7. html 코드 저장 변수
    let hcode = "";
    // 1-8. 날짜정보 저장히든 필드
    const dateInfo = Dfn.qs(selEl + ' .date-info');

    // Dfn.cg(yearTit);
    // Dfn.cg(monthTit);
    // Dfn.cg(dates);

    /////////////////////////////////////////////////////////////////
    // 2. 함수 만들기
    // 2-1. 달력 초기화구성 함수
    const initDallyeok = () => {
        // 2-1-0. 변수 초기화
        // 날짜 배열 초기화 : splice(시작순번, 개수)
        // 배열변수.splice(0) 첫배열부터 모두 지움
        dateSet.splice(0);
        // html코드변수 초기화
        hcode = "";

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
        Dfn.cg("전달 끝날짜 :" + Dfn.fm(prevLast)); // 2023-10-31 (화)

        // 2-1-2. 현재달 첫째날짜(옵션:1)
        // -> 전달로 셋팅
        //  달력 전달 셋팅을 위한 요일 구하기
        const thisFirst = new Date(cYr, cMt, 1);
        Dfn.cg("현재달 첫째날짜 :" + Dfn.fm(thisFirst)); // 2023-11-01 (수)

        // 2-1-3. 현재달 마지막 날짜(옵션:0)
        const thisLast = new Date(cYr, cMt + 1, 0);
        Dfn.cg("현재달 마지막날짜 : " + Dfn.fm(thisLast)); // 2023-11-30(목)

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
        Dfn.cg("이번달 첫날 요일 : " + fDay); // 3 - 수요일
        if (fDay != 0) {
            // 만약 요일 번호가 0이 아니면 for문 돌림
            for (let i = 0; i < fDay; i++) {
                // 29 30 31
                // 반복횟수만큼 배열 앞쪽에 추가
                // 앞에 추가 메서드 : unshift()
                dateSet.unshift(`
                    <span style="color:#ccc" class="bm">
                        ${prevLast.getDate() - i}
                    </span>
                `);
                // 전달 마지막 날짜 - for문 i값(0, 1, 2, .........)
            }
        }

        // 2-2-2. 현재월 삽입하기
        // 반복문 구성 : 현재월 1일부터 마지막 날짜까지 반복 배열 추가
        for (let i = 1; i <= thisLast.getDate(); i++) {
            dateSet.push(i);
        }

        // 2-2-3. 다음달 나머지 칸 삽입하기
        // 다음달은 클래스 'am'으로 구분
        // 반복구성 : 1부터 2주분량 정도 넣는다
        for (let i = 1; i <= 14; i++) {
            dateSet.push(`
                <span style="color:#ccc" class="am">
                    ${i}
                </span>
            `);
        }
        Dfn.cg("날짜배열 : " + dateSet);

        ///////////////////////////////////////////////////////////////////////
        // 2-3. 날짜 배열로 날짜태그 구성하기 /////////////
        // 2-3-1. 7일 * 6주 = 42개
        for (let i = 0; i < 42; i++) {
            // 오늘날짜와 같은 경우 클래스 'today'넣기
            if (
                // 2-3-2. 년, 월, 일이 모두 일치하는 오늘만 표시
                // 오늘날짜 == 배열값날짜 AND 현재달 == 선택달 AND 현재년도==선택년도
                today.getDate() == dateSet[i] &&
                today.getMonth() == currDate.getMonth() &&
                today.getFullYear() == currDate.getFullYear()
            ) {
                hcode += `<div class="date today"> ${dateSet[i]} </div> `;
            } else {
                hcode += `<div class="date"> ${dateSet[i]} </div> `;
            }
        }

        // 2-3-2. 날짜 태그 출력하기 ////////////////
        dates.innerHTML = hcode;

        // dates.innerHTML = dateSet.map((v, i)=>
        //     i<42? `
        //         <div class="date">
        //             ${v}
        //         </div>
        //     ` : ``).join('');

        // Dfn.cg(dateSet);
        // Dfn.cg(hcode);

        // 2-7. 날짜 정보를 사용하도록 셋팅하기
        // 2-7-1. 대상 : .date -> 위에서 새로 담겼으므로 새로 읽음
        let newDate = Dfn.qsa(selEl + " .date");
        // console.log('newDate :', newDate); // 0~41

        // 2-7-2. 각 날짜 .date요소에 링크 설정하기
        newDate.forEach((ele) => {
            Dfn.addEvt(ele, "click", () => {
                // 2-7-3. 년도 읽기
                let nowY = yearTit.innerText;
                // 2-7-4. 월 읽기
                let nowM = monthTit.innerText;
                // 2-7-5. 날짜 읽기
                let nowD = ele.innerText;

                console.log(ele.querySelector("span"));

                // 2-7-6. 전달 / 다음달 구분하기
                let isSpan = Dfn.qsEl(ele, "span");
                console.log("isSpan :", isSpan);
                // span이 있으면 true 처리됨
                if (isSpan) {
                    // span의 클래스가 'bm' / 'am' 인지 구분하기
                    let isAM = isSpan.classList.contains("am");
                    if (isAM) {
                        // 다음달이므로 1 더함
                        nowM++;
                        if (nowM == 13) {
                            nowM = 1; // 13월은 1월로 처리
                            nowY++; // 1월은 다음해로 처리
                        }
                    } else {
                        // 'bm'일 경우 즉, 전달
                        nowM--;
                        if (nowM == 0) {
                            // 0월은 12월로 처리
                            nowM = 12;
                            // 12월은 전해로 처리
                            nowY--;
                        }
                    }
                }

                // 날짜구성하기 : yyyy-mm-dd
                let setDate = 
                `${nowY}-${Dfn.addZero(nowM)
                }-${Dfn.addZero(nowD)}`;

                // 요일셋팅하기 : 해당날짜의 요일 getDay()
                let setDay = new Date(setDate).getDay();

                // 날짜요일출력 : yyyy-mm-dd(요일)
                console.log(setDate+`(${week[setDay]})`);

                // 히든필드에 날짜정보 넣기: 날짜정보공개
                // 활용도를 높이기 위해 일반 구분자로 정보 공개
                // 예) 년도/월/일/요일 -> 2023/10/20/2
                dateInfo.value = `
                    ${nowY}/${nowM}/${nowD}/${setDay}
                `;
                // setDate+`(${week[setDay]})`

            }); // click함수 /////

        });
    }; // initDallyeok함수 ///////////////

    // 2-4. 이전/다음 달력 출력하기 함수
    // 이전/다음달 함수는 this 키워드로 생성자함수에 등록하여
    // 인스턴스 생성시 접근할 수 있도록 한다.
    this.chgCalendar = (num) => {
        // num이 1이면 다음, -1이면 이전
        console.log("이전달력 고고!");
        // 이전/다음달로 변경하여 initDallyeok() 호출
        // getMonth() 월 가져오기 / setMonth() 월 셋팅하기
        currDate.setMonth(currDate.getMonth() + num);
        initDallyeok();
    };

    // 2-6. 이벤트 설정하기
    // 2-6-1. 이전버튼에 함수 연결하기 : 달을 빼기 위해 -1 전달
    Dfn.addEvt(Dfn.qs(selEl + " .btnL"), "click", () => this.chgCalendar(-1));
    // 2-6.2. 다음버튼에 함수 연결하기 : 달을 더하기 위해 1 전달
    Dfn.addEvt(Dfn.qs(selEl + " .btnR"), "click", () => this.chgCalendar(1));
    // this키워드로 등록된 생성자함수 속성/메서드는 반드시
    // this 키워드를 사용하여 호출해야 함!

    // 초기셋팅함수 호출
    initDallyeok();
} // makeDallyeok함수 //////////////////////////////

//////////////////////////////////////////////////////////////
// 3. 함수명 : insertHcode
// 기능 : 달력의 HTML 코드 넣기
function insertHcode() {
    // 달력 html 코드를 리턴함
    return `
        <!-- 달력전체박스 -->
        <div class="calender">
            <!-- 달력상단:해당년/월표시 -->
            <header class="header">
                <!-- 달력이동버튼:이전 -->
                <button class="mbtn btnL">〈</button>
                <div class="title">
                    <div class="yearTit"></div>
                    <div class="monthTit"></div>
                </div>
                <!-- 달력이동버튼:다음 -->
                <button class="mbtn btnR">〉</button>
            </header>
            <!-- 달력날짜표시박스 -->
            <section class="main">
                <!-- 주단위 구분박스 -->
                <div class="week">
                    <div class="day">Sun</div>
                    <div class="day">Mon</div>
                    <div class="day">Tue</div>
                    <div class="day">Wed</div>
                    <div class="day">Thu</div>
                    <div class="day">Fri</div>
                    <div class="day">Sat</div>
                </div>
                <!-- 해당월의 달력날짜 구성박스 -->
                <div class="dates">
                </div>
            </section>
            <!-- 달력날짜 저장용 히든필드 : type="hidden" -->
            <input type="hidden" class="date-info" />

        </div>
    `;
} // insertHcode함수 ///////////////////////////////

// 달력 내보내기 ///////////////////////////////
export default MakeDallyeok;
