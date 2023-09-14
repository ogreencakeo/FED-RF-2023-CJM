// 네비게이션 유형6 JS - nav06.js
// 가로네비 서브별 드롭다운 전체창

const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),

    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; /////// domFn 객체 /////////////
// 1. 구현 요구사항
// GNB메뉴의 데이터를 모두 html DOM으로 구조화하여
// 화면에 출력한다!

// 2. 대상선정: .gnb
const gnbBox = domFn.qs(".gnb");
console.log("대상", gnbBox);

// 3. 객체 데이터로 html 코드만들기
let hcode = "";

for (let x in mdata) {  // x는 속성명
    console.log("속성명:", x);
    hcode += `  
        <ul>
            <li>
                <a href="#">${x}</a>
                <div class="smenu">
                    <aside class="smbx">
                        <h2>
                            <div class="stit">${x}</div>
                            <a href="">전체보기</a>
                            <div class="swrap">
                            <!-- 2차 메뉴 dl생성 -->
                                ${makeCode(mdata[x])}
                            </div>
                        </h2>
                    </aside>
                </div>
            </li>
        </ul>
    `;
} //////// for in /////////////

// 확인
console.log("코드:", hcode);

// 내부 for in 문 코드생성 함수 만들기
function makeCode(obj){ // obj - 객체 전달값
    console.log('나야나', obj);
    // 코드변수
    let hcode = '';

    // 객체 반복문 for in 사용!
    for(let x in obj){  // x - 속성명(2차메뉴)
        hcode += `
            <dl>
                <dt>${x}</dt>
                <!-- 3차 메뉴 dd생성 -->
                ${obj[x].map(
                    val=>
                    `<dd><a href="">${val}</a></dd>`).join('')
                }
            </dl>
        `;
    }
    // 결과리턴
    return hcode;
}

/**************************************************************
    [ 배열데이터를 변경하여 다시 배열로 만들기 : map() ]
    배열변수.map((배열값, 순번, 전체배열)=>{변경코드})
    -> 결과로 변경된 배열이 리턴됨!
    _____________________________________________________
    const aa = ['신숙', '상호', '경미'];
    -> 배열데이터는 이름인데 뒤에 "씨"붙여서 보관하기로!
    aa = aa.map(val => val + '씨');
    -> 결과 : ['신숙씨', '상호씨', '경미씨']
**************************************************************/
const aa = ['신숙', '상호', '경미'];
console.log(aa);
const bb = aa.map(val => val + '씨');
console.log(bb);
const cc = bb.map((val, idx)=>`<div>${idx + '.' + val}</div>`);
console.log(cc, '배열이니? :', Array.isArray(cc));

// ul>li>a[href='#']{1차}+.smenu>aside.smbx>h2>(.stit{2차}+a{전체보기})+.swrap>dl>dt+dd>a{3차}
