import { SecIntro } from '../modules/SecIntro.jsx';
import {Banner} from '../modules/Banner.jsx';
import { VidIntro } from '../modules/VidIntro.jsx';
import { VidSWipe } from '../modules/VidSWipe.jsx';
import {CatList} from '../modules/CatList.jsx'

export function Main(){
    return(
        <>
            <Banner category={`main${Math.ceil(Math.random()*3)}`} />
            <SecIntro />
            <VidIntro cat='main' cls='off' />
            <VidSWipe cat='main' />
            <CatList />
        </>
    )
}