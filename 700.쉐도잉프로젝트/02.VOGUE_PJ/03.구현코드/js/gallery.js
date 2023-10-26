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
});
