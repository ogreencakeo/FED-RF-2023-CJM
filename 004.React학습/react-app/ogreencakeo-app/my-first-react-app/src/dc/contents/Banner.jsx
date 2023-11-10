// DC.com 배너 컴포넌트

// 배너데이터
import { banData } from "../data/banner";

// 배너CSS
import '../../css/banner.css';
import { useEffect } from "react";

// 배너 컴포넌트 /////////////
export function Banner(props){
    // category - 카테고리 분류명(배너 데이터 선택)

    // 페이지 랜더링 후 실행구역
    useEffect(()=>{
        
    });

    // 리스트 만들기 함수
    const makeList = (data) => {
        console.log(data);
        return data.map((v, i) => (
        <li key={i}>
            <img src={v.src} alt="ㅎㅎ" />
        </li>
        ));
    };
    
    // 코드리턴
    return(
        <div className="banner">
            {/* 이동 슬라이드 */}
            <ul className="slider">
                { makeList(banData[props.category]) }
            </ul>
        </div>
    );
} // Banner 컴포넌트 /////////
