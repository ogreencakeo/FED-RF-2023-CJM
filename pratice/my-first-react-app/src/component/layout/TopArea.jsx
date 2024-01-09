import { menu } from "../data/gnb";

// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {Link} from 'react-router-dom';

// 제이쿼리
import $ from "jquery";

export function TopArea(){

    const showSearch = (e) => {
        e.preventDefault();

    };

    return(
        <>
            <header className="top-area">
                <div className="logmsg"></div>
                <nav className="gnb">
                    <ul>
                        <li>
                            {/* 로고 */}
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
                            <div className="serachingGnb">
                                <FontAwesomeIcon icon={faSearch} className="schbtnGnb" title="Open search" />
                            </div>
                            <a href="#" onClick={showSearch}>
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}