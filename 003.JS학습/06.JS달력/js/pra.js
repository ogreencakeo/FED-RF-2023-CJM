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

    const initDallyeok = () => {
        dateSet.splice(0);
        hcode = '';

        let cYear = currDate.getFullYear();
        let cMt = currDate.getMonth();

        const prevLast = new Date(cYear, cMt, 0);
        const thisFirst = new Date(cYear, cMt, 1);
        const thisLast = new Date(cYear, cMt+1, 0);

        yearTit.innerHTML = cYear;
        monthTit.innerHTML = cMt+1;

        let fDay = thisFirst.getDay();
        if(fDay != 0){
            for(let i=0; i<fDay; i++){
                dateSet.unshift(`
                    <span style = "color : #ccc" class="bm">
                        ${prevLast.getDate()-i}
                    </span>
                `);
            }
        }

        for(let i=1; i<=thisLast.getDate(); i++){
            dateSet.push(i);
        }

        for(let i=1; i<=14; i++){
            dateSet.push(
                `
                    <span style="color : #ccc" class="am">
                        ${i}
                    </span>
                `
            );
        }

        for(let i=0; i<42; i++){
            if(
                (today.getDate()==dateSet[i] && (today.getMonth()==currDate.getMonth()) && today.getFullYear()==currDate.getFullYear())
            ){
                hcode += `<div class="date today">${dateSet[i]}</div>`
            }else{
                hcode += `<div class="date">${dateSet[i]}</div>`
            }
        }
        dates.innerHTML = hcode;

        let newDate = Dfn.qsa('.date');

        newDate.forEach(ele => {
            Dfn.addEvt(ele, 'click', ()=>{
                let nowY = yearTit.innerText;
                let nowM = monthTit.innerText;
                let nowD = ele.innerText;

                let isSpan = Dfn.qsEl(ele, 'span');
                if(isSpan){
                    let isAM = isSpan.classList.contains('am');
                    if(isAM){
                        nowM++;
                        if(nowM==13){
                            nowM=1;
                            nowY++;
                        }else{
                            nowM--;
                            if(nowM==0){
                                nowM=12;
                                nowY--;
                            }
                        }
                    }
                }
            });
        }); 
    };
    const chgvCalendar = (num) => {
        currDate.setMonth(currDate.getMonth()+num);
        initDallyeok();
    };

    Dfn.addEvt(Dfn.qs('.btnL'), 'click', ()=>chgvCalendar(-1));
    Dfn.addEvt(Dfn.qs('.btnR'), 'click', ()=>chgvCalendar(1));

    initDallyeok();
}