import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { MainArea } from './src/layout/MainArea';
import { FooterArea } from './src/layout/FooterArea';

function App(){

    const [pgNum, setPgName] = useState('main');

    const chgPgName = (txt) => {
        setPgNum(txt)
    }

    return(
        <>
            <TopArea  cat={pgName} />
            <MainArea page={pgName} />
            <FooterArea />
        </>
    )
}