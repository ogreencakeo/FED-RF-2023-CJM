// 캐릭터페이지 메인컨텐츠

import { Banner } from "./Banner";

export function Character(/*props*/){
    return(
        <>
            <h1 style={{textAlign : 'center'}}>캐릭터 페이지</h1>
            <Banner category="CHARACTERS" />
            {/* <Banner category={props.cat} /> */}
        </>
    );
} /////////////// Main 컴포넌트 ////////