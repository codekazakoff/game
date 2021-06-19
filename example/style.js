$(document).ready(()=>{
    $('.dws-progress-bar').circularProgress({
        color: '#25ffe4',
        line_width : 18,
        height : '350px',
        width : '350px',
        percent : 0,
        starting_position : 25
    }).circularProgress('animate',100,2000)
})

$(window).on('load', ()=>{
    var $preloader = $('#preloader');
    $preloader.delay(1800).fadeOut('slow');
})