// 캐릭터페이지 메인컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/VidIntro";

export function Comics(/*props*/){
    return(
        <>
            {/* <Banner category={props.cat} /> */}
            <Banner category="COMICS" />
            <VidIntro cat='COMICS' cls ='on' />
        </>
    );
} /////////////// 코믹스 컴포넌트 ////////