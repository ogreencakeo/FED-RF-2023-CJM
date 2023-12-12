// 상단영역 컴포넌트
// GNB 데이터
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../modules/Logo";
import { menu } from "../data/gnb";

// 컨텍스트 API
import { dcCon } from "../modules/dcContext";

// 제이쿼리
import $ from "jquery";

// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useContext, useState } from "react";
import { memo } from "react";

// 메모이제이션 적용하기 ////////////////
// -> 그러나 단순히 적용하면 효과가 없음
// 이유는? 컨텍스트 API가 전역적인 함수 / 변수를 전달하고 있어서
// 매번 새롭게 리랜더링 됨으로 인해 메모이제이션 갱신을
// 하게끔 하기에 효과가 없는것
// -> 방법은? 컨텍스트 API를 사용하지 말고
// props로 전달하는 방식으로 전환하면 효과를 볼 수 있다.
// -> React.memo는 전달속성이 변경됨을 기준하여
// 메모이제이션 기능을 제공하기 때문이다!
// -> 전달되는 함수가 반드시 useCallback() 처리가 되어야 한다!

// export function TopArea() {
export const TopArea = memo(({ chgPageFn, logSts }) => {
    // 보통 props 등 전달변수만 쓰면 하위 속성명으로
    // 값을 전달하지만 중괄호{}를 사용하면 속성명을
    // 직접 사용할 수 있다.

    // 컴포넌트 호출 확인
    console.log("상단영역이양~!");

    // 컨텍스트 API 사용
    // const myCon = useContext(dcCon);

    // 검색 관련 함수들 //////////////////////
    // 1. 검색창 보이기 함수
    const showSearch = (e) => {
        // 0. a요소 기본기능 막기(리랜더링도 막는다!)
        e.preventDefault();
        // 1. 검색창 보이기
        $(".searchingGnb").show();
        // 2. 입력창에 포커스 보내기
        $("#schinGnb").focus();
    }; // showSearch 함수 ////////////////////

    // 2. 입력창에 엔터키를 누르면 검색함수 호출
    // 검색 입력 창에서 키보드 입력 시 호출되며, Enter 키를 눌렀을 때 검색어를 추출하고,
    // 검색어가 비어있지 않으면 goSearch 함수를 호출하여 검색 페이지로 이동합니다.
    const enterKey = (e) => {
        // console.log(e.target);

        // 엔터키는 'Enter'문자열을 리턴함!
        if (e.key === "Enter") {
            // 입력창의 입력값 읽어오기 : val() 사용!
            let txt = $(e.target).val().trim();
            console.log("TopArea컴포넌트 enterkey함수 txt :", txt);
            // 빈 값이 아니면 검색함수 호출 (검색어 전달!)
            if (txt !== "") {
                // 입력창 비우기 + 부모박스 닫기
                $(e.target).val("").parent().hide();
                // 검색 보내기
                goSearch(txt);
            }
        } // if ///////////
    }; // enterKey 함수 ////////////////////

    // 3. 검색 페이지로 검색어와 함께 이동하기
    const goSearch = (txt) => {
        // txt - 검색어
        console.log("나는 검색하러 간다규~!!!");
        // 라우터 이동함수로 이동하기 : 컨텍스트 API 사용
        chgPageFn("/schpage", { state: { keyword: txt } });
    }; // goSerach 함수 //////////////////

    return (
        <>
            {/* 1.상단영역 */}
            <header className="top-area">
                {/* 네비게이션 GNB파트 */}
                <nav className="gnb">
                    <ul>
                        {/* 1. 로고 컴포넌트 */}
                        <li>
                            <Logo logoStyle="top" />
                        </li>
                        {/* 2. GNB메뉴 데이터 기반으로 li태그 생성하기 */}
                        {menu.map((v, i) => (
                            <li key={i}>
                                {
                                    // 하위메뉴가 있으면 일반 a요소에 출력
                                    // 없으면 Link 라우팅 출력
                                    v.sub ? <a href="#">{v.txt}</a> : <Link to={v.link}>{v.txt}</Link>
                                }
                                {
                                    // 서브메뉴 데이터가 있으면 하위 그리기
                                    v.sub && (
                                        <div className="smenu">
                                            <ol>
                                                {v.sub.map((v, i) => (
                                                    <li key={i}>
                                                        <Link to={v.link}>{v.txt}</Link>
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>
                                    )
                                }
                            </li>
                        ))}
                        {/* 3. 검색, 회원가입, 로그인 링크 */}
                        <li style={{ marginLeft: "auto" }}>
                            {/* 검색입력박스 */}
                            <div className="searchingGnb">
                                {/* 검색버튼 돋보기 아이콘 */}
                                <FontAwesomeIcon icon={faSearch} className="schbtnGnb" title="Open Search" />
                                {/* 입력창 */}
                                <input id="schinGnb" type="text" placeholder="Filter by keyword" onKeyUp={enterKey} />
                            </div>

                            {/* 검색기능링크 - 클릭시 검색창 보이기 */}
                            <a href="#" onClick={showSearch}>
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                        </li>
                        {
                            /* 회원가입, 로그인은 로그인 아닌 상태일때 나옴 */
                            logSts === null && (
                                <>
                                    <li>
                                        <Link to="/member">JOIN US</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">LOGIN</Link>
                                    </li>
                                </>
                            )
                        }
                        {
                            /* 회원가입, 로그인은 로그인 상태일때 로그아웃버튼만 보임 */
                            logSts !== null && (
                                <>
                                    <li>
                                        <a href="#">LOGOUT</a>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                    {/* 모바일용 햄버거 버튼 */}
                    <button className="hambtn"></button>
                </nav>
            </header>
        </>
    );
}); // TopArea 컴포넌트 ////////////////////////////
