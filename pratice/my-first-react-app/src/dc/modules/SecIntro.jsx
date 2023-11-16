import { Link } from 'react-router-dom';
import '../../css/sec_intro.css';
import {secIntroData  } from '../data/sec_intro';

export function SecIntro(){
    const selData = secIntroData;
    return(
        <>
            <section className='sec-intro'>
                {
                    selData.map((v, i) => (
                        <div key={i}>
                            <div className="imbx">
                                <img src={v.isrc} alt={v.tit.split('^')[0]} />
                            </div>
                            <div className="titbx">
                                <h3>{v.tit.split('^')[0]}</h3>
                                <h3>{v.tit.split('^')[1].toUpperCase()}</h3>
                            </div>
                            <div className="btnbx">
                                <Link to={v.link}>
                                    <button>{v.btn.toUpperCase()}</button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </section>
        </>
    )
}