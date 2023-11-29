import { Logo } from "../modules/Logo.jsx";

// 하단링크 정보 데이터 불러오기
import { bmData } from "../data/bmenu.js";
import { memo } from "react";

export const FooterArea = memo(() => {
    return (
        <footer className="info">
            <ul>
                <li>
                    <Logo logoStyle="bottom" />
                </li>
                <li>
                    <ol className="bmenu">
                        {bmData.map((v, i) => (
                            <li key={i}>
                                <a href={v.link} target="_blank">
                                    {v.txt.toUpperCase()}
                                </a>
                            </li>
                        ))}
                    </ol>
                </li>
                <li>© & ™ DC. ALL RIGHTS RESERVED</li>
            </ul>
        </footer>
    );
});
