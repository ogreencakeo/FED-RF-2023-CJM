
/// 영화정보 객체 ////
const mvi = {
    조제: {
        포스터: "https://movie-phinf.pstatic.net/20201116_276/1605491658399poUOC_JPEG/movie_image.jpg?type=m99_141_2",
        제목: "조제",
        개요: "멜로/로맨스, 드라마",
        감독: "김종관",
        출연: "한지민, 남주혁",
        문구: "조제 보러 오세요",
    },
    이웃사촌: {
        포스터: "https://movie-phinf.pstatic.net/20201111_193/1605056611896fc6Ef_JPEG/movie_image.jpg?type=m99_141_2",
        제목: "이웃사촌",
        개요: "드라마, 코미디",
        감독: "이환경",
        출연: "정우, 김희원",
        문구: "이웃을 사랑합시다",
    },
    도굴: {
        포스터: "https://movie-phinf.pstatic.net/20201104_45/160445535053439akc_JPEG/movie_image.jpg?type=m99_141_2",
        제목: "도굴",
        개요: "범죄",
        감독: "박정배",
        출연: "이제훈, 조우진, 신혜선, 임원희",
        문구: "도굴은 범죄예요",
    },
    "앤트맨과 와스프: 퀀텀매니아": {
        포스터: "https://movie-phinf.pstatic.net/20230216_8/16765083584990ol68_JPEG/movie_image.jpg?type=m203_290_2",
        제목: "앤트맨과 와스프: 퀀텀매니아",
        개요: "액션",
        감독: "페이튼 리드",
        출연: "폴 러드(스캇), 에반젤린 릴리(호프)",
        문구: "사랑해 땅콩",
    },
    "아바타: 물의 길": {
        포스터: "https://movie-phinf.pstatic.net/20221215_185/1671091761840XXpCR_JPEG/movie_image.jpg?type=m203_290_2",
        제목: "아바타: 물의 길",
        개요: "액션, 모험, SF, 스릴러",
        감독: "제임스 카메론",
        출연: "조 샐다나(네이티리), 샘 워싱턴(제이크 설리),",
        문구: "아들엔 아들이야",
    },
    바빌론: {
        포스터: "https://movie-phinf.pstatic.net/20230201_261/1675215429987qQVon_JPEG/movie_image.jpg?type=m203_290_2",
        제목: "바빌론",
        개요: "드라마",
        감독: "데이미언 셔젤",
        출연: "브래드 피트, 마고 로비",
        문구: "당신 시대가 끝난거예요",
    },
    영웅: {
        포스터: "https://movie-phinf.pstatic.net/20221213_158/1670910727328mpqYu_JPEG/movie_image.jpg?type=m203_290_2",
        제목: "영웅",
        개요: "드라마, 뮤지컬",
        감독: "윤제균",
        출연: "정성화, 김고은",
        문구: "누가 죄인인가",
    },
    교섭: {
        포스터: "https://movie-phinf.pstatic.net/20221227_112/16721270739480lDiS_JPEG/movie_image.jpg?type=m203_290_2",
        제목: "교섭",
        개요: "드라마",
        감독: "임순례",
        출연: "황정민(정재호), 현빈(박대식)",
        문구: "아쌀라말라이쿰",
    },
    "다음 소희": {
        포스터: "https://movie-phinf.pstatic.net/20230112_63/1673489515726qkQ2t_JPEG/movie_image.jpg?type=m203_290_2",
        제목: "다음 소희",
        개요: "드라마",
        감독: "정주리",
        출연: "배두나, 김시은",
        문구: "그런 일이나 한다고 더 무시해",
    },
    타이타닉: {
        포스터: "https://movie-phinf.pstatic.net/20230209_198/1675907886242jMQ8S_JPEG/movie_image.jpg?type=m203_290_2",
        제목: "타이타닉",
        개요: "멜로/로맨스, 드라마",
        감독: "제임스 카메론",
        출연: "레오나르도 디카프리오, 케이트 윈슬렛",
        문구: "그는 내 기억속에만 존재해요",
    },
    상견니: {
        포스터: "https://movie-phinf.pstatic.net/20230120_87/1674192544285inSFU_JPEG/movie_image.jpg?type=m203_290_2",
        제목: "상견니",
        개요: "드라마, 판타지, 멜로/로맨스",
        감독: "황천인",
        출연: "가가연, 허광한, 시백우",
        문구: "회전목타는 탈 수 있어",
    },
    유령: {
        포스터: "https://movie-phinf.pstatic.net/20221221_213/1671610586374HUJ35_JPEG/movie_image.jpg?type=m203_290_2",
        제목: "유령",
        개요: "액션",
        감독: "이해영",
        출연: "설경구, 이하늬",
        문구: "나라 되찾으면 담배 끊을까?",
    },
};


const domFn = {
    qs: (x) => document.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsEl: (el, x) => el.querySelector(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}


domFn.addEvt(window, 'DOMContentLoaded', loadFn);

function loadFn() {

    const wrap = domFn.qs('.wrap');

    let hcode = '';

    for (let x in mvi) {
        hcode += `
        <section class="cbx">
            <div class="minfo">
                <div class="photo">
                    <img src="${mvi[x][" 포스터"]}"
                    alt="${mvi[x]["제목"]}의 포스터">
                </div>
                <div class="cont">
                    <!-- 2. 제목 -->
                    <h2 class="tit">
                        ${mvi[x]["제목"]}</h2>
                    <!-- 3. 개요 -->
                    <h3 class="sum">
                        ★장르 : ${mvi[x]["개요"]}</h3>
                    <!-- 4. 감독 -->
                    <h3 class="dir">
                        ★감독 : ${mvi[x]["감독"]}</h3>
                    <!-- 5. 출연 -->
                    <h3 class="act">
                        ★출연 : ${mvi[x]["출연"]}</h3>
                </div>
            </div>

            <!-- 영화 한마디 -->
            <h2 class="showtit">♥ 영화한마디!</h2>
            <!-- 6. 문구 -->
            <div class="show">
                ${wrapSpan(mvi[x]["문구"])}
            </div>
        </section>
    `
    }


    wrap.innerHTML = hcode;

    function wrapSpan(txt) {
        let hcode = '';
        for (let x of txt) {
            if (x == ' ') hcode += `&nbsp;&nbsp;`;
            else hcode += `<span>${x}</span>`;
        }
        return hcode;
    }

}

