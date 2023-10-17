// 보그 PJ 메인 페이지 js - main.js

import dFn from './dom.js';

// [ 1. 메인 페이지 등장 액션 클래스 넣기 ]
// 대상 : .main-area section
const hideBox = dFn.qsa('.main-area section');

// 첫번째 박스 빼고 숨김 클래스 넣기
hideBox.forEach((ele, idx) => {
    if(idx != 0){
        ele.classList.add('scAct');
    }
});

///////////////////////////////////////////////////////
// 제이쿼리 라이브러리 사용하여 구현해보자
