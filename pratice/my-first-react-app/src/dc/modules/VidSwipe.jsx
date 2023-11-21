import '../../css/vid_swipe.css';
// import { SwiperVid } from "../../../../../700.쉐도잉프로젝트/03.DC_PJ/02.구현소스/dc-app/src/components/plugin/SwiperVid";

export function VidSwipe(props) {
    const catTit = {
        main: "LATEST TRAILERS, CLIPS & MORE",
        movies: "TRAILERS, CLIPS AND MORE",
    }
    return (
        <>
            <section className="vid-swbx"></section>
            <h2 className="tit">{catTit[props.cat]}</h2>
            {/* <SwiperVid cat={props.cat} /> */}
            <section className="vid-bx">
                {/* 비디오 중앙박스 */}
                <div className="play-vid">
                    {/* 비디오 타이틀 */}
                    <h2 className="ifr-tit"></h2>
                    {/* 아이프레임 */}
                    <iframe src="" allow="autoplay"></iframe>
                    {/* 닫기 버튼 */}
                    <button className="cbtn">×</button>
                </div>
            </section>

        </>
    )
}