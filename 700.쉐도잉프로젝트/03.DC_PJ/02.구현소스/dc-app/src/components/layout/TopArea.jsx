// 상단영역 컴포넌트
// GNB 데이터
import { Link } from "react-router-dom";
import { Logo } from "../modules/Logo";
import { menu } from "../data/gnb";

export function TopArea(){

    return(
        <>
        {/* 1.상단영역 */}
        <header className="top-area">
            {/* 네비게이션 GNB파트 */}
            <nav className="gnb">
                <ul>
                    <li>
                        <Logo logoStyle='top' />
                    </li>
                    {
                        menu.map((v, i)=>
                            <li key={i}>
                                <Link to = {v.link}>{v.txt}</Link>
                                { 
                                    // 서브메뉴 데이터가 있으면 하위 그리기
                                    v.sub && (
                                        <div className="smenu">
                                            <ol>
                                                {
                                                    v.sub.map((v, i)=>
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
                </ul>
            </nav>
        </header>
        </>
    )
}