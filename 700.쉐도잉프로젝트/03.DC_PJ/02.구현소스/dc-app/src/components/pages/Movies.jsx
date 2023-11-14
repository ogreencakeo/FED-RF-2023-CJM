// 뮤비페이지 메인컨텐츠

import { Banner } from "../modules/Banner";

export function Movies(/*props*/){
    return(
        <>
            <h1 style={{textAlign : 'center'}}>뮤비 페이지</h1>
            <Banner category="MOVIES" />
            {/* <Banner category={props.cat} /> */}
        </>
    );
} /////////////// 코믹스 컴포넌트 ////////