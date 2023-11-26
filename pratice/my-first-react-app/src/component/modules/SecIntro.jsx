
// 섹션소개모듈 데이터 가져오기
import { secIntroData } from "../data/sec_intro";

// 섹션소개모듈용 CSS 불러오기
import '../../css/sec_intro.css';

// 컨텍스트 API를 사용하는 컴포넌트 파일에서 불러옴!
import { dcCon } from "./dcCon";
import { useContext } from "react";

export function SecIntro(){
    const myCon = useContext(dcCon);
    const selData = secIntroData;
    return(
        <>
            <section className="sec-intro">
                {
                    selData.map((v, i) =>
                        <div key={i}>
                            <div className="imbx">
                                <img src={v.isrc} alt={v.tit.split('^')[0]} />
                            </div>
                            <div className="titbx">
                                <h3>{v.tit.split('^')[0]}</h3>
                                <h2>{v.tit.split('^')[1].toUpperCase()}</h2>
                            </div>
                            <div className="btnbx">
                                <button onClick={()=>myCon.chgPage(v.link, {})}>
                                    {v.btn.toUpperCase()}
                                </button>
                            </div>
                        </div>
                    )
                }
            </section>
        </>
    );
}