// 이미지경로 배열
const devImg = [
    "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HYAONH6EGJBKIU5CJWWF343MKE.jpg",
    "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202208/24/BoiledMovie/20220824133926904mopw.png"
];

const foods = 
[];

function DevFn(){
    return <h1>나는 개발자야!</h1>;
}

function LostFn(){
    return <h1>개발자가 뭐지?</h1>;
}

function MakeImg(props){
    return <img src={props.isrc} alt={props.ialt} title={props.itit} />;
}

function Developer(props){
    const isDev = props.info;
    if(isDev){
        return(
        <React.Fragment>
            <DevFn />
            <MakeImg isrc={props.isrc} ialt={props.ialt} itit={props.itit} />;
        </React.Fragment>
        )
    }
    return(
        <React.Fragment>
            <LostFn />
            <MakeImg isrc={props.isrc} ialt={props.ialt} itit={props.itit} />;
        </React.Fragment>    
    )
}


function Title(props){
    return <h1>👨‍🔧개발자👩‍🔧가 좋아하는 {props.tit}</h1>;
}

function FoodList(props){
    return <li>개발자는 {props.fname} 좋아해</li>;
}

function FoodInfo(props){
    const foodLk = props.foodLike;
    return(
        <React.Fragment>
            <Title tit='음식' />
            <h2>개발자가 좋아하는 음식은 모두{foodLk.length}가지 입니다.</h2>
            <ul>
            {
                foodLk.length > 0 &&
                foodLk.map(val=><FoodList fname={val} />)
            }
            </ul>
            {
                foodLk.length == 0 &&
                <h2>개발자 음식이 업데이트 되지 않았습니다.</h2>

            }
        </React.Fragment>
    )
    
}



ReactDOM.render(
    <Developer info={true} isrc={devImg[0]} ialt='개발자 공유' itit='개발자 세계' />,
    document.querySelector('#root1')
);
ReactDOM.render(
    <Developer info={false} isrc={devImg[1]} ialt='주먹왕 마동석' itit='개발자가 뭐지' />,
    document.querySelector('#root2')
);
ReactDOM.render(
    <FoodInfo foodLike={foods} />,
    document.querySelector('#root3')
);
