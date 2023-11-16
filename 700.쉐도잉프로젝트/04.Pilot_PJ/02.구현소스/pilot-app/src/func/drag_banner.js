// 메인페이지 드래그(스와이프) 배너 기능함수

import $ from "jquery";
window.jQuery = $;
require("jquery-ui-dist/jquery-ui");
require("jquery-ui-touch-punch/jquery.ui.touch-punch");

export function dragBanner() {
    // 드래그 기능 넣기
    // 대상 .slide
    const slide = $(".slide");
    // 커버
    const cover = $(".cover");

    slide.draggable({ axis: "x" });

    // 드래그가 끝났을 때 슬라이드 위치
    slide.on("dragstop", () => {
        // 광드래그 막기 커버
        $(".cover").show();

        // 비교를 위한 윈도우 가로값
        let winW = $(window).width();
        // 현재 슬라이드 left 값
        let pos = slide.offset().left;
        // 이동차이수 = 현재 슬라이드 위치값 (양수) - 윈도우 가로값
        let diff = Math.abs(pos) - winW;
        // 결과해석 : 양수-> 왼쪽으로 이동 / 음수 - 오른쪽으로 이동

        // 기준값 : 화면크기를 기준한 부분
        let gap = winW / 10;
        console.log("드래그 멈춰(pos) :", pos, ", winW :", winW, ", diff :", diff);

        // 왼쪽으로 이동하기
        if (diff > gap) {
            slide.animate({ left: "-200%" }, 800, "easeOutQuint", () => {
                // 맨앞 li 맨뒤로 이동
                slide
                    .append(slide.find("li").first())
                    // left값 -100%(처음값)
                    .css({ left: "-100%" });
                // 커버 제거
                cover.hide();
            });
        }
        // 오른쪽으로 이동하기
        else if (diff < -gap) {
            slide.animate({ left: "0" }, 800, "easeOutQuint", () => {
                // 맨뒤 li 맨앞으로 이동
                slide
                    .prepend(slide.find("li").last())
                    // left값 -100%(처음값)
                    .css({ left: "-100%" });
                // 커버 제거
                cover.hide();
            });
        }
        // 제자리로
        else {
            slide.animate({ left: "-100%" }, 300, "easeOutQuint", () => {
                // 커버 제거
                cover.hide();
            });
        }
    }); // dragstop ////////////
} // dragBanner 함수 ///////////////////////////
