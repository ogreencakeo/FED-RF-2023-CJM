// 캐릭터페이지 메인컨텐츠

import { Banner } from "./Banner";

export function News(/*props*/){
    return(
        <>
            <h1 style={{textAlign : 'center'}}>뉴스 페이지</h1>
            <Banner category="NEWS" />
            {/* <Banner category={props.cat} /> */}
        </>
    );
} /////////////// 코믹스 컴포넌트 ////////