import { menu } from "../data/gnb";

// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {Link} from 'react-router-dom';

// 제이쿼리
import $ from "jquery";
import { memo } from "react";
import { Logo } from "../modules/Logo";

export const  TopArea = memo(({chgPageFn}) => {

    const showSearch = (e) => {
        e.preventDefault();
        $('.searchingGnb').show();
        $('#schinGnb').focus();
    };

    const showMenu = () => {
        $('.top-area').toggleClass('on');
    };

    const enterKey = (e) => {
        if(e.key === 'Enter'){
            $('.top-area').removeClass('on');
            let txt = $(e.target).val().trim();
            if(txt != ''){
                $(e.target).val('').parent().hide();
                goSearch(txt);
            }
        }
    };

    const goSearch = (txt) => {
        chgPageFn('/schpage', {state : {keyword : txt}});
    };

    return(
        <>
            <header className="top-area">
                <div className="logmsg"></div>
                <nav className="gnb">
                    <ul>
                        <li>
                            {/* 로고 */}
                            <Logo logoStyle='top' />
                        </li>
                        {
                            menu.map((v, i) => (

                                    <li key={i}>
                                        {
                                            v.sub ? <a href="#">{v.txt}</a> : <Link to={v.link}>{v.txt}</Link>
                                        }
                                        {
                                            v.sub && (
                                                <div className="smenu">
                                                    <ol>
                                                        {
                                                            v.sub.map((v, i) =>
                                                                <li key={i}>
                                                                    <Link to={v.link}>{v.txt}</Link>
                                                                </li>
                                                            )
                                                        }
                                                    </ol>
                                                </div>
                                            )
                                        }
                                    </li>
                                )
                            )
                        }
                        <li style={{
                            marginLeft : 'auto',
                            marginRight : '25px',
                        }}>
                            <div className="searchingGnb">
                                <FontAwesomeIcon icon={faSearch} className="schbtnGnb" title="Open search" />
                                <input id="schinGnb" type="text" placeholder="Filter by Keyword" onKeyUp={enterKey} />
                            </div>
                            <a href="#" onClick={showSearch}>
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                        </li>
                    </ul>
                </nav>
                <button className="hambtn" onClick={showMenu}></button>
            </header>
        </>
    );
});