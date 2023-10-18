// progress 페이지 JS 

// 요구사항1 : 원형 SVG를 각 %를 다르게 하여 숫자 %와 함께
// 진행율을 애니메이션 하여 표현한다.

///////////////////////////////////////////////////////////////
// 1. 대상 선정  
// 1-1. 버튼 : .act button
const btnAct = $('.act button');
// 1-2. 퍼센트원 : .btns
const btns = $('.btns');
// 1-3. 진행바 : .lineper
const lineper = $('.lineper');

///////////////////////////////////////////////////////////////
// 2. 이벤트 설정
// 대상.click() 하면 계속 이벤트 적용되므로
// 대상.one('click', 함수) 한번만 이벤트 적용하는 메서드 사용
// 제이쿼리는 내부적으로 여러요소는 개별적으로 for문으로 셋팅하므로
// forEach같은 제어를 할 필요가 없다
btnAct.one('click', function(){
    // 2-0. 선택버튼 텍스트 읽기
    let btxt =  $(this).text()
    console.log('나 버튼!', btxt);

    // 2-1. 버튼별 분기하기
    if(btxt == '팽수1'){
        progFn(0, 75);
        progFn(1, 63);
        progFn(2, 89);
        progFn(3, 95);
    }

    ///////////////////////////////////////////////////////////////
    // 4. 두번째 버튼은 내부에서 재귀호출하기
    else if(btxt == '팽수2'){
        // [ 4-0 ]
        // 바텍스트 요소 
        let barTxt = lineper.find('.ltxt b');
        // 진행바 대상요소
        let barBox = lineper.find('.lbar');
        // 수치 변경 변수 : 최초값 읽어옴
        let num = barTxt.text();
        
        // [ 4-1. 반복실행부분 함수화 하기 ]
        const progBar = () => {
            // 4-1-1. 퍼센트 수치 증가하기
            num++;
            // 4-1-2. 퍼센트 수치 반영
            barTxt.text(num);
            // 4-1-3. 진행바 수치와 같이 증가하기
            barBox.css({ width : num + '%' });
            
            // 재귀 호출
            setTimeout(()=>{
                if(num<100) progBar();
            }, 40);
        };

        // 최초 호출
        progBar();
        
    }
});

///////////////////////////////////////////////////////////////
// 3. 함수명 : progFn
// 기능 : 퍼센트 증가에 따른 숫자, 그래프 변경
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