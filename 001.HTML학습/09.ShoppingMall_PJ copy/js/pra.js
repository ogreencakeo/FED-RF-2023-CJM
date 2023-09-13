// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

const addEvt = 
(ele, evt, fn) => ele.addEventListener(evt, fn);

addEvt(window,"DOMContentLoaded", loadFn);
function loadFn() {
    const slide = qs('#slide');
    let abtn = qsa('.abtn');
    let indic = qsa('.indic li');

    slide.querySelectorAll('li').forEach((ele, idx) => {ele.setAttribute('data-seq', idx)});

    abtn.forEach(ele=>{
        addEvt(ele, 'click', ()=>{
            let isRight = ele.classList.contains('ab2');
            let eachOne = slide.querySelectorAll('li');
            let indic = qsa('.indic li');
            console.log('isRight', isRight);
            if(isRight){
                slide.style.left = '-100%';
                slide.style.transition = '.4s ease-in-out';
                setTimeout(() => {
                    slide.appendChild(eachOne[0]);
                    slide.style.left = '0';
                    slide.style.transition = 'none';
                }, 400);
            }else{
                slide.insertBefore(eachOne[eachOne.length-1], eachOne[0]);
                slide.style.left = '-100%';
                slide.style.transition = 'none';
                setTimeout(()=>{
                    slide.style.left = '0';
                    slide.style.transition = '.4s ease-in-out';
                })
            }

            let nowSeq = slide.querySelectorAll('li')[isRight? 1:0].getAttribute('data-seq');
            indic.forEach((ele, idx) =>{
                    if(idx == nowSeq) ele.classList.add('on');
                    else ele.classList.remove('on');
                }
            )
            
        });
        
    })
} 