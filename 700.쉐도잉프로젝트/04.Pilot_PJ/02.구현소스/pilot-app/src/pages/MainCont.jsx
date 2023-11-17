// 메인 페이지 컨텐츠 컴포넌트

import { useEffect } from "react";
import { Banner } from "../modules/Banner";

// 자동스크롤 JS 불러오기
import { autoScroll } from "../func/jquery-autoScroll";

// 드래그 배너 JS 불러오기
import { dragBanner } from "../func/drag_banner";
import { FashionIntro } from "../modules/FashionIntro";

export function MainCont() {
    useEffect(() => {
        // 랜더링 후 한번만 적용
        console.log("랜더링 OK!");
        // 자동 스크롤 호출
        autoScroll();

        // 드래그 배너 호출
        dragBanner();
    }, []); // useEffect
    return (
        // 메인 페이지일때만 자동 스크롤 기능 적용함
        <>
            {/* 1. 배너 페이지 */}
            <section id="ban" className="page" style={{ background: "lightblue" }}>
                <Banner />
            </section>
            {/* 2. 남성패션 페이지 */}
            <section className="page">
                <FashionIntro cat="men" />
            </section>
            {/* 3. 여성패션 페이지 */}
            <section className="page">
                <FashionIntro cat='women' />
            </section>

        </>
    );
} // MainCont 컴포넌트 //////
