// MainArea 컴포넌트
import { Banner } from "../contents/Banner";
import { Character } from "../contents/Character";
import { Main } from "../contents/Main";
import { Video } from "../contents/Video";
import { Comics } from "../contents/Comics";

export function MainArea(props){
    // cat 속성으로 메뉴 분류 전달

    return(
        <main className="cont">
            {
                props.cat == 'main' &&
                <Main cat={props.cat} />
            }
            {props.cat == 'CHARACTERS' &&
            <Character cat={props.cat} />}

            {props.cat == 'VIDEO' && <Video />}

            {props.cat == 'COMICS' &&
            <Comics cat={props.cat} />}

            {props.cat == 'MOVIES' &&
            <Movie cat={props.cat} />}
        </main>
    );
} ////// MainArea 컴포넌트 ///////
