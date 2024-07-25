$(document).ready(function(){
    $('.about_slider').slick({
        autoplay: false, // Автоматическое прокручивание слайдов
        dots: true ,
        arrows:true,
        variableWidth: false,
        slidesToShow: 1, // Количество отображаемых слайдов за раз
        slidesToScroll: 1,
        adaptiveHeight: true,
    });

    $('.slider').slick({
        autoplay: false, 
        dots: true,
        arrows:true,
        variableWidth: true,
        slidesToScroll: 1,
        adaptiveHeight: true,
    });
});

let mobileMedia  = window.matchMedia("(max-width: 750px)");
function initMobileSLider (event) {
    if(event.matches) {
     if (!$('.program_slider').hasClass('slick-initialized')) {
        $(document).ready(function() {
            $('.program_slider').slick({
                autoplay: false,
                dots: true,
                arrows:true,
                variableWidth: true,
                slidesToScroll: 1,
                adaptiveHeight: true,
            });
        })
     }
    } else if($('.program_slider').hasClass('slick-initialized')){
        $('.program_slider').slick('unslick');
    }
}
mobileMedia.addEventListener("change", initMobileSLider);

initMobileSLider(mobileMedia)
