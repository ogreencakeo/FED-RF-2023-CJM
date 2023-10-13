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
makeDallyeok();
function makeDallyeok(){
    const currDate = new Date();
    const today = new Date();
    const yearTit = Dfn.qs('.yearTit');
    const monthTit = Dfn.qs('.monthTit');
    const dates = Dfn.qs('.dates');
    const dateSet = [];

    let hcode = '';

    
    const initDallyeok = () =>{

        let cYear = currDate.getFullYear();
        let cMt = currDate.getMonth();

        console.log(cMt);

        const prevLast = new Date(cYear, cMt, 0); 
        const thisFirst = new Date(cYear, cMt, 1); 
        const thisLast = new Date(cYear, cMt+1, 0);

        yearTit.innerHTML = cYear;
        monthTit.innerHTML = cMt+1;

        let fDay = thisFirst.getDay();
        if(fDay !=0 ){
            for(let i=0; i<fDay; i++){
                dates
            }
        }
    }
    initDallyeok();
}