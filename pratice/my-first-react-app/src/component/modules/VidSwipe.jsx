// 비디오스와이프 CSS 불러오기
import '../../css/vid_swipe.css';
import { SwiperVid } from '../plugin/SwiperVid';

export function VidSwipe(props){
    const catTit = {
        main : 'LATEST TRAILERS, CLIPS & MORE',
        movies : 'TRAILERS, CLIPS AND MORE'
    }

    return(
        <>
            <section className="vid-swbx">
                <h2 className="tit">{catTit[props.cat]}</h2>
                <SwiperVid cat={props.cat} />
                <section className="vid-bx">
                    <div className="play-vid">
                        <div className="ifr-tit"></div>
                        <iframe src="" allow="autoplay"></iframe>
                        <button className="cbtn">X</button>
                    </div>
                </section>
            </section>
        </>
    )
}