// MainArea 컴포넌트

import { Outlet } from "react-router-dom";

// import { Character } from "../contents/Character";
// import { Main } from "../contents/Main";
// import { Video } from "../contents/Video";
// import { Comics } from "../contents/Comics";
// import { Movies } from "../contents/Movies";
// import { Games } from "../contents/Games";
// import { News } from "../contents/News";
// import { SwiperApp } from "../plugin/SwiperApp";


export function MainArea(/*props*/){
    // cat 속성으로 메뉴 분류 전달

    return(
        <main className="cont">
            <Outlet />
            {/* {
                props.cat == 'main' &&
                <Main cat={props.cat} />
            }
            {props.cat == 'CHARACTERS' &&
            <Character cat={props.cat} />}

            {props.cat == 'VIDEO' && <Video />}

            {props.cat == 'COMICS' &&
            <Comics cat={props.cat} />}

            {props.cat == 'MOVIES' &&
            <Movies cat={props.cat} />}

            {props.cat == 'GAMES' &&
            <Games cat={props.cat} />}

            {props.cat == 'NEWS' &&
            <News cat={props.cat} />}

            {props.cat == 'SWIPER' &&
            <SwiperApp />} */}

        </main>
    );
} ////// MainArea 컴포넌트 ///////
