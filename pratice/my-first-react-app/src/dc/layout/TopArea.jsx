import { Link } from "react-router-dom";
import { menu } from "../data/gnb";
import {Logo} from '../modules/Logo'
export function TopArea(){
    return(
        <header className="top-area">
            <nav className="gnb">
                <ul>
                    <li>
                        <Logo logoStyle='top' />
                    </li>
                    {
                        menu.map((v,i) => 
                        <li key={i}>
                            <Link to ={v.link}>{v.txt}</Link>
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
                        </li>)
                    }
                </ul>
            </nav>
        </header>
    )
}