function initFn(){
    $('.img-box').css({opacity : 0}).delay(1000).fadeTo(500, 1)
    $('.gwrap').hide().delay(1500).slideDown(1000);
}

function firstOneFn(){
    $('.tit').css({
        transform : 'scale(2)',
        transition : '1s ease-out 1s'
    })
    setTimeout(()=>{
        $('.tit').css({
            transform : 'scale(1)',
            transition : '1s ease-out 1s'
        })

    }, 2500);
}

export {initFn, firstOneFn};