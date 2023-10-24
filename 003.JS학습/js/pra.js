import dfn from "./dom.js";

const btnLocal = dfn.qsa('.local-box button');
btnLocal.forEach(ele => dfn.addEvt(ele, 'click', localFn));

dfn.qsa('.local ul li').forEach((ele, idx)=>{
    const keyName = ['lname', 'lrole', 'lcat'];
    ele.onclick = function(){
        localStorage.removeItem(keyName[idx]);
    }
});

function localFn(){
    let btxt = this.innerText;
    if(btxt == '처음'){
        localStorage.removeItem('lname', '이정재');
        localStorage.removeItem('lrole', '박평호');
        localStorage.removeItem('lcat', '조직내 스파이를 색출하는 해외팀 안기부 팀장');
    }else if(btxt == '전체삭제'){
        localStorage.clear();
    }else if(btxt == '보여줘'){
        dfn.qs('.local .nm').innerText = localStorage.getItem('lname');
        dfn.qs('.local. .role').innerText = localStorage.getItem('lrole');
        dfn.qs('.local .cat').innerText = localStorage.getItem('lcat'); 
    }else if(btxt == '처리'){
        if(!localStorage.getItem('minfo')) makeObj();
        bindData();
    }
}

function makeObj(){
    let obj = [
        {
            idx: 1,
            tit: "내가 왕이 될 상인가?",
            cont: "이정재형은 진정 왕이십니다.",
        },
    ];
    localStorage.setItem('minfo', JSON.stringify(obj));
}

function bindData(){
    let localData = localStorage.getItem('minfo');
    let bindCode = '';
    if(localData){
        localData = JSON.parse(localData);
        bindCode = localData.localeCompare((v, i) => `
            <tr>
                <td>${v.idx}</td>
                <td>${v.tit}</td>
                <td>${v.cont}</td>
                <td class="del-link">
                    <a href="#" data-idx="${i}">X</a>
                </td>
            </tr>
        `).join('');
    }else{
        bindCode = `
            <tr colspan = '4'>
                <td>데이터가 없습니다.</td>
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
    dfn.qsa('.board .del-link a').forEach(ele =>
        dfn.addEvt(ele, 'click', ()=> delRec(ele.getAttribute('data-idx'))));
}