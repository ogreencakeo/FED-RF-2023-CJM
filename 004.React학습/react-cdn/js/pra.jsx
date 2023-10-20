// 이미지경로 배열
const devImg = [
    "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HYAONH6EGJBKIU5CJWWF343MKE.jpg",
    "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202208/24/BoiledMovie/20220824133926904mopw.png"
];

const foods = 
["스파게티","짜파게티","냉면","짜장면","마라탕"];
// [];

function IsDev(){
    return <h1>나는 개발자야!</h1>;
}
function LostDev(){
    return <h1>개발자가 뭐지?</h1>;
}
function MakeImg(props){
    return <img src={props.isrc} alt={props.ialt} title={props.tit} />
}
function Developer(props){
    const info = props.i_info;
    return(
        <React.Fragment>
            {
                info &&
                <div>
                    <IsDev />
                    <MakeImg isrc={devImg[0]} ialt='개발자 공유' tit='개발자 세계' />
                </div>
            }
            {
                !info &&
                <div>
                    <LostDev />
                    <MakeImg isrc={devImg[1]} ialt='주먹왕 마동석' tit='비개발자 세계' />
                </div>
            }
        </React.Fragment>
    )
}

ReactDOM.render(
    <Developer i_info={true} />,
    document.querySelector('#root1')
);
ReactDOM.render(
    <Developer i_info={false} />,
    document.querySelector('#root2')
);

function Title(props){
    return <h1>👨‍🔧개발자👩‍🔧가 좋아하는 {props.tit}</h1>;
}

function FoodList(props){
    return <li>개발자는 {props.fname} 좋아해</li>;
}

function WishList(props){
    const foodInfo = props.food_info;
    return(
        <React.Fragment>
            <Title tit='음식' />
            {
                foodInfo.length >0 &&
                <div>
                    <h2>개발자가 좋아하는 음식은 모두{foodInfo.length}가지 입니다.</h2>
                    <ul>
                        {
                            foodInfo.map(v => <FoodList fname={v} />)
                        }
                    </ul>
                </div>
            }
            {
                foodInfo.length == 0 &&
                <h2>아직 개발자 음식이 업데이트 되지 않았습니다.</h2>
            }
        </React.Fragment>
    )
}

ReactDOM.render(
    <WishList food_info={foods} />,
    document.querySelector('#root3')
);

const movie = [
    {year : '2021', mname : '모가디슈'},
    {year : '2022', mname : '범죄도시2'},
    {year : '2023', mname : '가디언즈 오브 갤럭시3'},
]

function MovieInfo(props){
    return <li>{props.year}년도 {props.mname}</li>;
}

function WishList2(props){
    const minfo = props.mInfo;
    return(
        <React.Fragment>
            <Title tit='영화' />
            <h2>개발자가 좋아하는 영화는 최근 {minfo.length}년간 아래와 같습니다.</h2>
            {
                <ul>
                    {
                        minfo.map(v=><MovieInfo year={v.year} mname={v.mname} />)
                    }
                </ul>
            }
        </React.Fragment>
    )
}

ReactDOM.render(
    <WishList2 mInfo={movie} />,
    document.querySelector('#root4')
);

const worksrc = {
    "피카소":"https://m.theartin.net/web/product/big/201907/30c5a0fdd153bfdfdc8f19b2f4166fa8.jpg",
    "모네":"https://dimg.donga.com/wps/NEWS/IMAGE/2015/12/11/75316598.3.jpg"
};

function WorkInfo(props){
    return(
        <React.Fragment>
            <h2>{props.painter}</h2>
            <div>
                <img src={worksrc[props.painter]} alt={props.wname} title={props.wname} />
            </div>
        </React.Fragment>
    )
}

function WishList3(props){
    const [result, setResult] = React.useState(props.isChange);
    const againFn = () => {
        setResult(!result)
    };
    return(
        <React.Fragment>
            <Title tit='명화' />
            <button onClick={againFn}>작가변경</button>
            {
                result ? 
                <WorkInfo painter='피카소' wname='피카소임' />:
                <WorkInfo painter='모네' wname='모네임' />

            }
        </React.Fragment>
    );  
}

ReactDOM.render(
    <WishList3 isChange={true} />,
    document.querySelector('#root5')
);