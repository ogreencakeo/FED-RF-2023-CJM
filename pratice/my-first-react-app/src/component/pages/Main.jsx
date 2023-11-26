import { Banner } from "../modules/Banner";
import { SecIntro } from "../modules/SecIntro";

export function Main(){
    return(
        <>
            <Banner category ={`main${Math.ceil(Math.random()*3)}`} />
            <SecIntro />
        </>
    )
}