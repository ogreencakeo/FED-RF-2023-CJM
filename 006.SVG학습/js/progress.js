// progress 페이지 JS 

// 요구사항1 : 원형 SVG를 각 %를 다르게 하여 숫자 %와 함께
// 진행율을 애니메이션 하여 표현한다.

// 1. 대상 선정  
// 1-1. 버튼 : .act button
const btnAct = $('.act button');
// 1-2. 퍼센트원 : .btns
const btns = $('.btns');

// 2. 이벤트 설정
btnAct.click(function(){
    console.log('나 버튼!', $(this).text());

    // 2-1. 버튼별 분기하기
    if($(this).text()=='팽수1'){
        progFn(0, 75);
        progFn(1, 63);
        progFn(2, 89);
        progFn(3, 95);
    }
});

/************************************************************
    함수명 : progFn
    기능 : 퍼센트 증가에 따른 숫자, 그래프 변경
************************************************************/
// 3
// function progFn(seq,max){
function progFn(seq, max){ 
    // seq - 순번, max - 최대 % 값
    // max로 최대한계 % 지정

    // [3-1] 숫자 퍼센트 증가
    // 3-1-1. 해당 순번의 숫자 요소
    let ptxt = btns.eq(seq).find('.ptxt');
    // 3-1-2. 퍼센트 증가 : 읽어온 숫자를 1씩 증가시킨다.
    let num = ptxt.text(); // 문자형 숫자
    num++;
    // 3-1-3. 개별숫자 반영하기
    ptxt.text(num);
    // 3-1-4. 재귀호출 하기 : 기준수보다 작을동안 타임아웃 호출
    if(num < max){
        setTimeout(()=>{
            progFn(seq, max);
        }, 40);
    } // if


    // [3-2] SVG 원 퍼센트 증가
    // 대상 : .btns .c1
    btns.eq(seq).find('.c1')
    .css({
        strokeDashoffset : (300 * (100-num) / 100 )+'%'
    })

    console.log('계산값 :', 300*(100-num)/100);

    /* 
        수치 계산법 :
        전체값 : 300
        전체값 * (100 - 현재퍼센트 수치)/100 = 원하는 값

        -> 300에서부터 거꾸로 작아져야 함
        -> 퍼센트 수치를 큰값에서 작은 값으로 가도록 함
        [100 - 현재퍼센트 수치]
    */
}