
const domFn = {
    qs: (x) => document.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsEl: (el, x) => el.querySelector(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}

const mini_space = domFn.qs('.mini-space');
const stxt = domFn.qs('.stxt span');
const rbtn = domFn.qs('.rbtn');
const mini_img = domFn.qsa('.mini-box img');

mini_img.forEach(ele=>{domFn.addEvt(ele, 'click', showImage)});
domFn.addEvt(rbtn, 'click', removeMini);

function showImage(){
    let mini_length = this.getAttribute('data-cnt');

    for(let i =0; i<mini_length; i++){
        mini_space.innerHTML += `
            <img src="../images/Minions.png" alt="">
        `; 
    }

    let mini_cnt = domFn.qsaEl(mini_space, 'img').length;

    stxt.innerText = mini_cnt;
    
}

function removeMini(){
    mini_space.innerHTML = ``;
    stxt.innerText = 0;
}