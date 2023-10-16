// 이미지경로 배열
const devImg = [
    "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HYAONH6EGJBKIU5CJWWF343MKE.jpg",
    "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202208/24/BoiledMovie/20220824133926904mopw.png"
];

const foods = 
["스파게티","짜파게티","냉면","짜장면","마라탕"];

function DevFn(){
    return <h1>나는 개발자야!</h1>;
}

function LostDev(){
    return <h1>개발자가 뭐지?</h1>;
}

function MakeImg(props){
    return <img src={props.isrc} alt={props.ialt} title={props.ititle} />;
}

function Developer(props){
    const isDev = props.info;
    if(isDev){
        return(
            <React.Fragment>
                <DevFn />
                <MakeImg isrc={props.isrc} ialt={props.ialt} ititle={props.ititle} />
            </React.Fragment>
        )
    }
    return(
        <React.Fragment>
            <LostDev />
            <MakeImg isrc={props.isrc} ialt={props.ialt} ititle={props.ititle} />
        </React.Fragment>
    )
}

function FoodList(props){
    return <li>개발자는 {props.fname} 좋아해</li>;
}

function Tilte(props){
    return <h1>👨‍🔧개발자👩‍🔧가 좋아하는 {props.title}</h1>
}

function FoodInfo(props){
    const foodLen = props.foodtme;
    return(
        <React.Fragment>
            <h2>개발자가 좋아하는 음식은 모두{foodLen.length}가지 입니다.</h2>
            <ul>
                {
                    foodLen.length > 0 &&
                    foodLen.map(val => <FoodList fname={val} />)
                }
                {
                    foodLen.length == 0 &&
                    <h2>개발자 음식이 업데이트 되지 않았습니다.</h2>
                }
            </ul>
        </React.Fragment>
    )
}

ReactDOM.render(
    <Developer info={true} isrc={devImg[0]} ialt='개발자 공유' ititle='개발자 세계' />,
    document.querySelector('#root1')
);

ReactDOM.render(
    <Developer info={false} isrc={devImg[1]} ialt='주먹왕 마동석' ititle='비개발자' />,
    document.querySelector('#root2')
);

ReactDOM.render(
    <div>
        <Tilte title='음식' />
        <FoodInfo foodtme={foods} />
    </div>,
    document.querySelector('#root3')
);