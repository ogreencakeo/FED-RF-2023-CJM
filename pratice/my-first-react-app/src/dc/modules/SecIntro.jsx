import { secIntroData } from "../data/sec_intro";
import '../../css/sec_intro.css';
import { useContext } from "react";
import { dcCon } from "./dcContext";

export function SecIntro(){
    const selData = secIntroData;
    const myCob = useContext(dcCon);
    return(
        <section className="sec-intro">
            {
                selData.map((v, i) =>
                <div key={i}>
                    <div className="imbx">
                        <img src={v.isrc} alt={v.tit.split('^')[0]} />
                    </div>
                    <div className="titbx">
                        <h3>{v.tit.split('^')[0]}</h3>
                        <h3>{v.tit.split('^')[1].toUpperCase()}</h3>
                    </div>
                    <div className="btnbx">
                        <button onClick={()=>myCob.chgPage(v.link)}>
                            {v.btn.toUpperCase()}
                        </button>
                    </div>
                </div>
                )
            }
        </section>
    )
}