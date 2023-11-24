// 폰트어썸 불러오기
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// DC PJ 검색모듈 컴포넌트
export function Searching(props) {
    // props.kword - 검색어 전달
    console.log("Searching 컴포넌트 전달검색어 (props.kword) :", props.kword);
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
                        <FontAwesomeIcon icon={faSearch} className="schbtnGnb" title="Open Search" />
                        {/* 입력창 */}
                        <input id="schinGnb" type="text" placeholder="Filter by keyword" onKeyUp={enterKey} />
                    </div>
                </div>
            </section>
        </>
    );
} // Searching 컴포넌트 ////////////
