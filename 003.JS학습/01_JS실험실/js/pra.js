import dfn from './dom.js';

const banbox = dfn.qsa('.banbox');
banbox.forEach(ele => {
    slideFn(ele);
});

function slideFn(selEl){
    let clickSts = 0;
    const TIME_SLIDE = 400;

    const sldWrap = selEl;
    const slide = dfn.qsEl(sldWrap, '.slide');
    const abtn = dfn.qsaEl(sldWrap, '.abtn');
    let indic = dfn.qsEl(sldWrap, '.indix');

    let sldCnt = dfn.qsaEl(slide, 'li').length;

    for(let i=0; i<sldCnt; i++){
        indic.innerHTML += `
            <li ${i==0? 'class:"on"' : ''} >
                <span>○</span>
                <span>●</span>
            </li>
        `;
    }

    indic = dfn.qsaEl(slide, '.indic li');

    slide.querySelectorAll('li').forEach(
        (ele, idx) => ele.setAttribute('data-seq', idx)
    );

    abtn.forEach((ele) => dfn.addEvt(ele, 'click', goSlide));

    function goSlide(){
        event.preventDefault();
        if(clickSts) return;
        clickSts = 1;
        setTimeout(()=>clickSts = 0, TIME_SLIDE);

        let isRight = this.classList.contains('ab2');
        let eachOne = slide.querySelectorAll('li');

        if(isRight){
            rightSlide();
        }else{
            slide.insertBefore(eachOne[eachOne.length-1], eachOne[0]);
            slide.style.left = '-330%';
            slide.style.transition = 'none';
            setTimeout(()=>{
                slide.style.left = '-220%';
                slide.style.transition = TIME_SLIDE + 'ms ease-in-out';
            }, 0);
        }
        chgIndic(isRight);
        clearAuto();
    }

    function chgIndic(isRight){
        let nowSeq = slide.qsa('li')[isRight? 1:0].getAttribute('data-seq');

        indic.forEach((ele, idx) => {
            if(idx == nowSeq) ele.classList.add('on');
            else ele.classList.remove('on');
        });
    }

    function rightSlide(){
        slide.style.left = '-330%';
        slide.style.transition = TIME_SLIDE + 'ms ease-in-out';
        
        setTimeout(()=>{
            slide.appendChild(slide.qsa('li')[0]);
            slide.style.left = '-220%';
            slide.style.transition = 'none';
        }, TIME_SLIDE);
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