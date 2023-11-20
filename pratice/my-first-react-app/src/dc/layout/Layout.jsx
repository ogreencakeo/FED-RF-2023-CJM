import { useLayoutEffect } from "react";
import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";
import { useNavigate } from "react-router-dom";
import { dcCon } from "../modules/dcContext";

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