const domFn = {
    qs : (x) => document.querySelector(x),
    qsa : (x) => document.querySelectorAll(x),
    qsEl : (el, x) => el.querySelector(x),
    qsaEl : (el, x) => el.querySelectorAll(x),
    addEvt : (ele, evt, fn) => ele.addEventListener(evt, fn)
};

const mvCode = {
    '닥터스트레인지2':'mI9oyFMUlfg',
    '쥬라기월드:도미니언':'DSEfRVqjbFA',
    '브로커':'DpVAb7Bi5UQ',
    '범죄도시2':'aw9j_23nORs',
    '잠':'aRxQDCXnfOc',
    '스파이더맨:노웨이홈':'W7edvITC9g4',
}

domFn.addEvt(window, 'load', loadFn);

function loadFn(){
    const pmenu = domFn.qsa('.poster-menu a');
    const screen = domFn.qs('.screen');
    const plist = domFn.qsa('.poster-menu>ul>li');

    pmenu.forEach(ele=>{
        domFn.addEvt(ele, 'click', ()=>{
            let txt = domFn.qsEl(ele, 'li').innerText;
            screen.innerHTML = `
                <iframe src="https://www.youtube.com/embed/${mvCode[txt]}?autoplay=1" allow="autoplay"></iframe>
            `;
            
            plist.forEach(ele=> ele.classList.remove('on'));
            ele.parentElement.classList.add('on');
        });
    });

    
}
