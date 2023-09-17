d/* 네비게이션 유형6 JS - nav06.js */
// 가로네비 서브별 드롭다운 전체형

// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs : (x) => document.querySelector(x),
    qsEl : (el,x) => el.querySelector(x),
    qsa : (x) => document.querySelectorAll(x),
    qsaEl : (el,x) => el.querySelectorAll(x),
    
    // 이벤트셋팅함수
    addEvt : (ele,evt,fn) => ele.addEventListener(evt,fn),
}; 

const gnbBx = domFn.qs('.gnb');

let hcode = '';
for(let x in mdata){
    hcode += `
        <ul>
            <li>
                <a href = "#">${x}</a>
                <div class ="smenu">
                    <aside>
                        <h2>
                            <div class = "stit">${x}</div>
                            <a href = "#">전체보기</a>
                        </h2>
                        <div class ="swrap">
                            ${makeCode(mdata[x])}
                        </div>
                    </aside>
                </div>
            </li>
        </ul>
    `;
}

function makeCode(obj){
    let hcode = '';
    for(let x in obj){
        hcode += `
            <dl>
                <dt>${x}</dt>
                ${obj[x].map(val=>`<dd><a href="#">${val}</a></dd>`)}
            </dl>
        `;
    }
    return hcode;
}

gnbBx.innerHTML = hcode;

gnb