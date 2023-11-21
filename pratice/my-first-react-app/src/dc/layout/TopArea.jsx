import { Link } from 'react-router-dom';
import {menu} from '../data/gnb';

// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Logo} from '../modules/Logo.jsx';

export function TopArea(){
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
                                    <Link to={v.link}>{v.txt}</Link>
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
                        }
                        <li style={{marginLeft : 'auto'}}>
                            <a href="#">
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                        </li>
                        <li>
                            <Link to='/menber'>JOIN US</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                    <button className='hambtn'></button>
                </nav>
            </header>
        </>
    )
}