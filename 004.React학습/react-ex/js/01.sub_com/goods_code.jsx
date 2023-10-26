import myData from './data.js';
import myData2 from './data2.js';
// 두개의 데이터를 배열로 구성
const twoData = [myData, myData2];

/***************************************************************************
    서브 컴포넌트 1 : GoddsCode
    상품 리스트 HTML 코드 구성 컴포넌트
***************************************************************************/
function GoodsCode(props){  // idx - 데이터 배열 순번
    // 선택데이터 
    const selData = twoData[props.idx];
    // 코드 리턴 파트
    return selData.map((v)=> 
        /* props.chgFn(뷰상태 1, 상품 고유번호 idx) */
        <a href = "#" onClick={()=>props.chgFn(1, v.idx)}>
            <ol class="glist">
                <li><img src={props.idx?
                        "./images/gallery/" + v.idx +".jpg" :
                        "./images/vans/vans_" + v.idx + ".jpg" }
                        alt = {props.idx? "드레스" : "신발"} /></li>
                <li>{v.gname}</li>
                <li>가격: {v.gprice}원</li>
            </ol>
        </a>
    );
}

export {GoodsCode}