import { useContext, useEffect, useRef } from "react";

// 컨텍스트 API 불러오기
import { pCon } from "./PilotContext";

// 신상품 데이터 가져오기
import { sinsangData } from "../data/sinsang";

import $ from "jquery";

// 신상품 컴포넌트 /////////////////////
export function SinSang({ cat, chgItemFn }) {
    // cat - 카테고리 분류명
    // chgItemFn - 선택 품정 정보 변경 부모함수

    // 이전 카테고리 저장용 참조변수
    const afterCat = useRef(null);

    // 신상품 리스트 이동함수 사용변수 ///////
    // 위치값 변수 (left 값) - 리랜더링시 기존값을 유지하도록
    // -> useRef를 사용한다 -> 변수명.current로 사용!
    const lpos = useRef(0);
    // 재귀호출 상태값(1-호출, 0-멈춤)
    const callStst = useRef(1);

    // 확인
    console.log('신상 cat :', cat, ', 신상 after cat :', afterCat.current);

    // 들어온 cat 파라미터 값과 이전 cat을 저장한 afterCat 값이 다를때
    // 새로운 cat으로 변경되었으므로 초기화를 실행함
    if(cat !== afterCat.current){
        // 신상 흘러가기 변수 초기화
        lpos.current = 0;
        // 신상 멈춤 / 가기 상태변수 초기화
        callStst.current = 1;
    }

    // cat을 afetCat에 담아서 다음번에 비교하게 한다.
    afterCat.current = cat;

    // 컨텍스트 API 사용하기
    const myCon = useContext(pCon);

    // 선택 데이터 : 해당 카테고리 상품 데이터만 가져온다
    const selData = sinsangData[cat];
    console.log("sinsangData[cat] => selData :", selData);

    const makeList = () => {
        // 코드 담을 배열
        let temp = [];
        // 원하는 반복수 만큼 for문 실행하여 배열에 JSX태그 담기
        for (let x = 0; x < 9; x++) {
            temp[x] = (
                <li
                    className={`m${x + 1}`}
                    key={x}
                    onMouseEnter={showInfo}
                    onMouseLeave={removeInfo}
                    onClick={(e) => {
                        e.preventDefault();
                        chgItemFn("m" + (x + 1));
                    }}
                >
                    <a href="#">
                        <img src={`./images/goods/${cat}/m${x + 1}.png`} alt="신상품" />
                    </a>
                </li>
            );
        } // for //////////
        // JSX 태그를 담은 배열을 리턴 -> 자동태그변환!
        return temp;
    }; // makeList 함수 ////////////////

    // 상품에 오버시 상품 정보를 보여주는 함수 ////
    const showInfo = (e) => {
        // 대상
        const tg = $(e.currentTarget);
        // 1. 이벤트가 발생한 li의 class 읽어오기 (상품정보객체의 키)
        let gKey = tg.attr("class");
        // console.log('나야나! selData[gKey] :', selData[gKey]);

        // 2. 상품 정보박스를 만들고 보이게 하기
        // 마우스 오버된 li 자신에 넣어줌
        tg.append(`<div class='ibox'></div>`);

        console.log("selData[gKey].split(" ^ ") :", selData[gKey].split("^"));

        // 3. 현재 li에 만든 .ibox에 데이터 넣기 + 등장
        tg.find(".ibox")
            .html(selData[gKey].split("^").map((v, i) => `<div>${i == 2 ? addComma(v) + "원" : v}</div>`))
            // 등장애니
            .animate(
                {
                    top: "110%",
                    opacity: 1,
                },
                300
            );
    }; // showInfo 함수 ////////////

    //정규식함수(숫자 세자리마다 콤마해주는 기능)
    function addComma(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // 정보박스 지우기 함수
    const removeInfo = (e) => {
        $(e.currentTarget).find(".ibox").remove();
    };

    // [ 신상품 리스트 이동함수 ]
    const flowList = (ele) => {
        // ele - 움직일 대상
        // console.log("flowList ele :", ele);
        // 대상의 left값을 1씩 감소함
        lpos.current--;

        // 이미지 박스 한개가 나가면 잘라서 맨뒤로 보냄
        if (lpos.current < -300) {
            // 위치값 초기화 (-301일때 0으로 변경!)
            lpos.current = 0;
            // 첫번째 li 맨뒤로 이동
            ele.append(ele.find("li").first());
        } // if /////////////

        // 적용함
        ele.css({ left: lpos.current + "px" });

        // 재귀호출
        if (callStst.current) setTimeout(() => flowList(ele), 40);
    }; // flowList /////////////////

    // 랜더링 후 한번만 실행구역 //////////////
    useEffect(() => {
        // 대상선정 : .flist

        // 신상품 리스트 이동 함수 호출!
        flowList($(".flist"));
    }); // useEffect ////////

    // 리턴 코드 ///////////////
    return (
        <>
            <h2 className="c1tit">
                NEW MEN'S ARRIVAL
                <button onClick={() => myCon.chgPgName("glist")}>전체리스트</button>
            </h2>
            <div
                className="flowbx"
                onMouseOver={() => (callStst.current = 0)}
                onMouseOut={() => {
                    callStst.current = 1;
                    flowList($('.flist'));
                }}
            >
                <ul className="flist">{makeList()}</ul>
            </div>
        </>
    );
} // SinSang 컴포넌트 ////////////////
