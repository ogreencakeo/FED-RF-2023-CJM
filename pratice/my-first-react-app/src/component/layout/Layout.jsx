import { useCallback } from "react";
import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";

import {useNavigate} from 'react-router-dom';

import {dcCon} from '../modules/dcContext';

export function Layout(){

    const goNav = useNavigate();
    const chgPage = useCallback((pgName, param) => goNav(pgName, param), []);

    return(
        <dcCon.Provider value={{ chgPage}}>
            <TopArea chgPageFn={chgPage} />
            <MainArea />
            <FooterArea />
        </dcCon.Provider>
    );
}