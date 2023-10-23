$(()=>{
    const dgEle = $('.draggable');
    dgEle.draggable({
        cursor : 'grabbing',
        stack : 'draggable',
        opacity : 0.7
    });
    dgEle.on('dragstart', function(){
        $(this).addClass('invert');
    });

    dgEle.on('dragstop', function(){
        $(this).removeClass('invert');
    })
    $('.dropshow').droppable({
        drop : function(evt, ele){
            let target = ele.draggable;
            let isrc = target.find('img').attr('src');
            $(this).css({
                backgroundImage : `url(${isrc})`
            });
            target.hide();

            let ptxt = target.find('p').text();
            $(this).text(ptxt + ' 당첨')

            $('.u-box').html(`
                <div id="m-box">
                    <a href="#">X</a>
                </div>
            `);
            let mbox = $('#m-box');
            mbox.css({
                position : 'fixed',
                top : '0',
                left : '0',
                width : '100%',
                height : '100%',
                zIndex : '999',
                backgroundColor : '#000'
            });

            let mvId = target.attr('data-mv');
            mbox.append(`
            <iframe src="https://www.youtube.com/embed/${mvId}?autoplay=1" allow="autoplay"
                style="width:100%; height:100%; border:none;"></iframe>
            `)
            .hide().delay(1000).slideDown(2000);

            mbox.find('a').css({
                position: "absolute",
                top: "50px",
                right: "50px",
                width: "50px",
                height: "50px",
                textDecoration: "none",
                font: "bold 48px Verdana",
                color: "#fff",
                textShadow: "0 0 5px #777",
                zIndex : '1'
            })
            .click(function(){
                mbox.slideDown(1000, function(){
                    $(this).remove();
                    target.show().css({
                        top : '0',
                        left : '0'
                    });
                    $('.dropshow').test('여기에 드롭')
                    .css({
                        backgorundImage :  'url(addimg/effect2.jpg)'
                    })
                })
            });
        }
    })
})