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

/////////////////////////////////////////////////////////////////////////////////////////////
// [ 1. 로컬 스토리지 연습 ]
// 1-1. 버튼 기능 이벤트 대상 : .local-box button
const btnLocal = dfn.qsa(".local-box button");
console.log("btnLocal : ", btnLocal);

// 1-2. 버튼에 이벤트 설정
btnLocal.forEach((ele) => dfn.addEvt(ele, "click", localSFn));
// -> 개별 로컬 스토리지 삭제 이벤트 설정하기
dfn.qsa(".local ol li").forEach((ele, idx) => {
    // 로컬스토리지 키명 배열
    const keyName = ["lname", "lrole", "lcat"];
    ele.onclick = function () {
        // 개별 로컬스토리지 키 삭제
        console.log("삭제할 키 (keyName[idx]) :", keyName[idx]);
        localStorage.removeItem(keyName[idx]);
    };
});

// 1-3. 로컬쓰 처리 함수 만들기
function localSFn() {
    // 1-3-1. 버튼 텍스트 읽기
    let btxt = this.innerText;
    console.log("로컬쓰 :", btxt);
    // 1-3-2. 버튼별 기능 분기하기
    if (btxt == "처음") {
        // 로컬 스토리지 읽기 : localStorage.getItem(키명)
        // 만약 값이 셋팅안됐으면 null 값이 나옴
        // console.log('로컬쓰 lname :', localStorage.getItem('lname'));

        // 로컬 스토리지 셋팅
        // -> localStorage.setItem(키명, 값)
        localStorage.setItem("lname", "이정재");
        localStorage.setItem("lrole", "박평호");
        localStorage.setItem("lcat", "조직내 스파이를 색출하는 해외팀 안기부 팀장");

        // 로컬스토리지.key(순번) -> 키 이름을 리턴한다.
        console.log('두번째(1) 키 명은? (localStorage.key(1)) :', localStorage.key(1),
        '\n 전체 개수 :', localStorage.length);

    } else if (btxt == "전체삭제") {
        // 해당 url로 관리되는 로컬쓰를 모두 지움 : clear
        localStorage.clear();
        // 개별 로컬쓰로 지우는 방법은 : removeItem(키명)
    } else if (btxt == "보여줘") {
        dfn.qs(".local .nm").innerText = localStorage.getItem("lname");
        dfn.qs(".local .role").innerText = localStorage.getItem("lrole");
        dfn.qs(".local .cat").innerText = localStorage.getItem("lcat");
    }
    // 객체를 생성하여 로컬 스토리지에 넣기
    else if (btxt == "처리") {
        // 로컬쓰에 'minfo'가 없으면 makeObj() 호출
        if (!localStorage.getItem("minfo")) makeObj();

        // 바인딩 함수 호출
        bindData();
    }
}

// 처음에 바인딩 함수 호출하여 게시판 보이기
bindData();

// 객체가 없으면 로컬스토리지에 생성하기
function makeObj() {
    console.log('배열 / 객체 만들기');
    // 게시판 형식의 객체를 생성함
    let obj = [
        {
            idx: 1,
            tit: "내가 왕이 될 상인가?",
            cont: "이정재형은 진정 왕이십니다.",
        },
        {
            idx: 1,
            tit: "내가 왕이 될 상인가?",
            cont: "이정재형은 진정 왕이십니다.",
        },
    ];

    // 로컬 스토리지에 넣기
    // 배열 / 객체를 직접 넣으면 데이터형 표시 문자값만 입력되고
    // 실제 객체는 입력되지 않는다.
    // -> 왜? 로컬스토리지는 문자형만 받으니까
    // 그래서 배열 / 객체를 문자 데이터화 해서 넣는다.
    // JSON.stringify(배열/객체)
    // localStorage.setItem('minfo', obj);
    localStorage.setItem("minfo", JSON.stringify(obj));
}

// 화면에 게시판 리스트를 데이터에 맞게 바인딩하기
function bindData(){
    // 1-4. 로컬 스토리지 데이터 : 문자형(string)
    let localData = localStorage.getItem('minfo');
    // [{"idx":1,"tit":"내가 왕이 될 상인가?","cont":"이정재형은 진정 왕이십니다."}] 
    // string
    console.log('localData :', localData, ', type :', typeof(localData));
    

    // 바인딩 데이터 변수
    let bindCode = '';

    // 1-5. 데이터 존재 여부 확인하기
    if(localData){  // null이 아니면 true
        // 문자형을 배열로 형변환해야 함
        // 로컬 스토리지 데이터 배열객체형 변환 
        // -> JSON.parse(문자형 배열 객체)
        localData = JSON.parse(localData);
        // type : object , 배열임
        console.log('localData :', localData, ', type :', typeof(localData), ', 배열인가 ? :', Array.isArray(localData));
        
        // 배열이니까 map() 사용하여 태그 만들기
        // 맵쬬잉 map().join('')
        bindCode = localData.map((v, i)=>`
            <tr>
                <td>${v.idx}</td>
                <td>${v.tit}</td>
                <td>${v.cont}</td>
                <td class="del-link">
                    <a href="#" data-idx="${i}">×</a>
                </td>
            </tr>
        `).join(''); // 태그를 연결자없는 배열전체로 저장
    }
    // 데이터가 없는 경우
    else{
        bindCode = `
            <tr colspan = '4' style='text-align : center'>
                <td>데이터가 없습니다....</td>
            </tr>
        `;
    }

    // 1-6. 화면에 테이블 요소로 데이터 바인딩 구성하기
    let hcode = `
        <table>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>내용</th>
                <th>삭제</th>
            </tr>
            <!-- 데이터에 따른 반복 바인딩 -->
            ${bindCode}
        </table>
    `;

    // 1-7. 화면 출력 : 대상 - .board
    dfn.qs('.board').innerHTML = hcode;

    // 1-8. 화면 출력 후 지우기 링크 셋팅하기
    dfn.qsa('.board .del-link a').forEach(ele => 
        dfn.addEvt(ele, 'click', ()=>delRec(ele.getAttribute('data-idx'))));
}

////////////////////////////////////////////////////////////////////////////////////
// 입력 처리함수 호출 이벤트 설정하기
dfn.addEvt(dfn.qs('#sbtn'), 'click', insData);

// 3. 입력 처리함수 /////////////////////////////
function insData(){
    console.log('입력이양');
    // 3-1. 입력항목 읽어오기
    let tit = dfn.qs('#tit').value;
    let cont = dfn.qs('#cont').value;

    // 3-2. 만약 하나라도 비었다면 돌아가!
    // trim() 앞뒤 공백 제거 -> 스페이스바만 쳐도 불통과 처리
    if(tit.trim()=="" || cont.trim()==""){
        alert('입력데이터가 없습니다. 모두 입력하세요');
        return;
    }

    // 3-3. 입력처리하기
    // 3-3-1. 로컬쓰 데이터 가져오기 : minfo
    let orgData = localStorage.getItem('minfo');

    // 만약 minfo 로컬쓰가 null이면 빈 배열로 생성하기
    if(!orgData) {
        // 빈 배열로 생성하기
        localStorage.setItem('minfo', '[]');
        // 초기 로컬쓰 재할당
        orgData = localStorage.getItem('minfo');
    }

    // 3-3-2. 제이슨 파싱
    orgData = JSON.parse(orgData);

    // 3-3-3. 자동 증가번호 처리하기
    // 배열을 오름차순으로 정렬하여 맨끝 배열데이터의 idx값을 읽어온 후
    // 숫자화 하여 +1 처리함
    // 3-3-3-1. 배열 오름차순 처리 
    // 배열.sort((a, b) => {return a==b? 0:a>b? 1:-1})
    // 배열.sort((a, b) => {return a.idx==b.idx? 0:a.idx>b.idx? 1:-1})
    // 배열 값이 있을 때만 정렬적용!
    if(orgData.length != 0){
        orgData.sort((a, b)=> {
            return(a.idx==b.idx? 0:a.idx>b.idx? 1:-1);
        }); // sort
    }
    // 3-3-3-2. idx 값으로 마지막 배열값 읽기
    let lastArr = orgData.length == 0?
        0 : orgData[orgData.length-1].idx; 
    console.log('정렬결과 :', orgData, '\n 마지막 idx 값 (lastArr) :', lastArr);

    
    // 3-3-4. 입력된 데이터 추가하기 : 배열 push() 메서드
    // 자동 증가번호는 배열개수 + 1
    orgData.push({
                'idx' : orgData.length+1, 
                'tit' : tit, 
                'cont' : cont
    });
    // 3-3-5. 배열/객체 데이터를 문자화하여 로컬쓰에 넣기
    // JSON.stringfy()
    localStorage.setItem('minfo', JSON.stringify(orgData));

    console.log('입력처리 함 (orgData) :', orgData);

    /////////////////////////////////////////////////////////////////////////////////////////////
    // 4. 리스트 업데이트 하기
    bindData();

    // 5. 수정 선택박스 업데이트
    bindMode();
}

// 5. 삭제 처리 함수 //////////////////////////////////////////////////////////////////////////
function delRec(idx){
    console.log('지울 순번 (idx) :', idx);
    // 5-1-1. a 요소 기본이동 막기
    event.preventDefault();
    // 5-1-2. 로컬쓰 데이터 가져오기 : minfo
    let orgData = localStorage.getItem('minfo');
    // 5-2. 제이슨 파싱
    orgData = JSON.parse(orgData);

    // 5-3. 특정 데이터 배열항목 삭제
    // splice(순번, 개수) -> 특정순번부터 몇개 지움
    // 여기서는 1개 삭제 이므로 splice(순번, 1)
    // confirm(메시지)
    // -> 확인, 취소 중 확인 클릭시 true 리턴함 / 취소는 false를 리턴함
    if(confirm('정말 정말 정말로 지우시게요???')){
        orgData.splice(idx, 1);
        console.log('제거 후 배열 :', orgData);

        // 5-4. 배열/객체 데이터를 문자화하여 로컬쓰에 넣기
        // JSON.stringfy()
        localStorage.setItem('minfo', JSON.stringify(orgData));

        // 5-5. 리스트 업데이트 하기
        bindData();

        // 5-6. 수정 선택박스 업데이트
        bindMode();

    }
}

/////////////////////////////////////////////////////////////////////////////////////////////
// 데이터 수정하여 반영하기
// 1. 선택박스 대상선정 : .sel
const modSel = dfn.qs('#sel');
// 2. 데이터 바인딩하기
// 바인딩 함수 만들어서 사용
function bindMode(){
    // 1. 로컬쓰 가져오기
    // 1-1. 로컬쓰 데이터 가져오기 : minfo
    let orgData = localStorage.getItem('minfo');

    // 만약 minfo 로컬쓰가 null이면 빈 배열로 생성하기
    if(!orgData) {
        // 빈 배열로 생성하기
        localStorage.setItem('minfo', '[]');
        // 초기 로컬쓰 재할당
        orgData = localStorage.getItem('minfo');
    }
    // 1-2. 제이슨 파싱
    orgData = JSON.parse(orgData);

    /////////////////////////////////////////////////////////////////////////////////////////////
    // 2. 선택박스 초기화 : 새로 업데이트 될때를 대비
    modSel.innerHTML = `<option value="show">항목선택</option>`;

    /////////////////////////////////////////////////////////////////////////////////////////////
    // 3. idx로 value 값을 만들고 제목으로 항목명을 만들기
    orgData.forEach(v=>{
        modSel.innerHTML += `
            <option value="${v.idx}">${v.tit}</option>
        `
    });
}

// 최초 호출
bindMode();

/////////////////////////////////////////////////////////////////////////////////////////////
// [ 2. 세션 스토리지 연습 ]
// 2-1. 버튼 기능 이벤트 대상 : .session-box button
const btnSession = dfn.qsa(".session-box button");
console.log("btnSession : ", btnSession);

// 2-2. 버튼에 이벤트 설정
btnSession.forEach((ele) => dfn.addEvt(ele, "click", sessionSFn));
// -> 개별 세션 스토리지 삭제 이벤트 설정하기
dfn.qsa(".session ol li").forEach((ele, idx) => {
    // 세션스토리지 키명 배열
    const keyName = ["lname", "lrole", "lcat"];
    ele.onclick = function () {
        // 개별 세션스토리지 키 삭제
        console.log("삭제할 키 (keyName[idx]) :", keyName[idx]);
        sessionStorage.removeItem(keyName[idx]);
    };
});

// 2-3. 세션쓰 처리 함수 만들기
function sessionSFn() {
    // 2-3-1. 버튼 텍스트 읽기
    let btxt = this.innerText;
    console.log("세션쓰 :", btxt);
    // 2-3-2. 버튼별 기능 분기하기
    if (btxt == "처음") {
        // 세션 스토리지 읽기 : sessionStorage.getItem(키명)
        // 만약 값이 셋팅안됐으면 null 값이 나옴
        // console.log('세션쓰 lname :', sessionStorage.getItem('lname'));

        // 세션 스토리지 셋팅
        // -> sessionStorage.setItem(키명, 값)
        sessionStorage.setItem("lname", "정우성");
        sessionStorage.setItem("lrole", "김정도역");
        sessionStorage.setItem("lcat", "국내팀 안개부 팀장, 박평호랑 사이 나쁨");

        console.log("세션쓰 lname :", sessionStorage.getItem("lname"));
        console.log("세션쓰 lrole :", sessionStorage.getItem("lrole"));
        console.log("세션쓰 lcat :", sessionStorage.getItem("lcat"));
    } else if (btxt == "전체삭제") {
        // 해당 url로 관리되는 세션쓰를 모두 지움 : clear
        sessionStorage.clear();
        // 개별 세션쓰로 지우는 방법은 : removeItem(키명)
    } else if (btxt == "보여줘") {
        dfn.qs(".session .nm").innerText = sessionStorage.getItem("lname");
        dfn.qs(".session .role").innerText = sessionStorage.getItem("lrole");
        dfn.qs(".session .cat").innerText = sessionStorage.getItem("lcat");
    }
}
