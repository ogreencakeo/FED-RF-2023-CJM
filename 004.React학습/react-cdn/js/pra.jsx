// 이미지경로 배열
const devImg = [
    "https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/HYAONH6EGJBKIU5CJWWF343MKE.jpg",
    "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202208/24/BoiledMovie/20220824133926904mopw.png"
];

function MakeDev(){
    return <h1>나는 개발자야!</h1>;
}

function LostDev(){
    return <h1>개발자가 뭐지?</h1>;
}

function Developer(props){
    const info = props.inDev;
    if(info){
        return(
            <React.Fragment>
                <MakeDev />
                <MakeImg isrc={props.psrc} ialt ={props.palt} />
            </React.Fragment>
        )
    }

    return(
            <React.Fragment>
                <LostDev />
                <MakeImg isrc={props.lsrc} ialt ={props.lalt} />
            </React.Fragment>
    )
}

function MakeImg(props){
    return(
        <img src={props.isrc} alt={props.ialt} />
    )
}

ReactDOM.render(
    <Developer inDev = {true} psrc={devImg[0]} palt='개발자 공유' />,
    document.querySelector('#root1')
)

ReactDOM.render(
    <Developer inDev = {false} lsrc={devImg[1]} lalt='주먹왕 마동석' />,
    document.querySelector('#root2')
)

const foods = ['스파게티', '짜파게티', '냉면', '짜장면', '마라탕'];


function FoodList(props){
    return <li>개발자가 좋아하는 음식은 {props.name}입니다.</li>;
}

function FoodTit(props){
    return <h1>개발자가 좋아하는 {props.tit}</h1>
}

function WishList(props){
    const myFood = props.wlist;
    return(
        <React.Fragment>
            <FoodTit tit = '음식' />
            {
                myFood.length > 0 &&
                <div>
                    <h1>개발자가 좋아하는 음식은 {myFood.length}개입니다.</h1>
                    <ul>
                        {
                            myFood.map(val => <FoodList name={val}/>)
                        }
                    </ul>
                </div>
            }
            {
                myFood.length == 0 &&
                <h2>아직 개발자 음식 리스트가 업데이트 되지 않았습니다.</h2>            
            }
        </React.Fragment>
    )
}

ReactDOM.render(
    <WishList wlist = {foods} />,
    document.querySelector('#root3')
);