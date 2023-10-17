import dfn from './dom.js';

const arrNumber = [4, 5, 8, 10, 2, 1, 9, 3, 7, 6];
const arrString = ["파", "타", "하", "가", "바", "사", "다", "라", "차"];

const showNum = dfn.qs('.showNum');
const showNum2 = dfn.qs('.showNum2');
const selBox = dfn.qs('#sel');
const selBox2 = dfn.qs('#sel2');

const showScreen = () => {
    (showNum.innerHTML = arrNumber.map(
        val => `<img src="./images/num/num_0${val}.png" />`
    ).join(""));
}
showScreen();

dfn.addEvt(selBox, 'change', function(){
    let optVal = this.value;
    if(optVal == 1){
        arrNumber.sort((a,b) => a==b? 0:a>b? 1:-1);
    }else if(optVal==2){
        arrNumber.sort((a,b) => a==b? 0:a>b? -1:1);
    }
    showScreen();
});

const showScreen2 = () => {
    showNum2.innerHTML = arrString.map(val => `<span>${val}</span>`).join("");
}

showScreen2();

dfn.addEvt(selBox2, 'change', function(){
    let optVal = this.value;
    if(optVal == 1){
        arrString.sort((a,b) => (a==b? 0:a>b? 1:-1));
    }else if(optVal == 2){
        arrString.sort((a,b) => (a==b? 0:a>b? -1:1));
    }
    showScreen2();
});

const list1 = [
    {
        idx: 8,
        tit: "나는 구누?",
        cont: "공동구매) 슬로건 공구 (계좌와 네이버폼)",
    },
    {
        idx: 4,
        tit: "여기는 어디?",
        cont: "총공 공지] 오늘부터 일 2회, 총공 진행합니다",
    },
    {
        idx: 1,
        tit: "나야나",
        cont: "연합 갈라 서포트 계좌오픈",
    },
    {
        idx: 15,
        tit: "이제 얼마나 남은거니?",
        cont: "음악프로그램에 출연 요청글도 써볼까요?",
    },
]; 

const showList3 = dfn.qs('.showList3');

const upCode = (data, exBox) => {
    let hcode = data.map(val => 
        `
            <tr>
                <td>${val.idx}</td>
                <td>${val.tit}</td>
                <td>${val.cont}</td>
            </tr>
        `
    );

    exBox.innerHTML = `
        <table>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>내용</th>
            </tr>
            <tbody>
                ${hcode.join("")}
            </tbody>
        </table>
    `;
}

upCode(list1, showList3);

const sel3 = dfn.qs('.sel3');

dfn.addEvt(sel3, 'change', function(){
    targetData = list1;
    targetEle = showList3;
});
dfn.addEvt(sel3, 'change', sortingFn);

let targetData = list1;
let targetEle = showList3;

function sortingFn(){
    let optVal = this.value;
    let cta = this.previousElementSibling.value;
    if(optVal == 1){
        targetData.sort((a,b) =>{
            return a[cta] == b[cta]? 0:a[cta]>b[cta]? 1:-1;
        });
    }else if(optVal == 2){
        targetData.sort((a,b) =>{
            return a[cta] == b[cta]? 0:a[cta]>b[cta]? -1:1;
        });
    }

    upCode(targetData,targetEle);
}

const sel4 = dfn.qs('.sel4');
const showList4 = dfn.qs('.showList4');
const list2 = [
    {
        idx: 15,
        tit: "당근마켓에 가자",
        cont: "당근마켓이 정말로 싸고 좋다구~!",
    },
    {
        idx: 58,
        tit: "당근마켓에 가자",
        cont: "당근마켓이 항상 좋은건 아니야~! ㅜㅜ",
    },
    {
        idx: 74,
        tit: "점심에 뭐먹지? 당근이지!",
        cont: "오스틴님 생일 서포트 안내",
    },
    {
        idx: 18,
        tit: "직돌이는 쉬고싶다~!",
        cont: "활동정지에 대한 파생글 무통보 삭제 및 경고",
    },
    {
        idx: 104,
        tit: "올해는 다른 회사로 이직한다!",
        cont: "⚜️갈라콘 서포트에 많은 참여 부탁드립니다!",
    },
]; 

let newList = list2;
upCode(list2, showList4);

dfn.addEvt(sel4, 'change', ()=>{
    targetData = newList;
    targetEle = showList4;
});
dfn.addEvt(sel4, 'change', sortingFn);

dfn.addEvt(dfn.qs('.sbtn'), 'click', searchingFn);

function searchingFn(){
    let stxt = dfn.qs('.#stxt').value;
    let cta = dfn.qs('.cta4').value;
    let res = list2.filter(v=>{
        if(String(v[cta]).indexOf(stxt) != -1) return true;
    });
    upCode(res, showList4);

    newList = res;
}

dfn.addEvt(dfn.qs('.fbtn'), 'click', ()=>{
    newList = list2;
    upCode(newList, showList4);
    initSearch();
});

function initSearch(){
    dfn.qs('#stxt').value = '';
    dfn.qs('.cta4').value = 'idx';
    dfn.qs('.sel4').value = '0';
}