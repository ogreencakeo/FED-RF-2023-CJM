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
    }
}