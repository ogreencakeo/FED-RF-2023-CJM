// 보그PJ - 공통 모듈 JS : common.js

// DOM 메서드
import dFn from './dom.js';

// 상단, 하단 공통 데이터 불러오기
import tData from './data/com_module.js';

// 부드러운 스크롤 모듈
import { startSS, setPos } from "./smoothScroll23.js";

// [1] 부드러운 스크롤 적용
startSS();

// [2] 상단/하단 공통 모듈 넣기

// 대상성정 : .common-area
const comArea = dFn.qsa('.common-area');
// console.log('tData :', tData, ', comArea :', comArea);

// 상단영역 html 넣기
comArea[0].innerHTML = tData.topArea;
// 하단영역 html 넣기
comArea[1].innerHTML = tData.footerArea;
