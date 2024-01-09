
// 배너데이터
import { banData } from "../data/banner";

export function Banner(props){

    const selData = banData[props.category];

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
        </div>
    );
}