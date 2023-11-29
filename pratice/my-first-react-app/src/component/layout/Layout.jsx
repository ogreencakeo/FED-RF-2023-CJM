import {TopArea} from '../layout/TopArea.jsx';
import {MainArea} from '../layout/MainArea.jsx';
import {FooterArea} from '../layout/FooterArea.jsx';

import { dcCon } from '../modules/dcCon.jsx'; 
import { useCallback, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Layout(){

    useLayoutEffect(()=>{
        window.scrollTo(0, 0);
    });

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