import { Banner } from "../modules/Banner";

export function Main(){
    return(
        <>
            <Banner category = {'main' + Math.ceil(Math.random()*3)} />
        </>

    )
}