// 이미지경로 배열
const devImg = [
    "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HYAONH6EGJBKIU5CJWWF343MKE.jpg",
    "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202208/24/BoiledMovie/20220824133926904mopw.png"
];

const foods = 
// ["스파게티","짜파게티","냉면","짜장면","마라탕"];
[];

function IsDev(){
    return <h1>나는 개발자야!</h1>;
}
function LostDev(){
    return <h1>개발자가 뭐지?</h1>;
}

function MakeImg(props){
    return(
        <img src={props.isrc} title={props.itit} alt={props.ialt}/>
    )
}

function Developer(props){
    const isDev = props.info;
    return(
        <React.Fragment>
            {
                isDev && 
                    <div>
                        <IsDev />
                        <MakeImg isrc={props.isrc} itit={props.itit} ialt={props.ialt}  />
                    </div>
            }
            {
                !isDev && 
                <div>
                    <LostDev />
                    <MakeImg isrc={props.isrc} itit={props.itit} ialt={props.ialt}  />
                </div>
            }
        </React.Fragment>
    )
}


function Title(props){
    return <h1>👨‍🔧개발자👩‍🔧가 좋아하는 {props.tit}</h1>;
}

function FoodList(props){
    return <li>개발자는 {props.fname} 좋아해</li>;
}

function WishList(props){
    const f_name = props.f_info;
    return(
        <React.Fragment>
            <Title tit='음식' />
            {
                f_name.length>0 &&
                <div>
                    <h2>개발자가 좋아하는 음식은 모두{f_name.length}가지 입니다.</h2>
                    <ul>
                        {
                            f_name.map(val=> <FoodList fname={val} />)
                        }
                    </ul>
                </div>
            }
            {
                f_name.length==0 &&
                <h2>아직 개발자 음식이 업데이트 되지 않았습니다.</h2>
            }
        </React.Fragment>
    )
};

/* 
👨‍🔧개발자👩‍🔧가 좋아하는 영화
개발자가 좋아하는 영화는 최근 3년간 아래와 같습니다.
2021년도 모가디슈
2022년도 범죄도시2
2023년도 가디언즈 오브 갤럭시3
*/

const movies = [
    {year : '2021', mname : '모가디슈'},
    {year : '2022', mname : '범죄도시2'},
    {year : '2023', mname : '가디언즈 오브 갤럭시3'},
];

function MovieList(props){
    return <li>{props.year}년도 {props.mname}</li>
}

function WishList2(props){
    const mwlist = props.mList;
    return(
        <React.Fragment>
            <Title tit = '음식' />
            {
                mwlist.length > 0&&
                <div>
                    <h2>개발자가 좋아하는 영화는 최근 {mwlist.length}년간 아래와 같습니다.</h2>
                    <ul>
                        {
                            mwlist.map(val => <MovieList year={val.year} mname={val.mname} />)
                        }
                    </ul>
                </div>
            }
            {
                mwlist.length == 0&&
                <h2>개발자 영화가 아직 업데이트 되지 않았습니다.</h2>
            }
        </React.Fragment>
    )
}

const worksrc = {
    "피카소":"https://m.theartin.net/web/product/big/201907/30c5a0fdd153bfdfdc8f19b2f4166fa8.jpg",
    "모네":"https://dimg.donga.com/wps/NEWS/IMAGE/2015/12/11/75316598.3.jpg"
};

function MakeWork(props){
    return(
        <div>
            <h2>{props.painter}</h2>
            <img src={worksrc[props.painter]} alt={props.work} 
            tittle={props.work} style={{width : '400px'}} />
        </div>
    )
}

function ExpCom(props){
    const [result, setResult] = React.useState(props.isChange);
    const againFn = () => {
        setResult(!result);
    }
    return(
        <React.Fragment>
            <Title tit='명화' />
            <button onClick={againFn}>작가변경</button>
            {
                result ?
                <MakeWork painter='피카소' work='우는광대' />:
                <MakeWork painter='모네' work='양산을 든 여인' />

            }
        </React.Fragment>
    )
}

ReactDOM.render(
    <Developer info={true} isrc={devImg[0]} itit='개발자 공유' ialt='개발자 세계' />,
    document.querySelector('#root1')
);
ReactDOM.render(
    <Developer info={false} isrc={devImg[1]} itit='주먹왕 마동석' ialt='비개발자 세계' />,
    document.querySelector('#root2')
);
ReactDOM.render(
    <WishList f_info={foods} />,
    document.querySelector('#root3')
);
ReactDOM.render(
    <WishList2 mList={movies} />,
    document.querySelector('#root4')
);
ReactDOM.render(
    <ExpCom isChange={false} />,
    document.querySelector('#root5')
);


