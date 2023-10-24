import dfn from './dom.js';

const btnLocal = dfn.qsa('.local-box button');
btnLocal.forEach(ele => dfn.addEvt(ele, 'click', localSFn));

dfn.qsa('.local ul li').forEach((ele, idx)=>{
    ele.onclick = function(){
        const keyName = ['lname', 'lrole', 'lcat'];
        localStorage.removeItem(keyName[idx]);
    }
})

function localSFn(){
    let btxt = this.innerText;
    if(btxt == '처음'){
        localStorage.setItem('lname', '이정재');
        localStorage.setItem('lrole','박평호역');
        localStorage.setItem('lcat','조직내 스파이를 색출하는 해외팀 안기부팀장');
    } else if (btxt == '보여줘') {
        dfn.qs('.local .nm').innerText = localStorage.getItem('lname');
        dfn.qs('.local .role').innerText = localStorage.getItem('lrole');
        dfn.qs('.local .cat').innerText = localStorage.getItem('lcat');
    }else if(btxt == '전체삭제'){
        localStorage.clear();
        bindData();
        bindMod();
    }else if(btxt == '처리'){
        if(!localStorage.getItem('minfo') || localStorage.getItem('minfo') == '[]') makeObj();
        bindData();
        bindMod();
    }
}

bindData();

function makeObj(){
    let obj = [
        {
            idx: 1,
            tit: '내가 왕이될 상인가?',
            cont: '이정재형은 진정 왕이십니다~!',
        },
    ];

    localStorage.setItem('minfo', JSON.stringify(obj));
}

function bindData(){
    let localData = localStorage.getItem('minfo');
    let bindCode = '';
    if(localData){
        localData = JSON.parse(localData);
        bindCode = localData.map((v, i) => `
            <tr>
                <td>${v.idx}</td>
                <td>${v.tit}</td>
                <td>${v.cont}</td>
                <td class='del-link'>
                    <a href="#" data-idx="${i}">X</a>
                </td>
            </tr>
        `).join('');
    }else{
        bindCode = `
        <tr>
            <td colspan="4" style="text-align:center">
                데이터가 없습니다...
            </td>
        </tr>
        `;
    }

    let hcode = `
        <table>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>내용</th>
                <th>삭제</th>
            </tr>
            ${bindCode}
        </table>
    `;

    dfn.qs('.board').innerHTML = hcode;

    dfn.qsa('.board .del-link a').forEach(ele => dfn.addEvt(ele, 'click', 
    ()=>delRec(ele.getAttribute('data-idx'))));
}

function delRec(idx){
    event.preventDefault();
    let orgData = localStorage.getItem('minfo');
    
    orgData = JSON.parse(orgData);
    if(confirm('정말정말 지우시게여?')){
        orgData.splice(idx,1);
        localStorage.setItem('minfo', JSON.stringify(orgData));

        bindData();
        bindMod();
    }
}

const modSel = dfn.qs('#sel');
const modTit = dfn.qs('#tit2');
const modCont = dfn.qs('#cont2');
const moBtn = dfn.qs('#mobtn');

function bindMod(){
    let orgData = localStorage.getItem('minfo');
    if(!orgData){
        localStorage.setItem('minfo', '[]');
        orgData = localStorage.getItem('minfo')
    }
    orgData = JSON.parse(orgData);

    modSel.innerHTML = `<option value ='show'>항목 선택</option>`;
    orgData.forEach(v=>{
        modSel.innerHTML += `
            <option value=${v.idx}>${v.tit}</option>
        `;
    })
    
}

bindMod();

dfn.addEvt(dfn.qs('#sbtn'), 'click', insData);

function insData(){
    let tit = dfn.qs('#tit').value;
    let cont = dfn.qs('#cont').value;

    if(tit.trim()=='' || cont.trim()==''){
        alert('입력데이터가 없습니다.');
        return;
    }

    let orgData = localStorage.getItem('minfo');
    if(!orgData){
        localStorage.setItem('minfo', []);
        orgData = localStorage.getItem('minfo');
    }
    orgData = JSON.parse(orgData);

    if(orgData.length !=0){
        orgData.sort((a, b)=> {
            return a.idx==b.idx? 0:a.idx>b.idx? 1:-1
        });
    }

    let lastArr = orgData.length==0? 0: orgData[orgData.length-1].idx;

    orgData.push({
        'idx' : lastArr + 1,
        'tit' : tit,
        'cont' : cont
    });

    localStorage.setItem('minfo', JSON.stringify(orgData));

    bindData();
    bindMod();
}

dfn.addEvt(modSel, 'change', setMod);

function setMod(){
    let optVal = this.value;
    if(optVal == 'show') return;

    let orgData = localStorage.getItem('minfo');
    if(!orgData){
        localStorage.setItem('minfo', '[]');
        orgData = localStorage.getItem('minfo');
    }
    orgData = JSON.parse(orgData);

    let selRec = orgData.find(v=>{
        if(v.idx == optVal)return true;
    });

    modTit.value = selRec.tit;
    modCont.value = selRec.cont;
}

dfn.addEvt(moBtn, 'click', modifyData);

function modifyData(){
    if(modSel.value == 'show') return;
    let selIdx = modSel.value;
    let orgData = localStorage.getItem('minfo');
    if(!orgData){
        localStorage.setItem('minfo', '[]');
        orgData = localStorage.getItem('minfo');
    }
    orgData = JSON.parse(orgData);

    orgData.find(v=>{
        if(v.idx == selIdx){
            v.tit = modTit.value;
            v.cont = modCont.value;
        }
    })
    localStorage.setItem('minfo', JSON.stringify(orgData));

    bindData();
    bindMod();
}