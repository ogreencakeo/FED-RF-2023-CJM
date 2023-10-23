// 제이쿼리 UI 드래그 & 드롭 기능 활용하기 ///////////////

// 제이쿼리 코드 구역 : html 태그 로딩후 실행 구역
$(()=>{
    // 1. 드래그 기능 대상 : draggable
    const dgEle = $('.draggable');
    
    // 2. 드래그 기능 설정하기 : draggable() 메서드 호출
    // dgEle.draggable() -> 호출만 해도 드래그 기능은 됨
    // 드래그 기능 옵션은 {} 객체로 전달함
    dgEle.draggable({
        // 커서모양 '쥔 주먹' 표시
        cursor : 'grabbing', 
        // 드래그 대상 상위처리 (z-index)
        stack : '.draggable',
        // 이동중 투명도 설정
        opacity : 0.7
    });
    
    // 3. 상세 요구사항 반영하기
    // 드래그 중 포스트잍 이미지 변경하기
    // .invert를 .draggable에 주면 배경 이미지 변경됨
    // 제이쿼리에 미리 만들어지지 않은 이벤트는 일반적으로 
    // on(이벤트명, 함수) -> 이 메서드를 사용함

    // 3-1. 드래그 시작 이벤트 : dragstart -> 이미지 변경
    dgEle.on('dragstart', function(){
        // console.log('드래그 시작 :', this);

        // 클래스 .invert 넣기
        $(this).addClass('invert');
    }); 

    // 3-2. 드래그 종료 이벤트 : dragstop -> 이미지 복귀
    dgEle.on('dragstop', function(){
        // console.log('드래그 끝 :', this);

        // 클래스 .invert 지우기
        $(this).removeClass('invert');
    }); 

}); // draggable 메서드 //////////////



