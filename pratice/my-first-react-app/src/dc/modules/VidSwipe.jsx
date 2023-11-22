import { SwiperVid } from '../plugin/SwiperVid.jsx';
import '../../css/vid_swipe.css';
export function VidSWipe(props){

    const catTit = {
        main : 'LATEST TRAILERS, CLIPS & MORE',
        movies : 'TRAILERS, CLIPS AND MORE'
    };

    return(
        <>
            <section className="vid-swbox">
                <h2 className="tit">{catTit[props.cat]}</h2>
                <SwiperVid cat={props.cat} />

                <section className="vid-bx">
                    <div className="play-vid">
                        <h2 className="ifr-tit"></h2>
                        <iframe src="" allow="autoplay"></iframe>
                        <button className="cbtn">×</button>
                    </div>
                </section>
            </section>
        </>
    );
}