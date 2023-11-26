import { Banner } from "../modules/Banner";
import { SecIntro } from "../modules/SecIntro";
import { VidIntro } from "../modules/VidIntro";

export function Main(){
    return(
        <>
            <Banner category ={`main${Math.ceil(Math.random()*3)}`} />
            <SecIntro />
            <VidIntro cat='main' cls='off' />
        </>
    )
}