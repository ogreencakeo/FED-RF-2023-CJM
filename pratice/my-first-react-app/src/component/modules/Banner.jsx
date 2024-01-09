
// 배너데이터
import { banData } from "../data/banner";

export function Banner(props){

    const selData = banData[props.category];

    const goSlide = (e) => {
        const tg = e.target;
        const sldBx = $(tg).siblings('.slider');
        const indic = $(tg).siblings('.indic').find('li');
        const sCnt = sldBx.find('li').length;


    };

    const makeList = (data) => {
        return data.map((v, i) => (
            <li key={i}>
                <img src={process.env.PUBLIC_URL + v.src} alt="ggg" />
                <section className="bantit">
                    <h3>{v.tit1}</h3>
                    <h2>{v.tit2}</h2>
                    <p>{v.cont}</p>
                    {v.btn != '' && <button>{v.btn}</button>}
                </section>
            </li>
        ));
    };

    return(
        <div className="banner">
            <ul className="slider">{makeList(selData)}</ul>
            {
                selData.length > 1 && (
                    <>
                        <button className="abtn lb" onClick={goSlide}>＜</button>
                        <button className="abtn rb" onClick={goSlide}>＞</button>
                        <ol className="indic">
                            {
                                selData.map((v, i) => (
                                    <li className={i==0? 'on' : '' } key={i}></li>
                                ))
                            }
                        </ol>
                    </>
                )
            }
        </div>
    );
}