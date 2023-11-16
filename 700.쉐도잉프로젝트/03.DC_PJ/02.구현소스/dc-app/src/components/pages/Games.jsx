// 뮤비페이지 메인컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/VidIntro";

export function Games(/*props*/){
    return(
        <>
            <VidIntro cat='GAMES' cls='on'/>
            <Banner category="GAMES" />
            {/* <Banner category={props.cat} /> */}
        </>
    );
} /////////////// 코믹스 컴포넌트 ////////