import { TopArea } from "../layout/TopArea.jsx";
import { MainArea } from "../layout/MainArea.jsx";
import { FooterArea } from "../layout/FooterArea.jsx";

import {dcCon} from '../modules/dcContext.jsx';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Layout(){

    useEffect(()=>{
        window.scrollTo(0, 0);
    });

    const goNav = useNavigate();

    const chgPage = (txt) => goNav(txt);

    return(
        <dcCon.Provider value={{chgPage}}>
            <TopArea />
            <MainArea />
            <FooterArea />
        </dcCon.Provider>
    );
    
}