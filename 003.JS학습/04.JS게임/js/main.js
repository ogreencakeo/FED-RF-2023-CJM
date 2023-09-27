// Racing PJ 메인 JS - main.js


// DOM메서드 모듈
import domFn from "./dom.js";

// 메시지 제이슨 불러오기
import msgTxt from './data_racing.json' assert{type:'json'};
console.log('msgTxt :', msgTxt);

/********************************************** 
            [ 게임 기능정의 ]
    _________________________________

    1. 게임룰: 거북버튼 클릭하여 거북을
        왼쪽에서 오른쪽으로 이동함
        이때 토끼는 자동으로 이동하여
        결승선에 먼저 도달하는 레이서가 승리함
    2. 토끼의 이동속도는 레벨로 설정함
    3. 결승선 도착은 둘 중 하나가 먼저
        도착할 경우 판별함수에서 결과를
        화면에 출력한다.
    4. 포커스가 버튼에 갈 경우 마우스가
        아닌 키보드 버튼으로 조작할 수 없게함
        (마우스만 사용하도록 함!)
    5. 기본적으로 거북이동버튼 클릭시
        토끼는 자동으롤 작동됨!
    6. 토끼이동버튼은 토끼만 미리 작동가능
    7. 처음으로 버튼은 전체를 리셋함
**********************************************/

// 1. 대상선정 ///////////////////
// (1) 거북 : #t1
const t1 = domFn.qs('#t1');

// (2) 토끼 : #r1
const r1 = domFn.qs('#r1');

// (3) 버튼 : #btns a
const btns = domFn.qsa('#btns a');

// (4) 레벨 : #level
const level = domFn.qs('#level');

// (5) 메시지박스 : #msg
const msg = domFn.qs('#msg');

// (6) 토끼, 거북 위치값 변수
let r1pos = 0, t1pos = 0;

// 토끼위치 : r1pos / 거북위치 : t1pos 

// cg(msg);
// console.log('t1 :', t1, ', r1 :', r1, ', btns :', btns, ', level', level, ', msg :', msg);

// 2. 이벤트 설정하기 ////////////
// 대상: 버튼들 - btns변수
btns.forEach(ele => {
    domFn.addEvt(ele, 'click', goGame);
});

/*********************************** 
    함수명: goGame
    기능: 버튼별 기능분기
***********************************/
function goGame(){
    // 1. 버튼 글자 읽기
    let btxt = this.innerText;
    console.log('고우~!', btxt);

    // 2. 버튼별 기능 분기하기
    if(btxt == '토끼출발'){
        goR1();
    }else if(btxt == '거북출발'){
        // 거북버튼 멈춤 상태값에 따른 조작제어
        if(t1Stop) return;

        // 거북위치값 이동셋팅
        t1pos += 16;
        t1.style.left = t1pos + 'px'; 
        
        // 거북버튼 키보드 작동 막기
        // 포커스가 가는 것을 blur처리하면 된다!
        // this는 클릭된 '거북출발' 버튼임!
        this.blur();
        // 초점가게 하는 메서드 -> focus()
        // 초점 빠지게 하는 메서드 -> blur()

        // 토끼출발 호출
        goR1();
    }else if(btxt == '처음으로'){
        // 페이지 리로드하기
        location.reload();
    }
}


/********************************************
    함수명 : goR1
    기능 : 토끼자동이동(인터발함수)
********************************************/
// 인터발 지우기용 변수
let autoI;

function goR1(){
    // console.log(autoI);

    // autoI변수에 할당전 상태는 undefined이므로 false처리됨!
    // 이때, if문으로 들어가려면 !(NOT)연산자 사용
    if(!autoI){ // false일때 들어감!
        // 인터발 실행하기 (인터발 함수)
        autoI = setInterval(()=>{
            // console.log(autoI);
            // 토끼위치 이동
            r1.style.left = ++r1pos + 'px'; 

            // 승자판별함수 호출!
            whoWinner();
        }, level.value);
        // 실행시간은 #level인 선택박스 값을 읽어온다.
        // option의 value값은 level.value

        
    }    
}

/***************************************** 
    함수명: whoWinner
    기능: 기준값 보다 레이서위치값이 큰경우
        승자를 판별하여 메시지를 보여준다!
*****************************************/
let t1Stop = 0; // 거북멈춤값 (1-멈춤, 0-허용)

function whoWinner(){
    // console.log('토끼위치 :', r1pos, ', 거북위치 :', t1pos);

    // 1. 토끼 / 거북의 위치값이 기준값 이상일때
    // 기준값 : 650px
    if(r1pos >= 650 || t1pos >= 650){
        // (1) 토끼야 멈춰라!
        clearInterval(autoI);
        // (2) 거북아 멈춰라!
        t1Stop = 1; // 거북버튼 조작제어 값 업데이트

        // 승자변수
        let winner;
        // (3) 승자판별하기
        if(r1pos > t1pos) winner = "토끼";
        else if(r1pos < t1pos) winner = "거북";
        else winner = '비김';

        // (4) 메시지 랜덤으로 커버박스에 넣기
        // msgTxt에 json으로 부터 데이터 담음!

        // 선택 메시지 객체
        let selMsg = msgTxt[winner];
        console.log(selMsg);

        // selMsg -> 선택된 메시지 배열
        // 랜덤수 만들기
        let rdmNum = Math.floor(Math.random()*selMsg.length);
        console.log('rdmNum :', rdmNum, ', 개수 :', selMsg.length);
        console.log('랜덤 메시지 :', selMsg[rdmNum]);
        

    }
}