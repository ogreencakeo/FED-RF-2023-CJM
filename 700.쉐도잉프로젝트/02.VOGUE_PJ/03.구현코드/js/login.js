// 보그 PJ 로그인 페이지 JS - login.js

$(()=>{

    /*************************************************
        로그인 페이지 유효성 검사
    *************************************************/
    // 검사대상 : #mid, #mpw
    const mid = $('#mid');
    const mpw = $('#mpw');

    // 유효성 검사 기준 : 전송시 아이디, 비번 모두 있어야 함.

    // 이벤트 대상 : #sbtn
    // 이벤트 종류 : click
    $('#sbtn').click(function(e){
        // 기본 이동 서브밋 막기
        e.preventDefault();

        // 공백데이터 처리 함수
        const groSpace = x => x.replace(/\s/g, '');

        // 유효성 검사
        if(groSpace(mid.val())=='' || groSpace(mpw.val())=='' ){
            alert('아이디, 비밀번호를 모두 입력해야 합니다.');
        }
    });
}); 