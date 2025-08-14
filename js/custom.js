$(function () {
    /* 메인 비주얼 슬라이드 (Slick) */
    $('.main_visual_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 1000
    });

    $('.main_visual_slide').on('afterChange', function (event, slick, currentSlide) {
        if (currentSlide === 0) {
            $('.bgvid').trigger('play');
        } else {
            $('.bgvid').trigger('pause');
        }
    });

    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev');
    });

    $('.main_visual .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext');
    });

    /* 메인 제품 슬라이드 (Slick) - 반응형 적용 */
    $('.main_product_slide').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1200, // 화면 너비 1200px 이하
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992, // 화면 너비 992px 이하
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768, // 화면 너비 768px 이하
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.main_product .arrows .prev').on('click', function () {
        $('.main_product_slide').slick('slickPrev');
    });

    $('.main_product .arrows .next').on('click', function () {
        $('.main_product_slide').slick('slickNext');
    });

    /* 메인 베스트 슬라이드 (Swiper) - 반응형 적용 */
    const MMS = new Swiper('.main_best_slide', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
        speed: 5000,
        breakpoints: {
            1200: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 1
            }
        }
    });

    /* 탭 메뉴 */
    $('.main_content .tab_menu button').on('click', function () {
        let idx = $(this).index();
        $('.main_content .tab_menu button').removeClass('on');
        $(this).addClass('on');
        $('.main_content .tab_content .con').removeClass('on').eq(idx).addClass('on');
    });

    /* 스크롤 시 top 버튼 표시 */
    $(window).on('scroll', function () {
        let scr = $(window).scrollTop();
        if (scr > 500) {
            $('.to_top').addClass('on');
        } else {
            $('.to_top').removeClass('on');
        }
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    /* footer 셀렉트 링크 이동 */
    $('.footer #lnk').on('change', function () {
        let lnk = $(this).val();
        if (lnk) {
            window.open(lnk);
        }
    });
});