import myData from './data.js';
import myData2 from './data2.js';
// 두개의 데이터를 배열로 구성
const twoData = [myData, myData2];

/***************************************************************************
    서브 컴포넌트 2 : SubViewCode
    상품 상세보기 HTML 코드 구성 컴포넌트
***************************************************************************/
function SubViewCode(props){
    // props.idx - 선택 데이터 순번(신발 / 드레스)
    // props.chgFn() 함수로 사용가능! 
    // -> 부모 chgSubView() 함수를 호출하는 것임!
    // -> 프롭스 다운, 프롭스 펑션 업/다운
    // props.itemNum - 선택 아이템 번호

    // 선택 전체 데이터
    const selData = twoData[props.idx];

    // 선택데이터 /////////////////////////////////////////////
    // 배열.find(v=>{if(조건)return true})
    // -> 전달된 고유 idx와 같은 배열 데이터 하나를 리턴함
    const selItem = selData.find(v=>{
        if(v.idx == props.itemNum) return true;
    })
    // -> 고유 데이터인 idx값으로 데이터를 찾아서 
    // 데이터를 화면에 바인딩해야 한다.

     // 코드 리턴 파트
    return(
        <ol style={{display : 'flex', listStyle : 'none'}}>
            <li><img src={props.idx?
                    "./images/gallery/" + selItem.idx + ".jpg" :
                    "./images/vans/vans_" + selItem.idx + ".jpg" }
                    alt = {props.idx? "드레스" : "신발"} />
            </li>
            <li style={{lineHeight : '8', padding : '10px'}}>
                상품명 : {selItem.gname} <br />
                가격: {selItem.gprice}원<br />
                <button onClick={()=> props.chgFn(0, 0)}>리스트로 가기</button>
            </li>
        </ol>
    );
}

export {SubViewCode}