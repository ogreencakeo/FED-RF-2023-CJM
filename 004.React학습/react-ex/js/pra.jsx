import React from 'react';
import myData from './data.js';
import myData2 from './data2.js';
import { firstOneFn, initFn } from './pra';

const twoData = [myData, myData2];

function MainComponent(){
    const [dataNum, setDataNum] = React.useState(0);
    const [test, setTest] =React.useState(0);
    const [subView, setSubView] = React.useState(0);

    React.useLayoutEffect(initFn);
    React.useEffect(firstOneFn, [])

    React.useEffect(()=>{
        console.log('dataNum');
    }, [dataNum])
    React.useEffect(()=>{
        console.log('test');
    }, [test])

    const chgData = () => {
        setDataNum(dataNum? 0:1);
    }
    const testFn = () => {
        setTest(test? 0:1);
    }



    return(
        <React.Fragment>
            <h1 className='tit'>{dataNum? '효진이 입고 다닌다는!' : '공유가 신고 다닌다는!'}</h1>
            <section>
                <h2>{dataNum? '효진은 오늘도 쨍~합니다!' : '공유는 오늘도 멋찝니다!'}</h2>
                <div className='img-box'>
                    <img src={dataNum?  "./images/gallery/hyo.jpg":
                    "./images/vans/gongyoo.jpg"}
                    alt={dataNum? '아름다운 효진' : '멋진공유'} />
                </div>
            </section>
            <button onClick={chgData}>{dataNum? '공유':'효진'}초이스</button>
            <button onClick={testFn}>의존성 테스트</button>
            <div className="gwrap">
                {
                    subView == 0 &&
                    <GoodsCode idx={dataNum} chgFn = {chgSubView} />
                }
                {
                    subView == 1 &&
                    <subViewCode idx={dataNum} chgFn = {chgSubView} />
                }
            </div>
        </React.Fragment>
    );
}

function GoodsCode(props){
    const selData = twoData[props.idx];
    return selData.map(v=>
        <a href="#" onClick={()=>props.chgFn(1)}>
            <ol className='glist'>
                <li>
                    <img src={props.idx? 
                    "./images/gallery/" + v.idx +".jpg" :
                    "./images/vans/vans_" + v.idx + ".jpg"} 
                    alt={props.idx? '드레스' :'신발'} />
                </li>
                <li>{v.gname}</li>
                <li>{v.gprice}원</li>
            </ol>
        </a>
    );
}
function SubViewCode(props){
    const selData = twoData[props.idx][0];
    return (
        <ol>
            <li>
                <img src={props.idx? 
                "./images/gallery/" + selData.idx +".jpg" :
                "./images/vans/vans_" + selData.idx + ".jpg"} 
                alt={props.idx? '드레스' :'신발'} />
            </li>
            <li>
                {selData.gname} <br />
                {selData.gprice}원
                <button onClick={()=>props.chgFn(0)}>리스트로 가기</button>
            </li>
        </ol>
        

    );
}


ReactDOM.render(
    <MainComponent />,
    document.querySelector('#root')
)