import {MainCont} from '.././pages/MainCont';
import {MenSub} from '.././pages/MenSub';
import {WomenSub} from '.././pages/WomenSub';
import {StyleSub} from '.././pages/StyleSub';
// Pilot PJ 메인영역 공통 컴포넌트

export function MainArea(props){
    return(
        <>
            <h1>메인영역</h1>
            {props.page == 'main' && <MainCont />}
            {props.page == 'men' && <MenSub />}
            {props.page == 'women' && <WomenSub />}
            {props.page == 'style' && <StyleSub />}
        </>
    );
} // MainArea 컴포넌트 /////////////