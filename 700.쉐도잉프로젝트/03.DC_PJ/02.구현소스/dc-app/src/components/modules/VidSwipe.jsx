// DC PJ 비디오스와이프 컴포넌트

/*
    [ 구조정의 ]
    Root>
        section.vidswbox>
            ( h2.tit + <SwiperVid /> ) + 
            ( section.vidbx > 
                div.playvid > 
                    h2.ifrtit + iframe + button.cbtn )
*/

// 비디오스와이프 CSS 불러오기
import '../../css/vid_swipe.css';
export function VidSwipe(){

    // 리턴코드 /////////////////////////////////////////
    return(
        <>
        {/* 모듈 코드 */}
            <section className="vidswbox">
                {/* 1. 모듈 타이틀 */}
                <h2 className="tit"></h2>
                {/* 2. 스와퍼 컴포넌트 */}  
                
                {/* 3. 비디오 재생창 */}
                <section className="vidbx">
                    {/* 비디오 중앙박스 */}
                    <div className="palyvid">
                        {/* 비디오 타이틀 */}
                        <h2 className="ifrtit"></h2>
                        {/* 아이프레임 */}
                        <iframe src="" allow="autoplay"></iframe>
                        {/* 닫기 버튼 */}
                        <button className="cbtn"></button>
                    </div>
                </section>
            </section>
        </>
    );
} // vidSwipe 컴포넌트 /////////////