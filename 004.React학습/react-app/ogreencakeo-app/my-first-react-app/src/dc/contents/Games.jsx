// 뮤비페이지 메인컨텐츠

import { Banner } from "./Banner";

export function Games(props){
    return(
        <>
            <h1 style={{textAlign : 'center'}}>게임 페이지</h1>
            <Banner category={props.cat} />
        </>
    );
} /////////////// 코믹스 컴포넌트 ////////