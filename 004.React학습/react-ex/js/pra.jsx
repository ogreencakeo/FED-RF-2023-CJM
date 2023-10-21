import myData from './data.js';
import myData2 from './data2.js';
import {initFn, firstOneFn} from './pra.js'

const twoData = [myData, myData2];

function MainComponent(){
    const [dataNum, setDataNum] = React.useState(0);
    const chgData = () => {
        setDataNum(dataNum? 0:1)
    };

    React.useLayoutEffect(initFn);
    React.useEffect(firstOneFn, []);
    React.useState(()=>{
        console.log('dataNum');
    }, [dataNum])

    return(
        <React.Fragment>
            <h1 className='tit'>{dataNum? '효진이 입고 다닌다는!' : '공유가 신고 다닌다는!'}</h1>
            <section>
                <h2>{dataNum? '효진은 오늘도 쨍~합니다!' : '공유는 오늘도 멋찝니다!'}</h2>
                <div className='img-box'>    
                    <img src={
                        dataNum? "./images/gallery/hyo.jpg" :  "./images/vans/gongyoo.jpg"
                    } alt={dataNum? '아름다운 효진' : '멋진 공유'} />
                </div>
            </section>
            <button className='btn-gong' onClick={chgData}>{dataNum? '공유' : '효진'}초이스</button>
            <div className='gwrap'>
                <GoodsCode idx={dataNum? 1:0} />
            </div>
        </React.Fragment>
    )
}

function GoodsCode(props){
    const selData = twoData[props.idx];
    return selData.map((v)=>
        <ol className='glist'>
            <li>
                <img src={
                    props.idx? './images/gallery/'+v.idx+'.jpg' 
                    : './images/vans/vans_' + v.idx + '.jpg'
                } alt={props.idx? '드레스' : '신발'} />
            </li>
            <li>{v.gname}</li>
            <li>{v.gprice}원</li>
        </ol>
    );
}

ReactDOM.render(
    <MainComponent />,
    document.querySelector('#root')
)