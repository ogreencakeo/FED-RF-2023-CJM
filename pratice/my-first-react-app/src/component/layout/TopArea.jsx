
import { Logo } from '../modules/Logo.jsx';
import { menu } from "../data/gnb"; 
import { Link, useNavigate } from "react-router-dom";

// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from 'react';

// 제이쿼리
import $ from 'jquery';

export const TopArea = memo(({chgPageFn}) => {

    const showSearch = (e) => {
        e.preventDefault();
        $('.searchingGnb').show();
        $('#schinGnb').focus();
    };

    const enterKey = e => {
        if(e.key == 'Enter'){
            let txt = $(e.target).val().trim();
            if(txt != ''){
                $(e.target).val('').parent().hide();
                goSerach(txt);
            }
        }
    };

    const goSerach = txt => {
        chgPageFn('/schpage', {state : {keyword : txt}});
    }

    return (
        <>
            <header className="top-area">
                <nav className="gnb">
                    <ul>
                        <li>
                            <Logo />
                        </li>
                        {
                            menu.map((v, i) => (
                                <li key={i}>
                                    {
                                        v.sub ? <a href='#'>{v.txt}</a> : <Link to={v.link}>{v.txt}</Link>
                                    }
                                    {
                                        v.sub && (
                                            <div className="smenu">
                                                <ol>
                                                    {
                                                        v.sub.map((v, i) => (
                                                            <li key={i}>
                                                                <Link to={v.link}>{v.txt}</Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ol>
                                            </div>
                                        )
                                    }
                                </li>
                            ))
                        }
                        <li style={{marginLeft:'auto'}}>
                            <div className="searchingGnb">
                                <FontAwesomeIcon icon={faSearch} className="schbtnGnb" title="Open Search" />
                                <input id='schinGnb' type='text' placeholder='Filter by keyword' onKeyUp={enterKey} />
                            </div>
                            <a href="#" onClick={showSearch}>
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                        </li>
                        <li>
                            <Link to='/member'>join us</Link>
                            <Link to='/login'>LOGIN</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
});