import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/VidIntro";

export function Comics(){
    return(
        <>
            <Banner category = 'COMICS' />
            <VidIntro cat = 'COMICS' cls='on' />
        </>
    );
}