// 상품 전체 리스트 페이지

// 상품전체리스트 CSS 불러오기
import { useState } from "react";
import "../css/glist.css";

// 상품 데이터 불러오기
import gdata from "../data/glist-items";
import { ItemDetail } from "../modules/ItemDetail";

//정규식함수(숫자 세자리마다 콤마해주는 기능)
function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function GList() {
    // 상태관리 변수 /////////////////////////////////
    // 1. 아이템 코드 (m1, m2, m3 ......)
    const [item, setItem] = useState('m1');
    // 2. 카테고리명 (men / wowen / style)
    const [catName, setCatName] = useState('men');
    // 3. 상세보기모드 (true / false)
    const [detailSts, setDetailSts] = useState(true);

    // 리스트 만들기 함수
    const makeList = () => {
        return gdata.map((v, i) => (
            <div key={i}>
                [{i + 1}]
                <a href="#">
                    <img src={`./images/goods/${v.cat}/${v.ginfo[0]}.png`} alt={v.ginfo[1]} />
                    <aside>
                        <h2>{v.ginfo[1]}</h2>
                        <h3>{addComma(v.ginfo[3])}원</h3>
                    </aside>
                </a>
            </div>
        ));
    }; // makeList //////////
    // 리턴코드 /////////////////////
    return (
        <main id="cont">
            <section>
                <div id="optbx">
                    <label htmlFor="men">남성</label> <input type="checkbox" id="men" />
                    <label htmlFor="women">여성</label> <input type="checkbox" id="women" />
                    <label htmlFor="style">스타일</label> <input type="checkbox" id="style" />
                </div>
                <div className="grid">{makeList()}</div>
            </section>
            {
                /* 2.5. 상세보기박스 */
                detailSts && (
                    <div className="bgbx">
                        {/* <ItemDetail goods={item} cat={props.cat} /> */}
                        <ItemDetail goods={item} cat={catName} />
                    </div>
                )
            }
        </main>
    );
} // Glist 컴포넌트 ////////////
