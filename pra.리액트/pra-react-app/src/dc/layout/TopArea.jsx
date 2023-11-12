import { Link } from 'react-router-dom'
import {menu} from '../data/gnb'
import {Logo} from '../contents/Logo';

export function TopArea(){
    return(
        <>
            <header className="top-area">
                <nav className="gnb">
                    <ul>
                        <li>
                            <Logo />
                        </li>
                        {
                            menu.map((v, i) => 
                                <li key={i}>
                                    <Link to = {v.link}>{v.txt}</Link>
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </header>
        </>
    )
}