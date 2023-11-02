import bData from './data.json' assert { type : 'json'};

bData.sort(Number(a.idx) == Number(b.idx)? 0 :
Number(a.idx) > Number(b.idx)? -1:1);

let myData = JSON.stringify(bData);

if(!localStorage.getItem('boardData')){
    localStorage.setItem('boardData', myData);
}

let useData = localStorage.getItem('boardData');
useData = JSON.parse(useData);

const board = $('#board tbody');

let listNum = 0;

const addNum = () => ++listNum;

const pgBlock = 9;
const pgNum = 1;
const totalCnt = bData.length;
let pagingBlock = Math.floor(totalCnt / pgBlock);
let addOver = totalCnt % pgBlock;

export const updateList = (newPgNum) => {
    pgNum = newPgNum;

    listNum = (pgNum-1) * pgBlock;
    for(let i=(pgNum-1)*pgBlock; i<pgBlock*pgNum; i++){
        if(i>=totalCnt) break;
        hcode += `
            <tr>
                <td>${addNum()}</td>
                <td>${bData[i].tit}</td>
                <td>${bData[i].writer}</td>
                <td>${bData[i].date}</td>
                <td>${bData[i].cnt}</td>
            </tr>

        `;
    }
    board.html(hcode);

    const pNumBlock = $('.paging');
    let pNumCode = '';
    let newPagingBlock;

    if(addOver!=0) newPagingBlock = pagingBlock + 1;
    for(let x=0; x<newPagingBlock; x++){
        pNumCode += x + 1 ==pgNum ? `<b>${x+1}</b>` : `<a href="#">${x+1}</a>`;
        if(x < newPagingBlock - 1) pNumCode += ' | ';
    }
    $('.paging a').click(function(e){
        e.preventDefault();
        let atxt = $(this).text();
        updateList(atxt);
    })
};

