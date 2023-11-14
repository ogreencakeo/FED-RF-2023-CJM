// 캐릭터페이지 메인컨텐츠

import { Banner } from "../modules/Banner";

export function Comics(/*props*/){
    return(
        <>
            <h1 style={{textAlign : 'center'}}>코믹스 페이지</h1>
            <Banner category="COMICS" />
            {/* <Banner category={props.cat} /> */}
        </>
    );
} /////////////// 코믹스 컴포넌트 ////////