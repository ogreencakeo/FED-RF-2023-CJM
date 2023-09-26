import dFn from './dom.js';

const tt = dFn.qsa('.tt');

const week = ['일', '월', '화', '수', '목', '금', '토'];
const addZero = (num) => (num<10? "0"+num : num);

setInterval(showTime, 1000);
showTime();

function showTime(){
    const today = new Date();
    tt[0].innerText = today.getFullYear();
    tt[1].innerText = today.getMonth() + 1;
    tt[2].innerText = today.getDate();
    tt[3].innerText = week[today.getDay()];

    let H = today.getHours();
    tt[5].innerText = addZero(H>12? H-12 : H);
    tt[4].innerText = H>12? '오후':'오전';

    let M = today.getMinutes();
    tt[6].innerText = addZero(M);

    let S = today.getSeconds();
    tt[7].innerText = addZero(S);
}

let rdn = Math.random();
const rimg = ["https://img.etnews.com/photonews/2110/1461216_20211007085904_466_0001.jpg", "https://d2qqqnyszmt41w.cloudfront.net/wp-content/uploads/2021/04/23150534/202104231445162082.jpg", "https://img.imbc.com/adams/Program/202111/132804027350463581.jpg", "https://image.ytn.co.kr/general/jpg/2021/0925/202109251350012465_d.jpg"];

const imbx = dFn.qs('.imbx');

rimg.forEach(val => {
    imbx.innerHTML += `
        <div>
            <img src = '${val}'>
        </div>
    `;
});

const target = dFn.qsa('.imbox div');

setInterval(colorImg, 2000);

let bNum = 1000;
function colorImg(){
    let rbmNum = Math.floor(Math.random()*4);
    while(rbmNum == bNum){
        rbmNum = Math.floor(Math.random()*4);
    }
    bNum = rbmNum;

    target.forEach((ele, idx)=>{
        if(idx == rbmNum) ele.classList.add('on');
        else ele.classList.remove('on');
    })
}