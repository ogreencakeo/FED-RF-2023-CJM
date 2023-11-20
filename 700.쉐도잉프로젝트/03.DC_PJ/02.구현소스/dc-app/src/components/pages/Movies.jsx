// 뮤비페이지 메인컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/VidIntro";
import { VidSwipe } from "../modules/VidSwipe";

export function Movies(/*props*/){
    return(
        <>
            {/* <Banner category={props.cat} /> */}
            <Banner category="MOVIES" />
            <VidIntro cat='MOVIES' cls='on' />
            <VidSwipe tit = 'TRAILERS, CLIPS AND MORE' />
        </>
    );
} /////////////// 코믹스 컴포넌트 ////////