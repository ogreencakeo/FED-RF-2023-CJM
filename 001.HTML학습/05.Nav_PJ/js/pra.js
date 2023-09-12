const domFn = {
    // 요소선택함수 ////////
    qs : (x) => document.querySelector(x),
    qsEl : (el,x) => el.querySelector(x),
    qsa : (x) => document.querySelectorAll(x),
    qsaEl : (el,x) => el.querySelectorAll(x),
    
    // 이벤트셋팅함수
    addEvt : (ele,evt,fn) => ele.addEventListener(evt,fn),
}; 

domFn.addEvt(window, 'load', loadFn);

function loadFn(){
    const gnbList =domFn.qsa('.gnb>ul>li');
    gnbList.forEach(ele=>{
        domFn.addEvt(ele, 'click', showSub);
    });

    function showSub(){
        let isSub = domFn.qsEl(this, '.smenu');

        if(isSub){
            let hv = domFn.qsEl(isSub, 'ol').clientHeight;
            isSub.style.clientHeight = (isSub.clientHeight ==0? hv:0) + 'px';

            gnbList.forEach(ele=>{
                let result = ele.isSameNode(this);
                let target = domFn.qsEl(ele, '.smenu');
                if(!result){
                    if(target) target.style.height = '0px';
                }
            });
        }else{
            gnbList.forEach(ele =>{
                if(domFn.qsEl(ele, '.smenu'))
                    domFn.qs(ele, '.smenu').style.height = '0px';
            })
        }
    }
}