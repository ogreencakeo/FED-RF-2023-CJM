// 상단영역 컴포넌트
// GNB 데이터
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../modules/Logo";
import { menu } from "../data/gnb";

// 컨텍스트 API
import { dcCon } from "../modules/dcCon.jsx";

// 제이쿼리
import $ from 'jquery';

// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useContext } from "react";

export function TopArea(){
    
    const myCon = useContext(dcCon);

    const showSearch = () => {
        $('.searchingGnb').show();
        $('#schinGnb').focus();
    };
    
    const enterKey = (e) => {
        if(e.key == 'Enter'){
            let txt = $(e.target).val().trim();
            if(txt != ''){
                $(e.target).val('').parent().hide();
                goSearch(txt);
            }
        }
    };

    const goSearch = (txt) => {
        myCon.chgPage('/schpage', {state : {keyword : txt}});
    };

    return(
        <>
            <header className="top-area">
                <nav className="gnb">
                    <ul>
                        <li>
                            <Logo logoStyle='top' />
                        </li>
                        {
                            menu.map((v, i) =>
                                <li key={i}>
                                    {
                                        v.sub?
                                        <a href="#">{v.txt}</a> : <Link to={v.link}>{v.txt}</Link>
                                    }
                                    {
                                        v.sub && (
                                            <div className="smenu">
                                                <ol>
                                                    {v.sub.map((v, i) => (
                                                        <li key={i}>
                                                            <Link to={v.link}>{v.txt}</Link>
                                                        </li>
                                                    ))}
                                                </ol>
                                            </div>
                                        )
                                    }
                                </li>        
                            )
                        }
                        <li style={{marginLeft : 'auto'}}>
                            <div className="searchingGnb">
                                <FontAwesomeIcon icon={faSearch} className="schbtnGnb" title="Open Search" />
                                <input id="schinGnb" type="text" placeholder="Filter by keyword" onKeyUp={enterKey} />
                            </div>
                            <a href="#" onClick={showSearch}>
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                        </li>
                        <li>
                            <Link to='/member'>Join us</Link>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                    <button className="hambtn"></button>
                </nav>
            </header>
        </>
    )
}