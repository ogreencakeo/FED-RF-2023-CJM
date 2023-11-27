import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/VidIntro";

export function Movies(){
    return(
        <>
            <Banner category = 'MOVIES' />
            <VidIntro cat='MOVIES' cls='on' />
        </>
    );
}