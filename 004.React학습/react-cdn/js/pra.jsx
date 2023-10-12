// 이미지경로 배열
const devImg = [
    "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HYAONH6EGJBKIU5CJWWF343MKE.jpg",
    "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202208/24/BoiledMovie/20220824133926904mopw.png"
];

function MakeDev(){
    return <h1>나는 개발자야</h1>
}

function LostDev(){
    return <h1>개발자가 뭐니</h1>
}

function MakeImg(props){
    return <img src={props.isrc} alt={props.ialt} title={props.tit}/> 
}

function Developer(props){
    const isNow = props.info;
    if(isNow){
        return(
            <React.Fragment>
                <MakeDev />
                <MakeImg isrc={props.isrc} ialt={props.ialt} tit={props.tit} />
            </React.Fragment>
        );
    }
    return(
        <React.Fragment>
            <LostDev />
            <MakeImg isrc={props.isrc} ialt={props.ialt} tit={props.tit} />
        </React.Fragment>
    );
}

ReactDOM.render(
    <Developer info={true} isrc={devImg[0]} ialt='개발자 공유' tit='개발자에 오신것을 환영합니다.' />,
    document.querySelector('#root1')
)
ReactDOM.render(
    <Developer info={false} isrc={devImg[1]} ialt='주먹왕 마동석' tit='개발이뭐녀구' />,
    document.querySelector('#root2')
)