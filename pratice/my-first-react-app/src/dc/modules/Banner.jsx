import {banData} from '../data/banner';
import '../../css/banner.css';

import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export function Banner(props){

    const selData = banData[props.category];

    const A_TM = 600;
    const A_ES = 'easeInOutQuint';
    let cSts = 0;
    let sNum = 0;

    const goSlide = (e) => {
        const tg = e.target;
        const sldBox = $(tg).siblings('.slider');
        const indic = $(tg).siblings('.indic').find('li');
        const sCnt = sldBox.find('li').length;

        if(cSts) return;
        cSts = 1;
        setTimeout(()=> (cSts = 0), A_TM);

        let isR = $(tg).is('.rb');

        if(isR){
            sldBox.animate({
                left : '-100%',
            }, A_TM, A_ES, () =>{
                sldBox.append(sldBox.find('li').first())
                .css({left : '0'});
            })
            sNum++;
            if(sNum >= sCnt) sNum = 0;
        }else{
            sldBox.prepend(sldBox.find('li').last())
            .css({left : '-100%'})
            .animate({left : '0'}, A_TM, A_ES);
            sNum--;
            if(sNum < 0 ) sNum = sCnt-1;
        }

        indic.eq(sNum).addClass('on').siblings().removeClass('on');
    };

    const makeList = (data) => {
        return data.map((v,i) => (
            <li key={i}>
                <img src={v.src} alt="배너 이미지" />
                <section className='bantit'>
                    <h3>{v.tit1}</h3>
                    <h2>{v.tit2}</h2>
                    <p>{v.cont}</p>
                    {v.btn != '' && <button>{v.btn}</button>}
                </section>
            </li>
        ));
    };

    return(
        <div className="banner">
            <ul className="slider">{makeList(selData)}</ul>
            {
                selData.length > 1 && (
                    <>
                        <button className='abtn lb' onClick={goSlide}>
                            ＜
                        </button>
                        <button className="abtn rb" onClick={goSlide}>
                            ＞
                        </button>
                        <ol className="indic">
                            {selData.map((v,i) =>
                                <li key={i} className={i==0? 'on' : ''}>
                                    {/*  */}
                                </li>
                            )}
                        </ol>
                    </>
                )
            }
        </div>
    );
}