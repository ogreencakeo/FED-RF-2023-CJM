// 신상품 컴포넌트 /////////////////////
export function SinSang(props) {
    // props.cat - 카테고리 분류명

    // 리턴 코드 ///////////////
    return (
        <>
            <h2 className="c1tit">
                NEW MEN'S ARRIVAL
                <button>전체리스트</button>
            </h2>
            <div className="flowbx">
                <ul className="flist">
                    <li className="m3">
                        <a href="#">
                            <img src="./images/goods/men/m3.png" alt="신상품" />
                        </a>
                    </li>
                    <li className="m4">
                        <a href="#">
                            <img src="./images/goods/men/m4.png" alt="신상품" />
                        </a>
                    </li>
                    <li className="m5">
                        <a href="#">
                            <img src="./images/goods/men/m5.png" alt="신상품" />
                        </a>
                    </li>
                    <li className="m6">
                        <a href="#">
                            <img src="./images/goods/men/m6.png" alt="신상품" />
                        </a>
                    </li>
                    <li className="m7">
                        <a href="#">
                            <img src="./images/goods/men/m7.png" alt="신상품" />
                        </a>
                    </li>
                    <li className="m8">
                        <a href="#">
                            <img src="./images/goods/men/m8.png" alt="신상품" />
                        </a>
                    </li>
                    <li className="m9">
                        <a href="#">
                            <img src="./images/goods/men/m9.png" alt="신상품" />
                        </a>
                    </li>
                    <li className="m1">
                        <a href="#">
                            <img src="./images/goods/men/m1.png" alt="신상품" />
                        </a>
                    </li>
                    <li className="m2">
                        <a href="#">
                            <img src="./images/goods/men/m2.png" alt="신상품" />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
} // SinSang 컴포넌트 ////////////////
