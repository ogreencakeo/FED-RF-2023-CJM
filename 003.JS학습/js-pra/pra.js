import dFn from './dom.js';
console.log(dFn);

const fruit = ['배', '사과', '용과', '딸기'];

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

const mbtn = dFn.qsa('.mbtn');
const showit = dFn.qs('.showit');
const cont = dFn.qs('.cont');
const sel = dFn.qs('#sel');
const anum = dFn.qs('#anum');
const delnum = dFn.qs('#delnum');

const showArray = () => showit.innerText = fruit.join('/');
showArray();
const bindCombo = () => anum.innerHTML = fruit.map((ele, idx) => `<option value = "${idx}">${ele}</option>`).join("");

sel.innerHTML = Object.keys(frObj).map(v => `<option>${v}</option>`).join("");

mbtn.forEach(ele => dFn.addEvt(ele, 'click', showFruit));

function showFruit(){
    let btxt = this.innerText;
    if(btxt == '과일주세요~!'){
        let hcode = '<ul>';
        fruit.forEach(ele => {
            hcode += `
                <li style = 'background : url(../addimg/${frObj[ele]}).png no-repeat center/cover'>
                    ${ele}
                </li>
            `;
        });
        hcode += '</ul>';
        cont.innerHTML = hcode;
    }else if(btxt == '뒷배열추가요~!'){
        fruit.push(sel.value);
    }else if(btxt == '앞배열추가요~!'){
        fruit.unshift(sel.value);
    }else if(btxt == '뒷배열삭제요~!'){
        fruit.pop();
    }else if(btxt == '앞배열삭제요~!'){
        fruit.shift();
    }else if(btxt == '중간배열삭제'){
        fruit.splice(anum.value, delnum.value);
    }else if(btxt == '중간배열삽입'){
        fruit.splice(anum.value, 0, sel.value);
    }

    showArray();
    bindCombo();
}