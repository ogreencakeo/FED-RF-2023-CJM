import { memo, useState } from "react";

export const CartList = memo((selData, flag) => {

    const pgBlock = 5;
    const [pgNum, setPgNum] = useState(1);
    const [cartData, setCartData] = useState(selData);

    if(cartData !== selData && flag.current){
        setCartData(selData);
    }

    const deleteItem = (e) => {
        flag.current = false;
        let congMsg = '정말 지우시겠습니까?';
        if(window.confirm(congMsg)){
            const selIdx = $(e.target).attr('data-idx');
            const newData = cartData.filter((v) => {
                if(v.idx !== selIdx) true;
            })

            localStorage.setItem('cart', JSON.stringify(newData));
            setCartData(newData);
        }
    };

    const chgNum = (e) => {
        const tg = $(e.currentTarget);
        const tgInput = tg.parent().siblings('.item-cnt');
        let cNum = Number(tgInput.val());
        tgInput.focus();

        if(tg.attr('alt') == '증가') cNum++;
        else cNum--;

        if(cNum < 1) cNum = 1;

        tgInput.val(cNum);
    };

    const goResult = (e) => {
        let tg = $(e.currentTarget);
        let cidx = tg.attr('data-idx');
        flag.current = false;
        cartData.some((v, i)=> {
            if(v.idx == cidx){
                cartData[i].num = tg.prev().val();
            }
        })
    }

    const bindList = () => {
        const tempData = [];
        
        return (
            <>
                <tr key={i} data-v={v}>
                    {/* 상품이미지 */}
                    <td>
                        <img src={"images/goods/" + v.cat + "/" + v.ginfo[0] + ".png"} alt="item" />
                    </td>
                    {/* 리스트순번 : 페이지별 시작 번호 반영 */}
                    <td>{i + 1 + initNum}</td>
                    {/* 상품명 */}
                    <td>{v.ginfo[1]}</td>
                    {/* 상품코드 */}
                    <td>{v.ginfo[2]}</td>
                    {/* 상품가격 */}
                    <td>{addComma(v.ginfo[3])}원</td>
                    {/* 상품수량 */}
                    <td className="cnt-part">
                        <div>
                            <span>
                                {/* 실제 개수 반영을 위해 value속성 사용할 것 defaultValue를 쓰면 값 반영이 안됨 */}
                                <input type="text" className="item-cnt" readOnly value={v.num} />
                                <button className="btn-insert" onClick={goResult} data-idx={v.idx}>
                                    반영
                                </button>
                                <b className="btn-cnt">
                                    <img src="./images/cnt_up.png" alt="증가" onClick={chgNum} />
                                    <img src="./images/cnt_down.png" alt="감소" onClick={chgNum} />
                                </b>
                            </span>
                        </div>
                    </td>
                    {/* 상품가격 총합계 */}
                    <td>{addComma(v.ginfo[3] * v.num)}원</td>
                    {/* 삭제버튼 */}
                    <td>
                        <button className="cfn" data-idx={v.idx} onClick={deleteItem}>
                            ×
                        </button>
                    </td>
                </tr>
            </>
        );
    };
    return (
        <>
            <section id="cartlist">
                <a href="#" className="cbtn cbtn2" onClick={hideList}>
                    <span>닫기버튼</span>
                </a>
                <table>
                    <caption>
                        <h1> 카트 리스트</h1>
                    </caption>
                    <tbody>
                        <tr>
                            <th>상품</th>
                            <th>번호</th>
                            <th>상품명</th>
                            <th>상품코드</th>
                            <th>단가</th>
                            <th>수량</th>
                            <th>합계</th>
                            <th>삭제</th>
                        </tr>

                        {bindList()}

                        <tr>
                            <td colSpan="6">총합계 :</td>
                            <td>{addComma(totalCnt)}원</td>
                            <td></td>
                        </tr>
                    </tbody>
                    {/* 하단 페이징 표시부분 */}
                    <tfoot>
                        <tr>
                            <td colSpan="8" className="paging">
                                {/* 페이징번호 위치  */}
                                {pagingLink()}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </section>
            {/* 카트버튼이미지 박스 */}
            <div id="mycart" onClick={showList}>
                {/* 카트이미지 */}
                <img src="./images/mycart.gif" title={`${cntData}개의 상품이 있습니다`} />
                {/* 카트상품개수 출력박스 */}
                <div className="cntBx">{cntData}</div>
            </div>
        </>
    );
});
