$(()=>{
    const updataWin = () => $(window).width();
    let winW = updataWin();

    const TRS_TIME_DT = '.8s ease-out';
    const TRS_TIME_MOB = '.3s ease-out';

    const target = $('#move');

    target.draggable({
        axis : 'x'
    })
    .css({
        transition : (winW<500? TRS_TIME_MOB : TRS_TIME_DT)
    })

    $(window).resize(()=>{
        firstPoint = winW / 3;
        lastPoint = target.width() - winW / 3 * 2;
        target.css({
            transition : (winW<500? TRS_TIME_MOB:TRS_TIME_DT)
        })
    });

    if(winW<500) target.css({transition : TRS_TIME_MOB});
    let firstPoint = winW / 3;
    let lastPoint = target.width() - winW / 3 * 2;

    $('html body').on('mouseup mousedown mouseover'){
        let tgPos = target.offset().left;
        if(tgPos > firstPoint){
            target.css({
                left : firstPoint + 'px'
            })
        }else if(tgPos < -lastPoint){
            target.css({
                left : -lastPoint + 'px'
            })
        }
    }
}); 