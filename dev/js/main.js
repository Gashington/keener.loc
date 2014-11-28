$(function(){
    $('.pop-caption').hover(function(){
            $(this).find('.pop').removeClass('invisible fadeOutDown').addClass('visible fadeInUp')
        },
        function(){
            $(this).find('.pop').removeClass('visible fadeInUp').addClass('fadeOutDown')
        })

    $('.maze-item').hover(function(){
            $(this).find('.hover-up').removeClass('invisible fadeOutDown').addClass('visible fadeInUp')
        },
        function(){
            $(this).find('.hover-up').removeClass('visible fadeInUp').addClass('fadeOutDown')
        })
})
