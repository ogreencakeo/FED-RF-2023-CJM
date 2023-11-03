$(()=>{
    const updataWin = () => $(window).width();
    let winW = updataWin();

    const TRS_TIME_DT = '.8s ease-out';
    const TRS_TIME_MOB = '.3s ease-out';

    const target = $('#move');

    target.draggable({
        asix : 'x'
    })
    .css({
        transtion : 
        (winW < 500? TRS_TIME_MOB : TRS_TIME_DT)
    });

    $(window).resize(()=>{
        winW = updataWin();
        
    });
})