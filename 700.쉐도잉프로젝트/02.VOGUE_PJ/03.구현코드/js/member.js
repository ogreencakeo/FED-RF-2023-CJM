// 보그 PJ 회원가입 페이지 JS - member.js

/************************************************************** 
    [ 사용자 입력폼 유효성 검사 ]
    - 이벤트 종류 : blur(포커스가 빠질때 발생)
    - 제이쿼리 이벤트 메서드 : blur()
    - 이벤트 대상 : 
        -> 입력요소 중 text(아이디 email2 제외), password
        form.logF input[type=text][id!=email2],
        form.logF input[type=password],
        -> 요소뒤 대괄호는 속성선택자 ( CSS원래문법 )
        [id!=email2] !=은 같지 않다. ( 제이쿼리용문법 )
**************************************************************/
$(`form.logF input[type=text][id!=email2],
form.logF input[type=password]`)
// .on('blur', function(){})
.blur(function(){
    // 1. 현재 블러가 발생한 요소의 아이디는?
    let cid = $(this).attr('id');
    // cid는 current id 즉, 현재 아이디
    
    // 모든 공백 제거 함수(get rid of Space)
    const groSpace = x => x.replace(' ', '');
    
    // 2. 현재 블러가 발생한 요소의 값은?
    let cv = $(this).val(); 



    console.log('id는? :', cid, '/값은?', cv);

    /******************************************************
        3. 빈값 여부 검사하기 ( 필수 입력 항목 )
    ******************************************************/
    if(cv == ''){
        // 메시지 출력하기
        $(this).siblings('.msg').text('필수입력!');
        // 입력창 초기화
        $(this).val('');
    }
    else{
        // 모두 통과일 경우 메시지 지우기 //////////////////////////
        // empty() - 내용을 지우는 메서드
        $(this).siblings('.msg').empty();
    }
});