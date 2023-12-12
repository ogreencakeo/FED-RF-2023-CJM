// DC.com 레이아웃 컴포넌트 : 실제적인 최상위 컴포넌트임!

import { TopArea } from "./TopArea";
import { MainArea } from "./MainArea";
import { FooterArea } from "./FooterArea";

// Context API 불러오기
import { dcCon } from "../modules/dcContext";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { useCallback } from "react";

export function Layout() {
    // ************ Hook 상태관리 변수 **************
    // 1. 로그인 상태 체크변수 : 로컬스 'minfo' 초기할당
    const [logSts, setLogSts] = useState(localStorage.getItem("minfo"));

    // 랜더링 후(화면 보이기 전) 실행 구역 ////////////////
    // useLayoutEffect 훅을 사용하여 렌더링 후(화면이 보이기 전)
    // 실행되는 부분에서 페이지 이동시 스크롤 위치를 상단으로 이동시키는 로직이 있습니다.
    useLayoutEffect(() => {
        // 페이지 이동시 스크롤 위치 상단이동
        window.scrollTo(0, 0);
    }); // useEffect ////////////////

    // 라우터 이동객체 설정
    const goNav = useNavigate();

    // 라우터 이동함수 : pgName - 페이지 이름 / param - 전달값
    // 메모이제이션 되는 TopArea 컴포넌트에 제공하는 함수가
    // useCallback을 사용한 메모이제이션 처리되어야 변경없는 것을
    // 체크하여 함수를 업데이트 하지 않는다!
    // useCallback(기존익명함수, [의존성])
    // -> 의존성 변수가 없을 때 비워놓아도 효과가 있음! (단, 형식은 맞출것)
    const chgPage = useCallback((pgName, param) => goNav(pgName, param), []);

    /*************************************************  
        [ 컨텍스트 API 공유값 설정 ]
        1. chgPage 함수 : 라우터 이동 기능
        2. setLogSts : 로그인 상태값 업데이트
    *************************************************/

    // 리턴코드 ///////////////////////
    return (
        <dcCon.Provider value={{ chgPage, setLogSts }}>
            {/* 메모이제이션 관리를 위해 함수를 
                컨텍스트 방식이 아닌 속성으로 직접 보냄! */}
            <TopArea chgPageFn={chgPage} logSts={logSts} />
            <MainArea />
            <FooterArea />
        </dcCon.Provider>
    );
} // Layout 컴포넌트 /////////////////
