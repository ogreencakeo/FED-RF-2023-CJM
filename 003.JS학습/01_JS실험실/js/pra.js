const domFn = {
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),

    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
    getBCR : (ele) => ele.getBoundingClientRect().top,
}

domFn.addEvt(window, 'load', loadFn);

function loadFn(){
    
    const target = domFn.qsa('.gnb li');
    const mbg = domFn.qs('.mbg');

    target.forEach(ele => {
        domFn.addEvt(ele, 'mouseover', overFn);
        domFn.addEvt(ele, 'mouseout', outFn);
    });

    function overFn(){
        let move_left = this.offsetLeft;
        mbg.style.left = move_left + 'px';
        mbg.style.opacity = 1;
    }
    function outFn(){
        mbg.style.opacity = 0;
    }

}