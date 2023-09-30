import dFn from './dom.js';

const banbx =dFn.qsa('.banbx');
banbx.forEach(ele => slideFn(ele));

function slideFn(selEl){

    let clickSts = 0;
    const TIME_SLIDE = 400;

    const sldWrap = selEl;

    const slide = dFn.qsEl(sldWrap, '.slide');
    const abtn = dFn.qsaEl(sldWrap, '.abtn');
    let indic = dFn.qsEl(sldWrap, '.indic');

    let sldCnt = dFn.qsaEl(slide, 'li').length;

    for(let i=0; i<sldCnt; i++){
        indic.innerHTML += `
            <li ${i==0? 'class="on"' : ''}>
                <img src="images/dot1.png" alt="흰색">
                <img src="images/dot2.png" alt="회색">
            </li>
        `;
    }

    indic = dFn.qsaEl(sldWrap, '.indic li');

    dFn.qsaEl(slide, 'li').forEach((ele, idx) => ele.setAttribute('data-seq', idx));
    abtn.forEach(ele => dFn.addEvt(ele, 'click', goSlide));

    function goSlide(){
        event.preventDefault();
        if(clickSts) return;
        clickSts = 1;
        setTimeout(()=> clickSts=0, TIME_SLIDE);
        let isR = this.classList.contains('ab2');
        let eachOne = dFn.qsaEl(slide, 'li');
        if(isR){
            rightSlide();
        }else{
            slide.insertBefore(eachOne[eachOne.length-1], eachOne[0]);
            slide.style.left = '-330%';
            slide.style.transition = 'none';
            setTimeout(()=>{
                slide.style.left = '-220%';
                slide.style.transition = '.4s ease-in-out';
            },0);
        }
        chgIndic(isR);
        clearAuto();
    }
    function chgIndic(isR){
        let seq = dFn.qsaEl(slide, 'li')[isR? 1:0].getAttribute('data-seq');
        indic.forEach((ele, idx) => {
            if(seq == idx){
                ele.classList.add('on');
            }else{
                ele.classList.remove('on');
            }
        });
    }
        
    
    function rightSlide(){
        slide.style.left = '-330%';
        slide.style.transition = '.4s ease-in-out';
        setTimeout(()=>{
            slide.appendChild(dFn.qsaEl(slide,'li')[0]);
            slide.style.left = '-220%';
            slide.style.transition = 'none';
        }, 400);
    }
    
    let autoI;
    let autoT;
    
    function slideAuto(){
        autoI = setInterval(()=>{
            rightSlide();
            chgIndic(1);
            abtn[1].click();
        }, 3000);
    }
    slideAuto();
    
    function clearAuto(){
        clearInterval(autoI);
        clearTimeout(autoT);
        autoT = setTimeout(slideAuto, 5000);
    }
    
}



