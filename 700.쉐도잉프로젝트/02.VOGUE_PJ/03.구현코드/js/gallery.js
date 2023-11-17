// 보그 PJ 갤러리 페이지 JS - gallery.js
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        // 자동넘김 시간
        delay: 2500,
        // 상호작용(건들여 놓기)에 대한 재가동 없애기 안씀 (false)
        disableOnInteraction: false,
    },
    // 한번에 보일 슬라이드 수
    slidesPerView: 3,
    // 사이 간격
    spaceBetween: 30,
    // 하단블릿
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // 양쪽 이동 버튼
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // 루프처리
    loop: true,
    // 화면크기별 분기
    breakpoints: {
        // when window width is >= 200px
        200: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 700px
        700: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >= 1000px
        1000: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

// 스와이퍼의 기능을 외부에서 사용하기 위해
// 스와이퍼 생성시 변수에 할당한 것임!
// https://swiperjs.com/swiper-api
// 본 사이트 API를 참조하여 여러가지 설정 및 메서드를
// 사용하여 기능 외부에 부여할 수 있다.

// 예) 상단 타이틀을 클릭하면 다음 슬라이드로 이동
// swiper.slideNext();
// $('.stit').click(()=>swiper.slideNext())
// $('.stit').click(()=>swiper.slidePrev())
$('.stit').click(()=>swiper.stop())