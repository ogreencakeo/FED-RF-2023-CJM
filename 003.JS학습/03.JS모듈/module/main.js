// 모듈 연습 메인 JS - main.js

// DOM함수
import dFn from "./dom.js";
// from 뒤의 파일명 확장자 사용해야함!
// -> SPA 모듈 개발환경에서는 .js, .jsx 등 확장자 생략가능

// 텍스트 데이터
// import { mTitle, sTitle, personInfo, mvData } from './text_data.js';
// 별칭으로 받기 { 원래변수 as 별칭 }
// -> 별칭을 썼으면 별칭으로 사용해야 함!
import { 
    mTitle as mTit,
    sTitle as sTit, 
    personInfo as pInfo, 
    mvData as mv 
} from "./text_data.js";

// 메시지 구성함수
import msgFn from './msg_format.js'; 
// import {message as msgFn} from './msg_format.js'; 
// default로 내보낸것은 {변수} 형식으로 받을 수 없다.

// import mTitle from "./text_data.js";
// import zzz from "./text_data.js";

// console.log(zzz('헐'));
// console.log(dFn);
// console.log(mTit, sTit, pInfo, mv);
console.log(msgFn);

/*************************************************** 
    
    [ import 형식 ]
    import 전달변수 from 파일경로;
    -> 반드시 가져올 모듈JS에서 export를 해줘야함!
    -> from 뒤에 경로는 반드시 상대경로일 경우
    같은 위치일 지라도 ./ 표시를 꼭해야함!(없으면 안나옴!)
    (/,./,../ 표시필수)
    -> 모듈구성은 반드시 서버형식으로 열어야 작동한다!
    (http://...) Live Server로 열기때문에 볼 수 있음!
    -> 로컬파일로 열면 작동안됨!

    [ import 시 변수명 변경하기 : 별칭사용하기 ]
    import {전달변수 as 별칭} from 파일경로;
    예) import {mymymy as m} from 파일경로;
    -> 별칭 사용이유:  단순변경요구, 같은이름 변수 피하기

    ____________________________________________________

    [ 모듈화를 위한 구성 ]
    1. 데이터 처리하기 위한 JS
    -> textData.js
    2. 구체적인 데이터 구성처리를 위한 JS
    -> msgFormat.js
***************************************************/

// 1. 대상선정 : 출력박스 
// (1) 타이틀 출력박스
const titBx = dFn.qs('.tpart');

// 2. 변경 적용
