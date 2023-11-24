// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// DC PJ 검색모듈 컴포넌트
export function Searching(props) {
    // props.kword - 검색어 전달
    console.log("Searching 컴포넌트 전달검색어 (props.kword) :", props.kword);

    // 검색 리스트 만들기 함수
    const schList = () => {};

    // 엔터키 반응 함수
    const enterKey = () => {};

    // 체크박스 검색 함수 /////////
    const chkSearch = () => {};

    // 리턴 코드 ////////////////////
    return (
        <>
            {/* 전체 검색모듈 코드 */}
            <section className="schbx">
                {/* 1. 옵션 선택 박스 */}
                <div className="schopt"></div>
                {/* 2. 결과 리스트 박스 */}
                <div className="listbx">
                    {/* 1-1. 검색 박스 */}
                    <div className="searching">
                        {/* 검색버튼 돋보기 아이콘 */}
                        <FontAwesomeIcon icon={faSearch} className="schbtn" title="Open Search" onClick={schList} />
                        {/* 입력창 */}
                        <input id="schin" type="text" placeholder="Filter by keyword" onKeyUp={enterKey} />
                    </div>
                    {/* 1-2. 체크박스 구역 */}
                    <div className="chkbx">
                        <ul>
                            <li>
                                {/* 타이틀 */}
                                <h2>
                                    ALIGNMENT
                                    <span className="spbtn">＋</span>
                                </h2>
                                {/* 체크박스 리스트 */}
                                <ol>
                                    <li>
                                        Heroes
                                        {/* 숨긴 체크박스 */}
                                        <input type="checkbox" id="hero" className="chkhdn" onChange={chkSearch} />
                                        {/* 디자인 노출 라벨 */}
                                        <label htmlFor="hero" className="chklb"></label>
                                    </li>
                                    <li>
                                        It's Complicated
                                        {/* 숨긴 체크박스 */}
                                        <input type="checkbox" id="hero" className="chkhdn" onChange={chkSearch} />
                                        {/* 디자인 노출 라벨 */}
                                        <label htmlFor="hero" className="chklb"></label>
                                    </li>
                                    <li>
                                        Villains
                                        {/* 숨긴 체크박스 */}
                                        <input type="checkbox" id="hero" className="chkhdn" onChange={chkSearch} />
                                        {/* 디자인 노출 라벨 */}
                                        <label htmlFor="hero" className="chklb"></label>
                                    </li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
} // Searching 컴포넌트 ////////////
