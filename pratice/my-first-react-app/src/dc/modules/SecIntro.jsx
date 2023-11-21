import { useContext } from "react";
import { dcCon } from "./dcContext";
import {secIntroData} from '../data/sec_intro';

import '../../css/sec_intro.css';

export function SecIntro(){
    const myCon = useContext(dcCon);

    const selData = secIntroData;

    return(
        <>
            <section className="sec-intro">
                {
                    selData.map((v,i) => (
                        <div key={i}>
                            <div className="imbx">
                                <img src={v.isrc} alt={v.tit.split('^')[0]} />
                            </div>
                            <div className="titbx">
                                <h3>{v.tit.split('^')[0]}</h3>
                                <h2>{v.tit.split('^')[1].toUpperCase()}</h2>
                            </div>
                            <div className="btnbx">
                                <button onClick={()=>myCon.chgPate(v.link)}>
                                    {v.btn.toUpperCase()}
                                </button>
                            </div>
                        </div>
                        )
                    )
                }
            </section>
        </>
    )

}