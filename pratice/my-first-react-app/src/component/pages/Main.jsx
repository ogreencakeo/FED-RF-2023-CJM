import { Banner } from "../modules/Banner";

// 배너CSS
import "../../css/banner.css";

export function Main(){
    return(
        <>
            <Banner category = {'main' + Math.ceil(Math.random()*3)} />
        </>
    );
}