// 공통패션 서브페이지 컨텐츠 컴포넌트

import { useEffect } from "react";

export function Fashion(props){
    // props.cat - 서브 카테고리명

    useEffect(()=>{
        document.querySelector('html').style.overflow = 'visible';
        document.querySelector('body').style.overflow = 'visible';
    }, []);

    return(
        <>
            <h2 style={{height:'300vh'}}>{props.cat}</h2>
        </>
    );
}   // Fashion 컴포넌트 //////