import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/VidIntro";

export function Games(){
    return(
        <>
            <Banner category = 'GAMES' />
            <VidIntro cat='GAMES' cls='on' />
        </>
    );
}