import {MainCont} from '.././pages/MainCont';
import { Fashion } from '../pages/Fashion';
import { GList } from '../pages/Glist';

// Pilot PJ 메인영역 공통 컴포넌트

// 라우터 역할을 하는 MainArea 컴포넌트 ////////
export function MainArea(props){
    // props.page 속성값으로 
    // 4가지 : main / glist/ women / man / style
    return(
        <>
            {
                // main or glist가 아니면 
                // 서브 Fashion 이동
                props.page == 'main'? <MainCont /> :
                props.page == 'glist'? <GList /> :
                <Fashion cat={props.page} />
            }
        </>
    );
} // MainArea 컴포넌트 /////////////