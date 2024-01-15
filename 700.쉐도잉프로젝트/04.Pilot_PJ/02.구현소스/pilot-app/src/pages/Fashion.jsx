// 공통패션 서브페이지 컨텐츠 컴포넌트

import { useContext, useEffect, useLayoutEffect, useRef } from "react";

// 공통 서브 CSS 불러오기
import "../css/fashion.css";
import { SwiperApp } from "../plugin/SwiperApp";

// 컨텍스트 API
import { pCon } from "../modules/PilotContext";

// 데이터 셋업을 위한 gnb 데이터 불러오기
import { gnbData } from "../data/gnb";

// 제이쿼리
import $ from "jquery";
import { SinSang } from "../modules/SinSang";
import { ItemDetail } from "../modules/ItemDetail";
import { useState } from "react";

// 부드러운 스크롤 JS
import { scrolled, setPos } from "../func/smoothScroll24";

// 리액트용 패럴랙스 - 설치 : npm i react-parallax
import { Parallax } from "react-parallax";
import { FashionIntro } from "../modules/FashionIntro";
// 설명 : https://www.npmjs.com/package/react-parallax

export function Fashion(props) {
    // 컨텍스트 API 사용!
    const myCon = useContext(pCon);

    // props.cat - 서브 카테고리명
    console.log("패션 페이지 cat :", props.cat);

    useEffect(() => {
        // [ 부드러운 스크롤 함수 이벤트 설정하기 ]
        document.addEventListener("mousewheel", scrolled, {
            passive: false,
        });
        // 이전 버전 파이어폭스 브라우저 이벤트 처리
        document.addEventListener("DOMMouseScroll", scrolled, {
            passive: false,
        });
        // 이벤트 설정시 passive:false 설정의 이유는
        // 기본 설정값은 true이고 이것은 window, document, body
        // 이 세가지에 preventDefault() 기본 작동 막기를 할 경우
        // 이것을 사용할 수 없도록 설정된 값이 true다
        // passive모드를 false로 꺼놔야 window, document, body에
        // 대한 기본 막기가 가능함! (여기서는 스크롤 기능임!)

        // 부드러운 스크롤 위치값 초기화
        setPos(0);

        // 스크롤바 생성하기
        $("html,body").css({ overflow: "visible", overflowX: "hidden" });

        // 로고클릭시 페이지이동 : pgName 변경 -> chgPgName()
        $("#logo a").click(() => myCon.chgPgName("main"));

        // 상품 상세보기 박스 처음에 숨기기
        // $('.bgbx').hide();

        // 소멸자 구역 ///////
        return () => {
            // 컴포넌트 소멸시 이벤트 삭제
            // 부드러운 스크롤 함수 이벤트 설정하기
            document.removeEventListener("mousewheel", scrolled, {
                passive: false,
            });
            document.removeEventListener("DOMMouseScroll", scrolled, {
                passive: false,
            });
            // 부드러운 스크롤 위치값 초기화
            setPos(0);

            // 등장액션 체크함수 이벤트 해제하기
            window.removeEventListener('scroll', chkPos);
        };
    }, []); // useEffect //////////////

    

    // props.cat 카테고리가 변경될때만 맨 위로 값 변경!
    useLayoutEffect(() => {
        // 부드러운 스크롤 위치값
        setPos(0);
        // 윈도우 실제로 상단이동
        window.scrollTo(0, 0);

        // 열렸을 수 있는 상세 페이지 닫기
        $(".bgbx").hide();


        // 메뉴 클릭시 위치 이동하기
        $('.gnb a').on('click', e => {
            e.preventDefault();
            // 아이디 읽어오기
            let cid = $(e.currentTarget).attr('href');
            // 해당 아이디 위치값 
            let cpos = $(cid).offset().top;
            console.log(cpos);
            // 해당 위치로 이동 애니메이션 
            $('htmp, body').stop().animate({
                scrollTop : cpos + 'px'
            }, 600);

            // 부드러운 스크롤 위치값 씽크 맞춤
            setPos(cpos);
        });

        ////////////////////////////////
        // 스크롤 등장액션 만들기 ////////
        ////////////////////////////////
        // 등장액션 초기화 : 투명하고 약간 아래쪽에 배치
        setEle();
        // 등장액션은 원래위치로 복귀하며 투명도 회복 애니

        // 등장액션 체크함수 이벤트 설정하기
        window.addEventListener("scroll", chkPos);
    }, [props.cat]);

    // 등장액션 위치체크 및 적용함수
    const chkPos = () => {
        // 등장액션 대상은 모두 순회함!
        $(".sc-ani").each((idx, ele) => {
            // 화면기준 위치값 알아오기
            let cpos = retClient(idx);
            // 위치값이 화면에 1/3 위치보다 위로 올라오면 등장
            if (cpos < ($(window).height() / 3) * 2) {
                $(ele).css({
                    opacity: 1,
                    transform: "translateY(0)",
                }); // css ////////
            }
        });
    };

    // 위치값 리턴 함수 ////////////
    const retClient = (idx) => {
        console.log(idx);
        return document.querySelectorAll(".sc-ani")[idx].getBoundingClientRect().top;
    };

    // 등장액션 일괄 셋팅 ////////
    const setEle = () => {
        // 클래스명은 .sc-ani로 준 모든 요소를 초기화함.
        $(".sc-ani").css({
            opacity: 0,
            transform: "translateY(20%)",
            transition: "1s ease-in-out",
        });
    };

    //////////////////////////
    // 카테고리 이전것 저장변수 만들기
    const afterCat = useRef(null);
    console.log("패션cat:", props.cat, "/패션afterCat:", afterCat.current);

    // 카테고리가 변경시에만 위로이동!
    if (props.cat !== afterCat.current) setPos(0);

    // 이전카테고리 업데이트
    afterCat.current = props.cat;

    /////////////////////////
    // 후크 상태 변수
    const [item, setItem] = useState("m1");

    // 신상컴포넌트에서 상세 컴포넌트로 값을 전달하기 위한
    // 상태변수를 셋팅하여 함수로 이것을 변경하게 해준다.
    // 프롭스 펑션 다운
    const chgItem = (v) => {
        console.log("상품정보:", v);
        // 상태변수 업데이트
        setItem(v);
        // 상태박스 슬라이드 애니로 보이기
        $(".bgbx").slideDown();
    }; // chgItem 함수 ////////////

    // 리턴 코드 ////////////////
    return (
        <>
            {/* 1. 배너영역 */}
            <section id="ban" className="page">
                <SwiperApp cat={myCon.pgName} />
            </section>
            {/* 2. 신상품영역 */}
            <section id="c1" className={`cont c1 ${myCon.pgName}`}>
                <SinSang cat={myCon.pgName} chgItemFn={chgItem} />
            </section>
            {/* 2.5. 상세보기박스 */}
            <div className="bgbx">
                <ItemDetail goods={item} cat={props.cat} />
            </div>
            {/* 3. 패럴랙스 영역 : 리액트용 페럴랙스 적용 */}
            <section id="c2" className="cont">
                <Parallax
                    className="c2"
                    // 패럴랙스할 배경이미지 설정속성 bgImage
                    bgImage={`./images/sub/${props.cat}/02.special.png`}
                    // 패럴랙스 이동정도 조정 속성 strength
                    // 수치범위 : -500 ~ 1000 -> 높은 숫자는 반대방향
                    strength={100}
                >
                    <h2 className="c2tit sc-ani">2024 {gnbData[props.cat][1]}</h2>
                </Parallax>
            </section>
            {/* 4. 단일상품영역 */}
            <section id="c3" className="cont c3">
                <FashionIntro cat="sub" subcat={[props.cat, 0]} />
            </section>
            {/* 5. 스타일상품영역 */}
            <section id="c4" className="cont c4">
                <FashionIntro cat="sub" subcat={[props.cat, 1]} />
            </section>
        </>
    );
} //////// Fashion 컴포넌트 ///////
