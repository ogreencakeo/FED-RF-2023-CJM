import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/VidIntro";

export function Series(){
    return(
        <>
            <Banner category = 'SERIES' />
            <VidIntro cat='MOVIES' cls='on' />
        </>
    );
}