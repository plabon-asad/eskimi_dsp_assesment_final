$(function () {

    // Start and first step show
    $('.btn-start').click(function () {
        $('.start-game').addClass('display-none');
        $('.broken-car').toggle('slow');
    });

    // Some fade effect to see glossy
    function fadeOfImg(object_item, img_url, fade_out = 10, fade_in = 500) {
        object_item.fadeOut(fade_out, function () {
            object_item.css("background-image", 'url(' + img_url + ')');
            object_item.fadeIn(fade_in);
        });
    }

    // Anime JS for rotation animation
    function imgRotation(item_id, time = 1800, delay = 250) {
        var item_id = anime({
            targets: `#${item_id}`,
            rotate: {
                value: 360,
                duration: time,
                easing: 'easeInOutSine'
            },
            delay: delay // All properties except 'scale' inherit 250ms delay
        });
    }

    // First step click and next step show and play
    $('.ul-style li a').click(function () {
        let btn = $(this);
        let broken_car = $('.broken-car');
        let img_url = {
            tyer_fixed: 'img/car-tyer-fixed.png',
            scratch_fixed: 'img/car-scratch-fixed.png',
            car_paints: 'img/car-paints.png',
            wc_img: 'img/congratulations.png',
        };

        let tik_mark_length = broken_car.find('.tik-mark').length;

        if (btn[0].id === 'fix-broken-wheel') {
            btn.addClass('tik-mark');
            fadeOfImg(broken_car, img_url.tyer_fixed);
        } else if (btn[0].id === 'remove-scratches') {
            if ( $('.ul-style li').first().children().hasClass('tik-mark') ) {
                fadeOfImg(broken_car, img_url.scratch_fixed);
                btn.addClass('tik-mark');
            } else {
                alert('Fix broken wheels');
            }

        } else {
            btn.addClass('tik-mark');
            if (tik_mark_length == 3) {
                fadeOfImg(broken_car, img_url.car_paints, 200, 500);
                broken_car.attr('id', 'congratulations').find('.ul-style').fadeOut(500);
                imgRotation('congratulations', 500, 1500);

                setTimeout(function () {
                    fadeOfImg(broken_car, img_url.wc_img);
                }, 3000);
            }
        }
        
    });

})