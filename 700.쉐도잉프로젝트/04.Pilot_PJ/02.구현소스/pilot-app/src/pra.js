import { FooterArea } from "./layout/FooterArea";
import { MainArea } from "./layout/MainArea";
import { TopArea } from "./layout/TopArea";
import { pCon } from "./modules/PilotContext";

// import { createContext } from "react";
// export const pCon = createContext();

function App(){
    return(
        <pCon.Provider value={{}}>
            <TopArea />
            <MainArea />
            <FooterArea />
            {}
        </pCon.Provider>
    )
}