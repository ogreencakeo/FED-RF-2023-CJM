import {useLocation} from 'react-router-dom';

export function SchPage(){
    const loc = useLocation();

    let keyword;

    if(loc.state) keyword = loc.state.keyword;

    return(
        <>
            <h1 className="tit">Serach Result</h1>
            <Seraching kword={keyword} />
        </>
    );
}