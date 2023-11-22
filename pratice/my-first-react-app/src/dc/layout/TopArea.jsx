import { Link } from 'react-router-dom';
import { menu } from '../data/gnb';
import { Logo } from '../modules/Logo.jsx';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TopArea() {
    return (
        <>
            <div className="top-area">
                <nav className="gnb">
                    <ul>
                        <li>
                            <Logo logoStyle='top' />
                        </li>
                        {
                            menu.map((v, i) =>
                                <li key={i}>
                                    {
                                        v.sub ? <span href="#">{v.txt}</span> :
                                            <Link to={v.link}>{v.txt}</Link>
                                    }
                                    {
                                        v.sub && (
                                            <div className="smenu">
                                                <ol>
                                                    {
                                                        v.sub.map((v, i) =>
                                                            <li key={i}>
                                                                <Link to={v.link}>{v.txt}</Link>
                                                            </li>)
                                                    }
                                                </ol>
                                            </div>
                                        )
                                    }
                                </li>
                            )
                        }
                        <li style={{ marginLeft: 'auto' }}>
                            <a href="#">
                                <FontAwesomeIcon icon={faSearch} />
                            </a>
                        </li>
                        <li>
                            <Link to='/member'>JOIN US</Link>
                        </li>
                        <li>
                            <Link to='/login'>LOGIN</Link>
                        </li>
                        {/* <button className='bambtn'></button> */}
                    </ul>
                </nav>
            </div>
        </>
    )
}