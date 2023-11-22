import {MainCont} from '.././pages/MainCont';
import { Fashion } from '../pages/Fashion';

// Pilot PJ 메인영역 공통 컴포넌트

// 라우터 역할을 하는 MainArea 컴포넌트 ////////
export function MainArea(props){

    return(
        <>
            {
                // main이 아니면 서브 
                props.page == 'main'? <MainCont /> :
                <Fashion cat={props.page} />
            }
        </>
    );
} // MainArea 컴포넌트 /////////////