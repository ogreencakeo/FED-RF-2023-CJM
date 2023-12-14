import { useState } from "react";
import { memo } from "react";

export const Prac = memo((selData, flag) => {

    const [cartData, setCartData] = useState(selData);

    if(cartData !== selData && flag.current){
        setCartData(selData);
    }

    const totalCnt = cartData.reduce((total, v) => {
        return total + v.ginfo[3] * v.num;
    }, 0)

    const showList = () => {
        $('#cartlist').animate({right : '0'}, 600);
    }

    const hideList = (e) => {
        e.prevnetDefault();
        $('#cartlist').animate({right : '-60%'}, 600);
    };

    const deleteItem = (e) => {
        flag.current = false;
        const selIdx = $(e.target).attr('data-idx');
        const newData = cartData.filter((v) => {
            if(v.idx !== selIdx) return true;
        });
        
    }

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

                        {cartData.map((v, i) => (
                            <tr key={i}>
                                {/* 상품이미지 */}
                                <td>
                                    <img src={"images/goods/" + v.cat + "/" + v.ginfo[0] + ".png"} alt="item" />
                                </td>
                                {/* 리스트순번 */}
                                <td>{i + 1}</td>
                                {/* 상품명 */}
                                <td>{v.ginfo[1]}</td>
                                {/* 상품코드 */}
                                <td>{v.ginfo[2]}</td>
                                {/* 상품가격 */}
                                <td>{addComma(v.ginfo[3])}원</td>
                                {/* 상품수량 */}
                                <td>{v.num}</td>
                                {/* 상품가격 총합계 */}
                                <td>{addComma(v.ginfo[3] * v.num)}원</td>
                                {/* 삭제버튼 */}
                                <td>
                                    <button className="cfn" data-idx={v.idx} onClick={deleteItem}>
                                        ×
                                    </button>
                                </td>
                            </tr>
                        ))}

                        <tr>
                            <td colSpan="6">총합계 :</td>
                            <td>{addComma(totalCnt)}원</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </section>
            {/* 카트버튼이미지 박스 */}
            <div id="mycart" onClick={showList}>
                {/* 카트이미지 */}
                <img src="./images/mycart.gif" title="개의 상품이 있습니다" />
                {/* 카트상품개수 출력박스 */}
                <div className="cntBx">{cntData}</div>
            </div>
        </>
    );
});
