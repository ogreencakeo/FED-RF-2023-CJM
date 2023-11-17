// DC.com 레이아웃 컴포넌트 : 실제적인 최상위 컴포넌트임!

import { TopArea } from './TopArea';
import { MainArea } from './MainArea';
import { FooterArea } from './FooterArea';

// Context API 불러오기
import { dcCon } from '../modules/dcContext';
import { useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';

export function Layout(){

    // 랜더링 후 실행 구역 ////////////////
    useLayoutEffect(()=>{
        // 페이지 이동시 스크롤 위치 상단이동
        window.scrollTo(0, 0);
    }); // useEffect ////////////////

    // 라우터 이동객체 설정
    const goNav = useNavigate();

    // 라우터 이동함수
    const chgPage = (txt) => goNav(txt);
    
    /*************************************************  
        [ 컨텍스트 API 공유값 설정 ]
        1. chgPage 함수 : 라우터 이동 기능
    *************************************************/

    // 리턴코드 ///////////////////////
    return(
        <dcCon.Provider value={{chgPage}}>
            <TopArea />
            <MainArea />
            <FooterArea />
        </dcCon.Provider>
    );
} // Layout 컴포넌트 /////////////////