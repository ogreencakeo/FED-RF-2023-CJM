import dFn from './dom.js';

const fruit = ["배", "사과", "용과", "딸기"];

const frObj = {
    배: "fruits_01",
    사과: "fruits_02",
    용과: "fruits_14",
    딸기: "fruits_09",
    두리안: "fruits_17",
    바나나: "fruits_15",
    수박: "fruits_12",
    파인애플: "fruits_13",
    망고: "fruits_24",
    오렌지: "fruits_03",
    체리: "fruits_05",
    멜론: "fruits_11",
    블루베리: "fruits_20",
    레몬: "fruits_04",
};

const showit = dFn.qs('.showit');
const cont = dFn.qs('.cont');
const mbtn = dFn.qsa('.mbtn');

const sel = dFn.qs('#sel');
const anum = dFn.qs('#anum');
const delNum = dFn.qs('#delnum');

sel.innerHTML = Object.keys(frObj).map((ele)=> `<option>${ele}</option>`).join("");

const arrayShow = () => (showit.innerText = fruit.join('/'));
arrayShow();

const bindCombo = () => {
    anum.innerHTML = fruit.map((v, i)=>`<option value=${i}>${v}</option>`).join("");
}
bindCombo();

mbtn.forEach(ele => {
    dFn.addEvt(ele, 'click', showFruit);
});

function showFruit(){
    let btxt = this.innerText;
    let hcode = '';
    if(btxt == '과일주세요~!'){
        fruit.forEach(val => {
            hcode += `
                <li style = 'background : url(./addimg/${frObj[val]}).png no-repeat center/cover'>
                    ${val}
                </li>
            `;
        });
        cont.innerHTML = `<ul>${hcode}</ul>`;
    }else if(btxt == '뒷배열추가요~!'){
        fruit.push(sel.value);
    }else if(btxt == '앞배열추가요~!'){
        fruit.unshift(sel.value);
    }else if(btxt == '앞배열삭제요~!'){
        fruit.shift();
    }else if(btxt == '뒷배열삭제요~!'){
        fruit.pop();
    }else if(btxt == '중간배열삭제'){
        fruit.splice(anum.value, delNum.value);
    }else if(btxt == '중간배열삽입'){
        fruit.splice(delNum.value, 0, sel.value);
    }
    arrayShow();
    bindCombo();
}