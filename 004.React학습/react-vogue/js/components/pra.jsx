import { makeLink } from "../linksys2";

export default function TopArea(props){
    React.useEffect(makeLink, []);
    const gnbText =  ["FASHION", "BEAUTY", "LIVING", "PEOPLE", "VIDEO", "RUNWAY", "TIME & GEM", "SHOPPING"];

    const chgCat = (data) => {
        props.chgItem(data.toLowerCase());
    }

    return (
        <div id="top-area">
            <header class="top-area ibx common-area">
                {/* 1-1.상단메뉴 */}
                <div className="tmenu">
                    {/* 1-1-1.sns박스 */}
                    <div className="sns">
                        <a href="#" className="fi fi-instagram">
                            <span className="ir">인스타그램</span>
                        </a>
                        <a href="#" className="fi fi-facebook">
                            <span className="ir">페이스북</span>
                        </a>
                        <a href="#" className="fi fi-twitter">
                            <span className="ir">트위터</span>
                        </a>
                        <a href="#" className="fi fi-youtube-play">
                            <span className="ir">유튜브</span>
                        </a>
                        <a href="#" className="fi cas">
                            <span className="ir">카카오스토리</span>
                        </a>
                    </div>
                    {/* 1-1-2.사이드메뉴 */}
                    <div className="sideMenu">
                        <ul className="smbx">
                            <li>
                                <a href="#">SIDE MENU</a>
                                {/* 서브메뉴 */}
                                <ol className="smsub">
                                    <li>
                                        <a href="#">회사 소개</a>
                                    </li>
                                    <li>
                                        <a href="#">광고 및 제휴</a>
                                    </li>
                                    <li>
                                        <a href="#">개인정보 처리방침</a>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <a href="#">SUBSCRIBE</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* 1-2.로고박스 */}
                <h1 className="logo">
                    <a href="#">
                        <img src="./images/mlogo.png" alt="메인로고" />
                    </a>
                </h1>
                {/* 1-3.GNB박스 */}
                <nav className="gnb">
                    <ul>
                        {
                            gnbText.map((v) => (
                                <li>
                                    <a href="#" onClick={()=>chgCat(v)}>{v}</a>
                                </li>
                            ))
                        }

                        <li>
                            {/* 돋보기 검색버튼 */}
                            <i href="#" className="fi fi-search">
                                <span className="ir">search</span>
                            </i>
                        </li>
                    </ul>
                </nav>
                {/* 모바일용 버튼 */}
                <MobBtns />
            </header>
            {/* 모바일용 메뉴,검색박스 */}
            <MobBox />
        </div>
    );
}

export default function FooterArea(){
    const fTxt = ["정기구독", "회사소개", "광고 및 제휴", "개인정보 처리방침"];
    const makeList = (data) => 
        data.map((v) => (
            <li>
                <a href="#">{v}</a>
            </li>
        ))
    return(
        <React.Fragment>
            <div id="footer-area">
                <footer className="footer-area ibx common-area">
                    {/* 3-1.하단로고 */}
                    <div className="blogo">
                        <img src="./images/footer_logo.png" alt="하단로고" />
                    </div>
                    {/* 3-2.회사주소 */}
                    <address className="addr">
                        WWW.VOGUE.COM Ⓒ CONDÉNAST ASIA PACIFIC. INC. ALL RIGHTS RESERVED. VOGUE.COM KOREA IS OPERATED BY DOOSAN
                        MAGAZINE.
                    </address>
                    {/* 3-3.하단링크 */}
                    <ul className="blink">{makeList(fTxt)}</ul>
                </footer>
            </div>
            {/* 위로가기버튼  */}
            <a href="#" className="tbtn fi fi-angle-up">
                <span className="ir">위로가기버튼</span>
            </a>
        </React.Fragment>
    );
}