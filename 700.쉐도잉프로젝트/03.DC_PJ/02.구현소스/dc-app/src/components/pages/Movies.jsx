// 뮤비페이지 메인컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/VidIntro";
import { VidSwipe } from "../modules/VidSwipe";

export function Movies(/*props*/){
    return(
        <>
            {/* 1. 무비 페이지 배너 */}
            {/* <Banner category={props.cat} /> */}
            <Banner category="MOVIES" />
            {/* 2. 무비 페이지 비디오소개 */}
            <VidIntro cat='MOVIES' cls='on' />
            {/* 3. 무비 페이지 비디오스와이프 */}
            <VidSwipe cat='movies' />
        </>
    );
} /////////////// 코믹스 컴포넌트 ////////