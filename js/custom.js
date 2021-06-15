$(document).ready(function() {
    // services
    $('.bg-img').each(function() {
        var bg = $(this).data('bgimg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
    // portfolio slider
    $('.portfolio-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay: true,
        asNavFor: '.portfolio-project',
        prevArrow: '<button type="button" class="slick-prev"><i class="icon-left-arrow-2"><i></i></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icon-right-arrow"><i></i></i></button>',
    });
    $('.portfolio-project').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.portfolio-carousel',
        arrows: false,
        // variableWidth: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false
                }
            }
        ]

    });



});