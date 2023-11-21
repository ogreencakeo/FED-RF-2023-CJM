import {vidIntroData} from '../data/vid_inrto';
import '../../css/vid_intro.css';
export function VidIntro(props){
    const selData = vidIntroData[props.cat];

    const linkCode = (data) => {
        return(
            <>
                {data.split('*')[0]}
                <a href={selData.link[1]} target='_blank'>
                    {selData.link[0]}
                </a>
                {data.split('*')[1]}
            </>
        )
    }
    return(
        <>
            <section className={`vidbox ${props.cls}`}>
                <div>
                    <div className="vb1">
                        <iframe src={selData.vsrc} title={selData.btit}></iframe>
                    </div>
                    <div className="vb2">
                        <h3>{selData.stit}</h3>
                        <h2>{selData.btit}</h2>
                        <p>{selData.sum}</p>
                        <p>
                            {selData.desc.indexOf('*') == -1? selData.desc : linkCode(selData.desc)}
                        </p>
                        <p>
                            {selData.sum.indexOf('*') == -1? selData.sum : linkCode(selData.sum)}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}