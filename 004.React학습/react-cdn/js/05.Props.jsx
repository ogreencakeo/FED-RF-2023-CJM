// 05.리액트 Props

/********************************************************** 
    [ 리액트 Props ]
    1. 리액트 구성요소에 전달되는 인수다!(전달변수)
    2. HTML 속성을 통해서 구성요소에 전달된다
    3. props는 속성이다.
    4. JS 함수에 셋팅되는 전달변수와 HTML속성과 동일함
    5. 컴포넌트로 보내기 위해서는 HTML속성과 동일한 구문사용
**********************************************************/

// 자기차를 소개하는 컴포넌트1///////////////////////////////////
function Car(props){
    // 일반함수에서는 전달변수를 여러개 썼으나
    // 컴포넌트에서는 전달하는 props 하나로 여러개 사용 가능
    // 사용법 : props.속성명
    // 컴포넌트에서 미리 세부속성명을 정하여 호출하는 곳에서 
    // 같은 이름의 속성명으로 값을 담아 보내준다.
    return(
        <React.Fragment>
            <h2>나의 차는 {props.brand}입니다.</h2>
        </React.Fragment>
    );
}

// 자동차 상세정보 출력 컴포넌트///////////////////////////////////
function Detail(props){
    return(
        <React.Fragment>
            <h2>
                모델명은 {props.brand.model}이고 
                차색은 {props.brand.color}입니다!
            </h2>
            {/* 이미지 출력 */}
            <img src= './images/ray.png' alt='기아레이' style={props.brand.opt} />
        </React.Fragment>
    );
}

// 전체 자동차 브랜드 소개 컴포넌트//////////////////////////////
function Brand(props){
    return(
        <React.Fragment>
            <h1>당신의 차는 무슨차죠?</h1>
            <Car brand = '기아레이' />
            {/* 다른 컴포넌트 호출 */}
        </React.Fragment>
    );
}

// 랜더링 하기/////////////////////////////////////////////////
ReactDOM.render(
    <div>
        <Brand />
    </div>
    , document.querySelector('#root1'));