// JS 9-3. 로컬 스토리지 JS

// DOM 메서드 //////////////////////
import dfn from "./dom.js";
// console.log(dfn);

/*************************************************************** 
    [ JS 로컬스토리지 : localStorage ]
    - window하위객체 window.localStorage
    -> window는 주로 생략함!
    -> 개발자 모드 'Application' 탭에서 확인 가능!

    1. 정의 : 
        브라우저별 로컬 어플리케이션 영역에 저장되는 
        스트링데이터 저장소(JS API)
    2. 유지 : 같은 PC, 같은 브라우저(재설치없이사용) 일 경우 계속유지됨
        (단, 같은파일일 지라도 여는 경로에 따라 같은 변수도
        따로 관리된다! - 기준이 도메인경로/주소)
    3. 특징 : 모드 데이터는 키,값 쌍으로 구성되며 
        데이터값은 반드시 문자형으로 사용됨
    4. 응용 : 데이터로 배열/객체를 사용할 경우 문자형 변환하여 넣고
                다시 객체형으로 파싱하여 사용한다!
            (1) 입력시 : JSON.stringify(배열/객체)
            (2) 사용시 : JSON.parse(문자형배열/객체)
            -> JS의 제이슨 데이터 파싱 메서드 : 
                JSON.parse()
            -> JS의 제이슨 형식 데이터를 문자열로 변환하는 메서드:   
                JSON.stringify()
    5. 사용메서드 : 
        (1) 값설정 : setItem(키명,값)
        (2) 값읽기 : getItem(키명)
        (3) 전체지우기 : clear()
        (4) 키번호읽기 : key(순번) -> 0부터 (키이름리턴)
        (5) 개별항목삭제 : removeItem(키명)
        (6) 개수 : length

    [ JS 세션 스토리지 : sessionStorage ]
    -> 로컬스토리리지와 세션 스토리지의 메서드는 동일함!
    -> 로컬스토리지와 차이점은?
    -> 브라우저가 닫히면 데이터가 사라진다!
    (로컬세션의 개념은 서버세션과 달리 하나의 브라우저탭을
    단위로 한다!)
    -> 서버세션은 접속된 로그인정보세션을 서버에서 관리하는 단위임

    [ JS 로컬 스토리지 / 세션 스토리지 장단점 ]
    (1) 장점: 간단한 프론트엔드 데이터를 DB없이 테스트해보는데 탁월함
    (2) 단점: 데이터의 지속 보장이 없다!
        (그나마 로컬 스토리지는 브라우저 경로가 같고 PC가 같고
        브라우저종류가 같다면 지우기 전까지는 데이터를 유지한다!)


    -> w3 schools 참고
    https://www.w3schools.com/js/js_api_web_storage.asp
***************************************************************/

/////////////////////////////////////////////////////////////////////
// [ 1. 로컬 스토리지 연습 ]
// 1-1. 버튼 기능 이벤트 대상 : .local-box button
const btnLocal = dfn.qsa('.local-box button');
console.log('btnLocal : ', btnLocal);

// 1-2. 버튼에 이벤트 설정
btnLocal.forEach(ele => dfn.addEvt(ele, 'click', localSFn));
// -> 개별 로컬 스토리지 삭제 이벤트 설정하기
dfn.qsa('.local ol li').forEach((ele, idx) => {
    // 로컬스토리지 키명 배열
    const keyName = ["lname", "lrole", "lcat"];
    ele.onclick = function(){
        // 개별 로컬스토리지 키 삭제
        console.log('삭제할 키 (keyName[idx]) :', keyName[idx]);
        localStorage.removeItem(keyName[idx]);
    };
});

// 1-3. 로컬쓰 처리 함수 만들기
function localSFn(){
    // 1-3-1. 버튼 텍스트 읽기
    let btxt = this.innerText;
    console.log('로컬쓰 :', btxt);
    // 1-3-2. 버튼별 기능 분기하기
    if(btxt == '처음'){
        // 로컬 스토리지 읽기 : localStorage.getItem(키명)
        // 만약 값이 셋팅안됐으면 null 값이 나옴
        // console.log('로컬쓰 lname :', localStorage.getItem('lname'));

        // 로컬 스토리지 셋팅
        // -> localStorage.setItem(키명, 값)
        localStorage.setItem('lname', '이정재');
        localStorage.setItem('lrole', '박평호');
        localStorage.setItem('lcat', '조직내 스파이를 색출하는 해외팀 안기부 팀장');

        console.log('로컬쓰 lname :', localStorage.getItem('lname'));
        console.log('로컬쓰 lrole :', localStorage.getItem('lrole'));
        console.log('로컬쓰 lcat :', localStorage.getItem('lcat'));

    }else if(btxt == '전체삭제'){
        // 해당 url로 관리되는 로컬쓰를 모두 지움 : clear
        localStorage.clear();
        // 개별 로컬쓰로 지우는 방법은 : removeItem(키명)

    }else if(btxt == '보여줘'){
        dfn.qs('.local .nm').innerText = localStorage.getItem('lname')
        dfn.qs('.local .role').innerText = localStorage.getItem('lrole')
        dfn.qs('.local .cat').innerText = localStorage.getItem('lcat')
    }
}

/////////////////////////////////////////////////////////////////////
// [ 2. 세션 스토리지 연습 ]
// 2-1. 버튼 기능 이벤트 대상 : .session-box button
const btnSession = dfn.qsa('.session-box button');
console.log('btnSession : ', btnSession);

// 2-2. 버튼에 이벤트 설정
btnSession.forEach(ele => dfn.addEvt(ele, 'click', sessionSFn));
// -> 개별 세션 스토리지 삭제 이벤트 설정하기
dfn.qsa('.session ol li').forEach((ele, idx) => {
    // 세션스토리지 키명 배열
    const keyName = ["lname", "lrole", "lcat"];
    ele.onclick = function(){
        // 개별 세션스토리지 키 삭제
        console.log('삭제할 키 (keyName[idx]) :', keyName[idx]);
        sessionStorage.removeItem(keyName[idx]);
    };
});

// 2-3. 세션쓰 처리 함수 만들기
function sessionSFn(){
    // 2-3-1. 버튼 텍스트 읽기
    let btxt = this.innerText;
    console.log('세션쓰 :', btxt);
    // 2-3-2. 버튼별 기능 분기하기
    if(btxt == '처음'){
        // 세션 스토리지 읽기 : sessionStorage.getItem(키명)
        // 만약 값이 셋팅안됐으면 null 값이 나옴
        // console.log('세션쓰 lname :', sessionStorage.getItem('lname'));

        // 세션 스토리지 셋팅
        // -> sessionStorage.setItem(키명, 값)
        sessionStorage.setItem('lname', '정우성');
        sessionStorage.setItem('lrole', '김정도역');
        sessionStorage.setItem('lcat', '국내팀 안개부 팀장, 박평호랑 사이 나쁨');

        console.log('세션쓰 lname :', sessionStorage.getItem('lname'));
        console.log('세션쓰 lrole :', sessionStorage.getItem('lrole'));
        console.log('세션쓰 lcat :', sessionStorage.getItem('lcat'));

    }else if(btxt == '전체삭제'){
        // 해당 url로 관리되는 세션쓰를 모두 지움 : clear
        sessionStorage.clear();
        // 개별 세션쓰로 지우는 방법은 : removeItem(키명)

    }else if(btxt == '보여줘'){
        dfn.qs('.session .nm').innerText = sessionStorage.getItem('lname')
        dfn.qs('.session .role').innerText = sessionStorage.getItem('lrole')
        dfn.qs('.session .cat').innerText = sessionStorage.getItem('lcat')
    }
}

