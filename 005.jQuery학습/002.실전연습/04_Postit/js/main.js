// 제이쿼리 UI 드래그 & 드롭 기능 활용하기 ///////////////

// 제이쿼리 코드 구역 : html 태그 로딩후 실행 구역
$(()=>{
    // 1. 드래그 기능 대상 : draggable
    const dgEle = $('.draggable');
    // 2. 드래그 기능 설정하기 : draggable() 메서드 호출
    dgEle.draggable();
}); // JQB

