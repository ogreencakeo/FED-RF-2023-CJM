import { useEffect } from "react";
import { banData } from "../data/banner";

import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

import '../../css/banner.css';

function slideFn(){
    const sldBox = $('.slider');
    const indic = $('.indic li');

    const A_TM = 600;
    const A_ES = 'easeInOutQuint';
    let sNum = 0;
    let cSts = 0;
    const sCnt = sldBox.find('li').length;

    $('.abtn').click(function(){
        if(cSts) return;
        cSts = 1;
        setTimeout(()=> cSts=0, A_TM);

        let isR = $(this).is('.rb');

        if(isR){
            sldBox.animate({
                left : '-100%',
            }, A_TM, A_ES, ()=>{
                sldBox.append(sldBox.find('li').first())
                .css({left :'0'});
            });
            sNum++;
            if(sNum >= sCnt.length) sNum = 0;
        }else{
            sldBox.prepend(sldBox.find('li').last())
            .css({left : '-100%'})
            .animate({left : '0'}, A_TM, A_ES);
            sNum--;
            if(sNum <0) sNum = sCnt-1;
        }
        indic.eq(sNum).addClass('on').siblings().removeClass('on');
    })
}

export function Banner(props){
    const selData = banData[props.category];

    useEffect(()=> {
        if(selData.length > 1) slideFn();
    })

    const makeList = (data) => {
        return data.map((v, i) => 
            <li key={i}>
                <img src={v.src} />
                <section className="bantit">
                    <h3>{v.tit1}</h3>
                    <h2>{v.tit2}</h2>
                    <p>{v.cont}</p>
                    <button>{v.btn}</button>
                </section>
            </li>
        )
    };

    return(
        <div className="banner">
            <ul className="slider">
                {makeList(selData)}
            </ul>
            {
                selData.length > 1 &&
                <>
                    <button className="abtn lb">＜</button>
                    <button className="abtn rb">＞</button>
                    <ol className="indic">
                        {
                            selData.map((v,i) => 
                                <li className={i==0? 'on' : ''} key={i}></li>
                            )
                        }
                    </ol>
                </>
            }
        </div>
    )
}