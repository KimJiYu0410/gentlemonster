$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        autoplay: true,
        // pauseOnHover: false,
        autoplaySpeed: 6000,
        speed: 1000,
    });

    $('.main_visual_slide').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        if (currentSlide == 0) {
            $('.bgvid').trigger('play')
        } else {
            $('.bgvid').trigger('pause')
        }
    });

    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev');
    });

    $('.main_visual .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext');
    });


    $('.main_product_slide').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
    });


    $('.main_product .arrows .prev').on('click', function () {
        $('.main_product_slide').slick('slickPrev');
    });

    $('.main_product .arrows .next').on('click', function () {
        $('.main_product_slide').slick('slickNext');
    });

});


$(function () {
    const MMS = new Swiper('.main_best_slide', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        autoplay: {
            delay: 0,
            /*0이면 머무르는 시간이 0초*/
            disableOnInteraction: false,
        },

        speed: 5000, /*2500은 2.5초이다*/
    });
});


$(function () {
    $('.main_content .tab_menu button').on('click', function () {
        let idx = $(this).index(); // 클릭한 것의 번호를 가져와서 저장함
        console.log(idx);

        $('.main_content .tab_menu button').removeClass('on');
        $(this).addClass('on');

        $('.main_content .tab_content .con').removeClass('on');
        $('.main_content .tab_content .con').eq(idx).addClass('on');
    });
});


$(function () {

    $(window).on('scroll', function () {
        let scr = $(window).scrollTop();

        if (scr > 500) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });


    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })
});

$(function () {
    $('.footer #lnk').on('change', function () {
        let lnk = $(this).val();
        if (lnk) {
            window.open(lnk)
        }
    })
})