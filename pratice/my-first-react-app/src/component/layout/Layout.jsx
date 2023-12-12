import { useLayoutEffect } from "react";
import { TopArea } from "./TopArea";
import {MainArea} from './MainArea';
import {FooterArea} from './FooterArea';
import { dcCon } from "../modules/dcContext";
import {useNavigate} from 'react-router-dom';
import { useCallback } from "react";

export function Layout(){

    useLayoutEffect(()=>{
        window.scrollTo(0, 0);
    })

    const goNav = useNavigate();

    const chgPage = useCallback((pgName, param) => goNav(pgName, param), []);

    return(
        <dcCon.Provider value={{chgPage}}>
            <TopArea chgPageFn={chgPage} />
            <MainArea />
            <FooterArea />
            
        </dcCon.Provider>
    )
}