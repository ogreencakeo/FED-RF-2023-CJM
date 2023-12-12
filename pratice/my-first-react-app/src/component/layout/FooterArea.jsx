import {Logo} from '../modules/Logo.jsx';
import { bmData } from "../data/bmenu.js";
export function FooterArea(){
    return(
        <footer className="info">
            <ul>
                <li><Logo /></li>
                <li>
                    <ol className='bmenu'>
                        {bmData.map((v, i) =>
                            <li key={i}>
                                <a href={v.link} target='_blank'>
                                    {v.txt.toUpperCase()}
                                </a>
                            </li>
                        )}
                    </ol>
                </li>
            </ul>
        </footer>
    );
}