const Dfn = {
    qs : x => document.querySelector(x),
    qsa : x => document.querySelectorAll(x),
    addEvt : (ele, evt ,fn) => ele.addEventListener(evt, fn),
    cg : x => console.log(x),
    addZero : x => x<10? '0'+x : x,
    // 날짜 찍기 형식 변경 함수(yyyy-mm-dd시간)
    fm : x => `
        ${x.getFullYear()
        }-${Dfn.addZero(x.getMonth()+1)
        }-${Dfn.addZero(x.getDate())
        }(${week[x.getDay()]})
    `
};

const week = ['일', '월', '화', '수', '목', '금', '토']; 

function makeDallyeok(){
    
}