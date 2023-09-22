const domFn = {
    qs : (x) => document.querySelector(x),
    qsa : (x) => document.querySelectorAll(x),
    qsEl : (el, x) => el.querySelector(x),
    qsaEl : (el, x) => el.querySelectorAll(x),
    addEvt : (ele, evt, fn) => ele.addEventListener(evt, fn)
}
domFn.addEvt(window, 'load', loadFn);

// 사진
const see_more_btn = domFn.qsa('.product-see-more-wrap button');

// 좋아요 버튼
const like_btn = domFn.qsa('.like-btn');
const like_btn_target = domFn.qsa('.like-btn>span');


// 상품 수량 버튼 (-, +)
const purchase_btn = domFn.qsa('.purchase-btn>button');
// // 상품 수량
// const purchase_quantity = domFn.qs('.purchase-quantity');
// 상품 수량 숫자 초기값
let purchase_num = 1;

// 지불비용
let cost_to_pay = domFn.qs('.cost-to-pay');
// 지불비용 초기값
let pay_num = 8900;

// 서브 nav박스 ( 상품상세, 상품리뷰, 배송/교환/반품 )
const sub_nav_color = domFn.qsa('.sub-product-nav-box button');

// 상세정보 버튼
const detail_btn = domFn.qs('.sub-detail-btn');
const detail_btn_check = domFn.qs('.sub-detail-btn>span:first-child');
const detail_btn_img = domFn.qs('.detail_btn_img');
// console.log('detail_btn_img', detail_btn_img);
// 고시정보 버튼
const notice_info_btn = domFn.qs('.notice-info-btn');
const notice_info_check = domFn.qs('.notice-info-btn>span:first-child');
const notice_info_img = domFn.qs('.notice_btn_img');
// 상세정보, 고시정보 접기
const detail_fold = domFn.qs('.p-expand-on');
const notice_fold = domFn.qs('.n-expand-on');
// 상품고시정보
const notice_info = domFn.qs('.notice-information table');
// 상품주의사항
const precautions_box = domFn.qs('.product-precautions');

// 사진버튼
const see_more_images = domFn.qsa('.detail-see-more-img img');
const follow_target = domFn.qs('.following-target img');

function loadFn(){

    // 사진 버튼
    see_more_images.forEach(ele=> domFn.addEvt(ele, 'click', showImages) );

    function showImages(){
        console.log(this);
        let see_images_arr = this.getAttribute('src');
        console.log(see_images_arr);
        follow_target.setAttribute('src', see_images_arr);
    }
    
    // 좋아요 버튼
    like_btn.forEach(ele=>{
        domFn.addEvt(ele, 'click', ()=>{
            like_btn_target.forEach(el=>{
                el.classList.toggle('on');
            })
            
        });

    })

    // 상품수량및 지불비용
    purchase_btn.forEach((ele)=>{
        domFn.addEvt(ele, 'click', showPurchaseNum);
    });

    // 상품수량 버튼
    function showPurchaseNum(){
        // 상품 수량
        let purchase_quantity = domFn.qs('.purchase-quantity');
        // let purchase_quantity2 = this.parentElement.querySelector('.purchase-quantity');

        let purchase_btn_r = this.classList.contains('purchase-btn-r');
        // console.log('purchase_btn :', ele);
        // console.log('purchase_btn_r :', purchase_btn_r);
        let total_num;
        if(purchase_btn_r){
            purchase_num++; 
            total_num = pay_num * purchase_num;
            if(purchase_num>12){
                alert('최대수량 12까지만 가능합니다.');
                purchase_num = 12;
                return;
            }
        }else{
            purchase_num--;
            total_num = pay_num * purchase_num;
            if(purchase_num < 1){
                alert('최소수량은 1개까지 입니다.');
                purchase_num = 1;
                return;
            }
        }
        purchase_quantity.innerText = `${purchase_num}`;
        domFn.qs('.cost-pay-aside .purchase-quantity').innerText = `${purchase_num}`;
        cost_to_pay.innerText = `${total_num.toLocaleString()}`;
        domFn.qs('.pay_aside_info_bottom .cost-to-pay').innerText = `${total_num.toLocaleString()}`;
    }

    // 서브 nav버튼 클릭시 버튼 색상 빨간색으로 변경
    sub_nav_color.forEach(ele =>{
        // console.log('sub_nav_color ele>', ele);
        domFn.addEvt(ele, 'click', ()=>{
            sub_nav_color.forEach(ele=> ele.classList.remove('color_red'));
            ele.classList.add('color_red');
        });
    });

    sub_nav_color[0].click();

    // 상세정보 버튼
    domFn.addEvt(detail_btn, 'click', ()=>{
        detail_fold.classList.toggle('p-expand-on');
        if(detail_fold.classList.contains('p-expand-on')){
            detail_btn_check.innerText = '상세정보 더보기';
            detail_btn_img.style.transform = 'rotateX(0deg)';
        }else{
            detail_btn_check.innerText = '상세정보 접기';
            detail_btn_img.style.transform = 'rotateX(180deg)';
        }
    });
    
    // 고시정보 버튼
    domFn.addEvt(notice_info_btn, 'click', ()=>{
        notice_fold.classList.toggle('n-expand-on');
        if(notice_fold.classList.contains('n-expand-on')){
            notice_info_check.innerText = '상품고시정보';
            notice_info_img.style.transform = 'rotateX(0deg)';
        }else{
            notice_info_check.innerText = '상품고시정보 접기';
            notice_info_img.style.transform = 'rotateX(180deg)';
        }
    });
    
    // 상품고시정보
    for(let x of notice_value){
        // console.log('notice_value x>>', x);
        // console.log('notice_value x>>', x[0]);
        // console.log('notice_value x>>', x[1]);
        notice_info.innerHTML += `
            <tr>
                <td>${x[0]}</td>
                <td>${x[1]}</td>
            </tr>
        `;
    }

    // 상품 주의사항
    for(let x of precautions_content){
        // console.log(x);
        precautions_box.innerHTML += `
            <div class="product-precautions-box">
                <img src="../images/product-detail/${x[0]}.jpg" alt="">
                <div class="product-precautions-content">
                    <span>${x[1]}</span>
                    <span>
                        ${x[2]}
                    </span>
                </div>
            </div>
        `;
    }
}
