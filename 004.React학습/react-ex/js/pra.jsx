import { GoodsCode } from "./01.sub_com/goods_code";
import { SubViewCode } from "./01.sub_com/sub_view_code";
import { firstOneFn, initFn } from "./act_effect";
import myData from './data.js';
import myData2 from './data2.js';

const twoData = [myData, myData2];

function MainComponent(){
    const [dataNum, setDataNum] = React.useState(0);
    const [subView, setSubView] = React.useState(0);
    const [selItem, setSelItem] = React.useState(0);
    const [effectOK, setEffectOK] = React.useState(0);

    React.useLayoutEffect(()=>{if(effectOK) initFn();})
    React.useEffect(()=>{if(effectOK) firstOneFn();})

    const chgData = () => {
        setDataNum(dataNum? 0:1);
        setSubView(0);
    }

    const chgSubView = (num, idx) =>{
        setSubView(num);
        setSelItem(idx);
        setEffectOK(0);
    }

    return(
        <React.Fragment>
            <h1 className="tit">{dataNum? '효진이 입고' : '공유가 신고'}다닌다는</h1>
            <section>
                <h2>{dataNum? '효진은 오늘도 쨍~합니다!' : '공유는 오늘도 멋찝니다!'}</h2>
                <div className="img-box">
                    <img src={
                        dataNum? './images/gallery/hyo.jpg' :
                        './images/vans/gongyoo.jpg'
                    } alt={dataNum? '엘레강스한 효진' : '멋진공유'} />
                </div>
            </section>
            <button onClick={()=>{chgData(); setEffectOK(1);}}>{dataNum? '공유' : '효진'}초이스</button>
            <div className="gwrap">
                {
                    subView == 0 &&
                    <GoodsCode idx={dataNum} chgFn={chgSubView} />
                }{
                    subView == 1 &&
                    <SubViewCode idx = {dataNum} chgFn={chgSubView} itemNum={selItem} />
                }
            </div>
        </React.Fragment>
    )
}

function GoodsCode(props){
    const selData = twoData[props.idx];
    return selData.map((x)=>
        <a href="#" onClick={()=>props.chgFn(1, v.dix)}>
            <ol class='glist'>
                <li>
                    <img src={props.idx?
                    './images/gallery/' + v.idx + '.jpg' :
                    './images/vans/vans_' + v.idx + '.jpg'} />
                </li>
                <li>{x.gname}</li>
                <li>{x.gprice}</li>
            </ol>
        </a>
    );
}

function SubViewCode(props){
    const selData = twoData[props.idx];
    const selItem = selData.find(v=>{
        if(v.idx == props.itemNum) return true;
    });
    return(
        <ol style={{display : 'flex', listStyle : 'none'}}>
            <li>
                <img src={props.idx?
                './images/gallery/' + selItem.idx + '.jpg' : 
                './images/vans/vans_' + selItem.idx + '.jpg'    
            } alt={props.idx? '드레스' : '신발'} />
            </li>
            <li>
                {selItem.gname} <br/>
                {selItem.gprice} 원 <br/>
                <button onClick={()=>props.chgFn(0, 0)}>리스트 바로가기</button>
            </li>
        </ol>
    )
}

ReactDOM.render(
    <MainComponent />,
    document.querySelector('#root')
)