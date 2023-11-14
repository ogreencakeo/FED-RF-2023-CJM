// 메인페이지 메인컨텐츠

import { Banner } from "../modules/Banner";

export function Main(/*props*/){
    // cat 속성으로 메뉴분류 전달
    return(
        <>
            <h1 style={{textAlign : 'center'}}>메인 페이지</h1>
            {/* Math.ceil(Math.random()*3) : 1~3중 임의의 난수를 발생함 
            결과적으로 'main1'/'main2'/'main3'중 하나를 불러온다. */}
            <Banner category={"main" + Math.ceil(Math.random()*3)} />
            {/* <Banner category={props.cat} /> */}
        </>
    );
} /////////////// Main 컴포넌트 ////////