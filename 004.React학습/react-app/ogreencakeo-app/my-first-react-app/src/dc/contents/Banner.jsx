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
        console.log('랜더링후~!');
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

    // 선택 데이터
    const selData = banData[props.category];
    
    // 코드리턴
    return(
        <div className="banner">
            {/* 이동 슬라이드 */}
            <ul className="slider">
                { makeList(selData) }
            </ul>
            {/* 이동버튼 + 슬라이드 블릿 : 슬라이드 2개 이상일때 보임 */}
{
            <>            
                {/* 양쪽이동 버튼 */}
                <button className="abtn lb">＜</button>
                <button className="abtn rb">＞</button>
                {/* 블릿 인디케이터 - 선택데이터의 개수만큼 만들기 */}
                <ol className="indic">
                    {
                        selData.map((v, i) => (
                            <li className={i==0? "on" : ""} key={i}>
                                {/* {v.src} */}
                            </li>
                        ))
                    }
                </ol>
            </>
}
        </div>
    );
} // Banner 컴포넌트 /////////
