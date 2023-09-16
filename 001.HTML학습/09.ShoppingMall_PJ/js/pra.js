const domFn = {
    qs : (x) => document.querySelector(x),
    qsa : (x) => document.querySelectorAll(x),
    qsEl : (el, x) => el.querySelector(x),
    qsaEl : (el, x) => el.querySelectorAll(x),
    addEvt : (ele, evt, fn) => ele.addEventListener(evt, fn)
};


let slide = domFn.qsa('#slide li');
let abtn = domFn.qsa('.abtn');
let indic = domFn.qsa('.indic li');
console.log(indic);

let CNT_SLIDE = slide.length;
let snum = 0;
slide.forEach((ele, idx) => ele.setAttribute('data-seq', idx));

abtn.forEach(ele=>{
    domFn.addEvt(ele, 'click', goSlide);
});


function goSlide(){
    console.log(this);
    let isRight = this.classList.contains('ab2');
    if(isRight){
        snum++;
        if(snum == CNT_SLIDE) snum=0;
    }else{
        snum--;
        if(snum < 0) snum = CNT_SLIDE-1;
    }

    slide[snum].classList.add('on');
    slide.forEach(ele=>{
        if(!ele.isSameNode(slide[snum])){
            ele.classList.remove('on');
        }
    })

    let nowSeq = slide[isRight? 1:0].getAttribute('data-seq');
    console.log(nowSeq);
    indic.forEach((ele, idx) => {
        if(nowSeq == idx) ele.classList.add('on');
        else ele.classList.remove('on');
    });

}