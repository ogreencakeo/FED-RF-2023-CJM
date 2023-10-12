class MovieInfo {
    constructor(pos, tit, sum, dir, act, des) {
        this.포스터 = pos;
        this.제목 = tit;
        this.개요 = sum;
        this.감독 = dir;
        this.출연 = act;
        this.문구 = des;
    }

    myMethod(txt) {
        return `
            영화 ${this.포스터}의 
            감족님 이름은 ${this.감독}
            나의 응원은 ${txt}
        `;
    }
}

const mv = [];

mv[0] = new MovieInfo(
    "https://movie-phinf.pstatic.net/20201116_276/1605491658399poUOC_JPEG/movie_image.jpg?type=m99_141_2",
    "조제",
    "멜로/로맨스, 드라마",
    "김종관",
    "한지민, 남주혁",
    "조제 보러 오세요"
);

mv[1] = new MovieInfo(
    "https://movie-phinf.pstatic.net/20221213_158/1670910727328mpqYu_JPEG/movie_image.jpg?type=m203_290_2",
    "영웅",
    "드라마, 뮤지컬",
    "윤제균",
    "정성화, 김고은",
    "누가 죄인인가"
);

mv[2] = new MovieInfo();
mv[2].포스터 =
    "https://movie-phinf.pstatic.net/20221227_112/16721270739480lDiS_JPEG/movie_image.jpg?type=m203_290_2";
mv[2].제목 = "교섭";
mv[2].개요 = "드라마";
mv[2].감독 = "임순례";
mv[2].출연 = "황정민(정재호), 현빈(박대식)";
mv[2].문구 = "아쌀라말라이쿰";

let hcode = '';
for (let y of mv) {
    hcode += makeCode(y)
}

const wrap = document.querySelector('.wrap');
wrap.innerHTML = hcode;

const cbx = document.querySelectorAll('.cbx');
cbx.forEach((ele, idx) => {
    ele.addEventListener('click', ()=>{
        alert(mv[idx].myMethod(mv[idx].문구));
    });
});

function makeCode(mvi) {
    return `
    <section class="cbx">
        <div class="minfo">
            <!-- 1. 포스터 -->
            <div class="photo">
                <img src="${mvi.포스터}" 
                alt="${mvi["제목"]}의 포스터">  
            </div>
            <div class="cont">
                <!-- 2. 제목 -->
                <h2 class="tit">
                    ${mvi["제목"]}</h2>
                <!-- 3. 개요 -->
                <h3 class="sum">
                    ★장르 : ${mvi["개요"]}</h3>
                <!-- 4. 감독 -->
                <h3 class="dir">
                    ★감독 : ${mvi["감독"]}</h3>
                <!-- 5. 출연 -->
                <h3 class="act">
                    ★출연 : ${mvi["출연"]}</h3>
            </div>
        </div>

        <!-- 영화 한마디 -->
        <h2 class="showtit">♥ 영화한마디!</h2>
        <!-- 6. 문구 -->
        <div class="show">
            ${wrapSpan(mvi["문구"])}
        </div>
    </section>
    `
}

function wrapSpan(txt) {
    let hcode = "";
    for (let x of txt) {
        if (x == " ") hcode += "&nbsp;&nbsp;";
        else hcode += `<span>${x}</span>`;
    }
    return hcode;
}