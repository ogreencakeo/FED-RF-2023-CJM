import { useContext, useLayoutEffect } from "react"
import {dcCon} from '../modules/dcContext.jsx';
import { useNavigate } from "react-router-dom";
import { TopArea } from "./TopArea.jsx";
import { MainArea } from "./MainArea.jsx";
import { FooterArea } from "./FooterArea.jsx";

export function Layout(){
    useLayoutEffect(()=>{
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
    )
}