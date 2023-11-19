import { Logo } from "../modules/Logo"
import { menu } from '../data/gnb';
import { Link } from "react-router-dom";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function TopArea() {
    return (
        <header className="top-area">
            <nav className="gnb">
                <ul>
                    <li>
                        <Logo logostyle='top' />
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
                                                    (
                                                        <li key={i}><Link to={v.link} />{v.txt}</li>
                                                    ))
                                                }
                                            </ol>
                                        </div>
                                    )
                                }
                            </li>)
                    }

                    <li style={{ marginLeft: 'auto' }}>
                        <a href="#">
                            <FontAwesomeIcon icon={faSearch} />
                        </a>
                    </li>
                    <li>
                        <Link to='/member'>Join us</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <button className="hambtn"></button>

                </ul>
            </nav>
        </header>
    )
}