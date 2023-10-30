// 자동차 360도 회전뷰 JS - car.js

$(()=>{
    /*****************************************************
        [ 박스에 드래그하여 이미지 변경하기 ]
        ___________________________________________
        원리 : 마우스 포인터 위치 중 x축값만 이용하여 
        처음 찍은 위치와 드래그하여 마지막에 찍은 위치를 
        비교하여 방향을 결정한 후 이전 / 다음 이미지로 
        순서대로 넘겨서 자동차를 보여준다.
    *****************************************************/
    /////////////////////////////////////////////////////////////////////
    // 0. 이미지 셋팅하기
    // 0-1. 이미지박스 대상 : .cbx
    const cbx = $('.cbx');
    console.log('대상 cbx :', cbx);

    // 0-2. 이미지 셋업 : ./360view/country1.jpg 형식
    // 이미지개수 : 총 50개
    for(let i=1; i<=50; i++){
        cbx.append(`
            <img src="./360view/country${i}.jpg" lat="car image" />
        `)
    }

    // 0-3. 모든 이미지 숨기고 첫번째 이미지만 보이기
    cbx.find('img').hide().first().show();

    /////////////////////////////////////////////////////////////////////
    // 1. 변수 셋팅하기
    // (1) 드래그 상태 변수 : 0-드래그 아님 , 1-드래그 중
    let drag = 0;
    // (2) 클릭시 위치변수 (드래그 시작점 - 실제 할당값)
    let point = 0;
    // (3) 이벤트 발생횟수 조절 변수 : 0-허용, 1-불허용
    let protEvt = 0;

    /////////////////////////////////////////////////////////////////////
    // 2. 드래그 이벤트 함수 설정하기

    // (1) 드래그 중 이벤트 함수
    // - 이벤트 종류 : mousemove - touchmove
    cbx.on('mousemove touchmove', e=>{

        // 0. 이벤트 횟수 줄이기 : 광클금지원리와 같음!
        if(protEvt) return; // 돌아가
        protEvt = 1; // 잠금 - 이벤트 하나만 통과!
        setTimeout(()=>protEvt = 0, 30); // 해제
        // 타임아웃 시간에 따라 이벤트수를 조절할 수 있다.


        // 1. x축 위치값
        let pos = e.pageX || e.changedTouches[0].pageX;
        // changedTouches[0].pageX - 모바일용 x축 위치값
        // console.log('pos', pos);
        
        // 2. 방향 알아내기 
        // 계산방법 : 처음클릭위치 - 현재위치
        // point변수 - pos변수
        // 전제조건 : grag === 1 일때만
        if(drag){
            // 방향변수
            let dir = point - pos < 0? 0 : 1;
            console.log('현재 방향은 ? (dir) :', dir);

            // 이미지넘김 함수 호출 : 방향보냄
            rotateCar(dir);
        }
    });

    // (2) 드래그 상태 시작 이벤트 함수 /////////////////
    // - 이벤트 종류 : mousedown - touchstart
    cbx.on('mousedown touchstart', e=>{
        // 1. 드래그 상태 값 변경
        drag = 1;

        // 2. x축 처음 위치값 업데이트
        point = e.pageX || e.changedTouches[0].pageX;

        // 3. 커서 움켜쥔 모양
        cbx.css({
            cursor : 'grabbing'
        });
    });
    
    // (3) 드래그 상태 시작 이벤트 함수 /////////////////
    // - 이벤트 종류 : mouseup - touchend
    // 마우스가 나갈때도 해제처리해야 드래그하다가 나갈때 괜찮음
    cbx.on('mouseup mouseout touchend', e=>{
        // 1. 드래그 상태 값 변경
        drag = 0;

        // 2. 커서 편손 모양
        cbx.css({
            cursor : 'grab'
        });
    });

    // 이미지 순번 변수
    let fnum = 0;
    // 이미지박스의 이미지 
    const carImg = cbx.find('img');

    // (4) 이미지 순번 변경함수
    const rotateCar = dir => {
        // [ 1. funm 증감전 숨기기 -> 현재 이미지 숨기기 ]
        carImg.eq(fnum).hide();

        // [ 2. 이미지번호 증감처리 ]
        // dir : 방향 
        // dir -> 1이면 오른쪽에서 왼쪽 드래그 : 정방향
        // -> 사진번호가 증가
        // (1) 이미지 순번 증가 처리
        if(dir){
            fnum++;
            if(fnum == 50) fnum = 0;
            // 마지막 순번은 49번이므로 50번에서는 0으로 변경
        }
        // (2) 이미지 순번 감소 처리
        // dir -> 0이면 왼쪽에서 오른쪽 드래그 : 역방향
        else{
            fnum--;
            if(fnum == -1) fnum=49;
                // 첫순번은 0이므로 -1이면 마지막순번 49번으로 변경
        }
        console.log('순번 fnum :', fnum);

        // [ 3. funm 증감후 보기기 -> 다음 이미지 보이기 ]
        carImg.eq(fnum).show();
    };
});