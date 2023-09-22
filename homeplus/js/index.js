const domFn = {
    qs: (x) => document.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsEl: (el, x) => el.querySelector(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
};

domFn.addEvt(window, "load", loadFn);

function loadFn() {
    // console.log("로딩완료");

    // header 광고버튼
    const header_ad_btn = domFn.qs(".header-ad-btn");

    const move_to_exhibition = domFn.qs(".move-to-exhibition");

    // 사자
    let saja_items_div = domFn.qs(".saja-items-div");
    let saja_nav_btn = domFn.qsa(".nav-btngo");
    let saja_item_arr = [saja_items, saja_items2, saja_items3, saja_items4, saja_items5, saja_items6];
    let saja_length_btn = domFn.qs(".saja-itmes-btnBx strong");
    const saja_nav_blength = saja_nav_btn.length;

    // 큐레이션
    let curation_box = domFn.qs(".shopping-curation-box");
    const curation_items_arr = [curation_items1, curation_items2, curation_items3, curation_items4];
    let shopping_curation_btn = domFn.qsa(".nav-btngo2");

    let hcode = "";
    let curation_hcode = "";

    // header 광고버튼
    domFn.addEvt(header_ad_btn, "click", () => {
        let target = event.currentTarget.parentElement;
        target.style.marginTop = "-82px";
        target.style.transition = ".4s";
        // header_ad_close.classList.add('header-ad-close');
    });

    // nav
    let stsWheel = 0;

    // nav
    hcode += "<nav><ul>";
    for (let i = 0; i < exhibition_arr.length; i++) {
        hcode += `
            <li>
                <a href = "#">
                    <img src="../images/move-to-exhibition${i + 1}.png" alt="">${exhibition_arr[i]}
                </a>
            </li>
        `;
    }
    hcode += "</ul></nav>";
    move_to_exhibition.innerHTML = hcode;

    // main 슬라이드
    const main_slide = domFn.qs(".main-ad-box ul");
    const main_btn = domFn.qsa(".main-ad-box button");

    main_btn.forEach((ele) => domFn.addEvt(ele, "click", showMainSlide));
    function showMainSlide() {
        if (stsWheel) return;
        stsWheel = 1;
        setTimeout(() => (stsWheel = 0), 400);

        let isRight = this.classList.contains("m-rightbtn");
        let eachOne = domFn.qsaEl(main_slide, "li");
        if (isRight) {
            main_slide.style.left = "calc(-200% - 50px)";
            main_slide.style.transition = ".4s ease-in-out";
            setTimeout(() => {
                main_slide.appendChild(eachOne[0]);
                main_slide.style.left = "-100%";
                main_slide.style.transition = "none";
            }, 400);
        } else {
            main_slide.insertBefore(eachOne[eachOne.length - 1], eachOne[0]);
            main_slide.style.left = "-200%";
            main_slide.style.transition = "none";
            setTimeout(() => {
                main_slide.style.left = "-100%";
                main_slide.style.transition = ".4s ease-in-out";
            });
        }
    }


    // 자동넘김용 호출함수
    const goRight = () => {
        main_slide.style.left = "calc(-200% - 50px)";
        main_slide.style.transition = ".4s ease-in-out";
        setTimeout(() => {
            main_slide.appendChild(domFn.qsaEl(main_slide, 'li')[0]);
            main_slide.style.left = "-100%";
            main_slide.style.transition = "none";
        },400);
    };

    // 자동넘김용 변수 (인터발용 : autoI, 타임아웃용 : autoT)
    let autoI, autoT;

    // 인터발호출함수
    const autoSlide = () => {
        autoI = setInterval(goRight, 3000)
    }

    // 인터발함수 최초호출
    autoSlide();

    // 인터발 지우기 함수
    const clearAuto = () => {
        // 인터발 지우기
        clearInterval(autoI);
        // 타임아웃 지우기
        clearTimeout(autoT);
        // 일정시간후 작동
        autoT = setTimeout(autoSlide, 5000);
    };

    // 버튼 클릭시 clearAuto함수 호출하기
    main_btn.forEach(ele => domFn.addEvt(ele, 'click', clearAuto));

    // banner 슬라이드
    const banner_slide = domFn.qs(".side-content-box ul");
    const banner_btn = domFn.qsa(".side-content-box button");
    const indic = domFn.qsa('.indic li');

    // console.log('banner_btn :', banner_btn);

    banner_btn.forEach((ele) => domFn.addEvt(ele, "click", goBannerSlide));
    domFn.qsaEl(banner_slide, 'li').forEach((ele, idx) => { ele.setAttribute('data-seq', idx) });


    indic.forEach(ele=>{
        ele.classList.remove('on');
        indic[0].classList.add('on');
    });

    function goBannerSlide() {
        // console.log(" banner_slide 로딩완료");
        if (stsWheel) return;
        stsWheel = 1;
        setTimeout(() => (stsWheel = 0), 400);

        let isRight = this.classList.contains("rightbtn");
        domFn.qsaEl(banner_slide, "li");
        let eachOne = domFn.qsaEl(banner_slide, "li");

        if (isRight) {
            banner_slide.style.left = "-100%";
            banner_slide.style.transition = ".4s ease-in-out";
            setTimeout(() => {
                banner_slide.appendChild(eachOne[0]);
                banner_slide.style.left = "0";
                banner_slide.style.transition = "none";
            }, 400);
        } else {
            banner_slide.insertBefore(eachOne[eachOne.length - 1], eachOne[0]);
            banner_slide.style.left = "-100%";
            banner_slide.style.transition = "none";
            setTimeout(() => {
                banner_slide.style.left = "0";
                banner_slide.style.transition = ".4s ease-in-out";
            }, 0);
        }

        let nowSeq = domFn.qsaEl(banner_slide, 'li')[isRight ? 1 : 0].getAttribute('data-seq');
        indic.forEach((ele, idx) => {
            if (idx == nowSeq) ele.classList.add('on');
            else ele.classList.remove('on');
        });

    }

    // 사자
    saja_nav_btn.forEach((ele) => {
        domFn.addEvt(ele, "click", () => {
            saja_nav_btn.forEach((x) => x.classList.remove("nav-check-red"));
            ele.classList.add("nav-check-red");
            let btxt = ele.innerHTML;
            // console.log('btxt :', btxt);
            let saja_length;
            // console.log(saja_nav_blength); // 6
            switch (btxt) {
                case "MD추천":
                    saja_length = 1;
                    saja_key = saja_item_arr[0];
                    break;
                case "신선한":
                    saja_length = 2;
                    saja_key = saja_item_arr[1];
                    break;
                case "식품":
                    saja_length = 3;
                    saja_key = saja_item_arr[2];
                    break;
                case "간편한":
                    saja_length = 4;
                    saja_key = saja_item_arr[3];
                    break;
                case "가공필템":
                    saja_length = 5;
                    saja_key = saja_item_arr[4];
                    break;
                case "생활용품":
                    saja_length = 6;
                    saja_key = saja_item_arr[5];
                    break;
            }
            saja_length_btn.innerHTML = `다음상품 ${saja_length} / ${saja_nav_blength}`;
            // console.log("saja_key:", saja_key);

            let saja_hcode = "";
            for (let x in saja_key) {
                // console.log("x :", x);
                // console.log("saja_key[x]:", saja_key[x]);
                // console.log('saja_key[x]["이미지"] :', saja_key[x]["이미지"]);
                saja_hcode += `
                    <div class="saja-item-box">
                        <div class = "saja-item-img">
                            <img src="../images/saja-item/${saja_key[x]["이미지"]
                    }" alt="사자이미지" onClick="location.href='./sub.html'"></img>
                            <section>
                                ${x == "깐마늘" ||
                        x == "감자" ||
                        x == "고구마스틱" ||
                        x == "사과" ||
                        x == "강낭콩" ||
                        x == "피자치즈" ||
                        x == "마열라면" ||
                        x == "오렌지망고" ||
                        x == "오감자그라탕" ||
                        x == "지퍼락" ||
                        x == "그린박스"
                        ? '<span style="display:none"></span>'
                        : '<span><img src="../images/saja-icon1.png" alt=""></span>'
                    }
                                <span>
                                    <img src="../images/delivery-market.png" alt="">
                                </span>
                            </section>
                            <div class="saja-hover-btn">
                                <a href="#">
                                    <span class="Put-it-in">
                                        <img src="../images/saja-hover-btn1.png" alt="">
                                    </span>
                                </a>
                                <a href="#">
                                    <span>
                                        <img src="../images/saja-hover-btn2.png" alt="">
                                    </span>
                                </a>
                            </div>
                        </div>
                        <section>
                            <div class="saja-item-explanation">
                                <div class="saja-item-exp-name">
                                    <p>${saja_key[x]["추천상품문구"]}</p>
                                    <p>${saja_key[x]["이름"]}
                                </div>
                                <div class="saja-item-exp-price">
                                    <p>${saja_key[x]["정가가격"]}</p>
                                    <span>${saja_key[x]["할인율"]}</span>
                                    <span>${saja_key[x]["판매가"]}</span>
                                    <span>${saja_key[x]["가격그램"]}</span>
                                </div>
                                <div class="saja-item-exp-review">
                                    <span>${saja_key[x]["리뷰"]}</span>
                                    <span>${saja_key[x]["월구매수"]}</span>
                                </div>
                            </div>
                        </section>
                    </div>
                `;
                // console.log(saja_hcode);
            }
            saja_items_div.innerHTML = saja_hcode;
        });
    });


    saja_nav_btn[0].click();

    const idName = { 두유: "du", 참깨흑임자드레싱: "cham", 클렌징폼: "cl", 도넛튜브: "do" };

    // 큐레이션
    // curation_hcode
    let alm = 0;
    for (let x of curation_items_arr) {
        for (let y in x) {
            for (let i = 0; i < 4; i++) {
                // console.log("y :", y);
                // console.log('x[y] :', x[y]);
                curation_hcode += `
                    <div class = "curation-item-img" ${(y == "두유" || y == "참깨흑임자드레싱" || y == "클렌징폼" || y == "도넛튜브") && i == 0
                        ? "id=" + idName[y]
                        : ""
                    }>
                        <div class = "curation-img-wrap">
                            <img src="../images/shopping-curation/${x[y]["이미지"]
                    }" alt="큐레이션이미지"  onClick="location.href='./sub.html'"></img>
                            <section>
                                ${y == "더블팩샐러드" ||
                        y == "히알루론산마스크팩" ||
                        y == "도넛튜브" ||
                        y == "해먹매쉬라운지튜브" ||
                        y == "보조배터리" ||
                        y == "콜맨레이체어" ||
                        y == "춘천닭갈비" ||
                        y == "춘천닭갈비"
                        ? '<span style="display:none"></span>'
                        : '<span><img src="../images/saja-icon1.png" alt=""></span>'
                    }
                                <span><img src="../images/delivery-market.png" alt=""></span>
                            </section>
                            <div class="curation-hover-btn">
                                <a href="#">
                                    <span class="Put-it-in">
                                        <img src="../images/saja-hover-btn1.png" alt="">
                                    </span>
                                </a>
                                <a href="#">
                                    <span>
                                        <img src="../images/saja-hover-btn2.png" alt="">
                                    </span>
                                </a>
                            </div>
                        </div>
                        <section>
                            <div class="curation-item-explanation">
                                <div class="curation-item-exp-name">
                                    <p>${x[y]["추천상품문구"]}</p>
                                    <p>${x[y]["이름"]}
                                </div>
                                <div class="curation-item-exp-price">
                                    <p>${x[y]["정가가격"]}</p>
                                    <span>${x[y]["할인율"]}</span>
                                    <span>${x[y]["판매가"]}</span>
                                    <span>${x[y]["가격그램"]}</span>
                                </div>
                                <div class="curation-item-exp-review">
                                    <span>${x[y]["리뷰"]}</span>
                                    <span>${x[y]["월구매수"]}</span>
                                </div>
                            </div>
                        </section>
                    </div> 
                `;
            }
        }

        // console.log(alm + "나야나");
        alm++;
    }
    curation_box.innerHTML = curation_hcode;

    

    // 큐레이션 버튼 이동
    const snack_time = domFn.qs("#du").getBoundingClientRect().top; // 간식타임
    const crunchy = domFn.qs("#cham").getBoundingClientRect().top; // 아삭아삭
    const clear_skin = domFn.qs("#cl").getBoundingClientRect().top; // 맑은피부
    const go_camping = domFn.qs("#do").getBoundingClientRect().top; // 캠핑가자

    domFn.addEvt(window, "scroll", goCuration);
    domFn.addEvt(window, "wheel", () => {
        stsClick = 0;
    });

    // console.log('snack_time', snack_time);
    // 현재클릭상태 여부(0-사용안함,1-사용함)
    let stsClick = 0;
    let scY;
    // console.log('snack_time', snack_time);
    function goCuration() {
        if (stsClick) return;

        scY = window.scrollY;
        console.log(scY);

        // shopping_curation_btn.forEach(ele=>ele.classList.remove('nav-check-red'));
        if (scY >= snack_time && scY < crunchy) {
            shopping_curation_btn.forEach((ele) => ele.classList.remove("nav-check-red"));
            shopping_curation_btn[0].classList.add("nav-check-red");
        }
        if (scY >= crunchy && scY < clear_skin) {
            shopping_curation_btn.forEach((ele) => ele.classList.remove("nav-check-red"));
            shopping_curation_btn[1].classList.add("nav-check-red");
        }
        if (scY >= clear_skin && scY < go_camping) {
            shopping_curation_btn.forEach((ele) => ele.classList.remove("nav-check-red"));
            shopping_curation_btn[2].classList.add("nav-check-red");
        }
        if (scY >= go_camping) {
            shopping_curation_btn.forEach((ele) => ele.classList.remove("nav-check-red"));
            shopping_curation_btn[3].classList.add("nav-check-red");
        }
    }

    const targetId = {
        간식타임: "du",
        아삭아삭: "cham",
        맑은피부: "cl",
        캠핑가자: "do",
    };

    shopping_curation_btn.forEach((ele) => {
        domFn.addEvt(ele, "click", () => {
            stsClick = 1;
            shopping_curation_btn.forEach((x) => {
                console.log(x.isSameNode(ele));
                if (!x.isSameNode(ele)) x.classList.remove("nav-check-red");
            });
            // console.log(ele.innerText);
            ele.classList.add("nav-check-red");
            location.href = "index.html#" + targetId[ele.innerText];
        });
    });

    // 장바구니
    const put_it_in = domFn.qsa(".Put-it-in");
    // 장바구니 숫자 확인
    const basket_check_num1 = domFn.qs(".basket-check-num1");
    const basket_check_num2 = domFn.qs(".basket-check-num2");
    let basket_num = 0;

    // const items_arr = [saja_item_arr, curation_items_arr];
    // console.log('items_arr :', items_arr);

    // for(let x of items_arr){
    //     console.log(x);
    //     for(let j of x){
    //         console.log(j);
    //     }

        // (ele,idx)=>{ele.setAttribute('data-seq'), idx}
    // }
    
    // 장바구니 버튼

    // console.log('put_it_in :', put_it_in);

    put_it_in.forEach((ele) => {
        domFn.addEvt(ele, "click", (e) => {
            e.preventDefault();
            // console.log('로딩완료');
            basket_num++;
            // console.log(basket_num);
            if (basket_num > 30) {
                alert("장바구니는 담을 수 있는 물품은 30개까지입니다.");
                return;
            }
            basket_check_num1.innerHTML = `${basket_num}`;
            basket_check_num2.innerHTML = `${basket_num}`;
        });
    });

    const top_click = domFn.qs(".top-bx");
    domFn.addEvt(top_click, "click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}