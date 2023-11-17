// 뮤비페이지 메인컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/VidIntro";

export function Games(/*props*/){
    return(
        <>
            {/* <Banner category={props.cat} /> */}
            <Banner category="GAMES" />
            <VidIntro cat='GAMES' cls='on'/>
        </>
    );
} /////////////// 코믹스 컴포넌트 ////////