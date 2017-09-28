$(function () {
    $('#btn-bars').on('click', function () {
        $('header').toggleClass('open-menu');
        $('#logotipo').toggleClass('fadeInDown');
        $('#logotipo').toggleClass('rotateInDownRight');
    });

    $('#btn-search').on('click', function() {
        $('header').toggleClass('open-search');
        $('#input-search-mobile').focus();
    });

    $('#menu-mobile-mask, .btn-close').on('click', function() {
        $('header').removeClass('open-menu');
        $('#logotipo').toggleClass('fadeInDown');
        $('#logotipo').toggleClass('rotateInDownRight');
    });

    $('#input-search').on('focus', function () {
        $('li.search').addClass('ativo');
    }).on('blur', function () {
        $('li.search').removeClass('ativo');
    });

    let owlSlide = $('.owlSlide');

    owlSlide.owlCarousel({
        stagePadding: 50,
        loop: true,
        margin: 10,
        lazyLoad: true,
        //nav: true,
        //navText: ['Anterior', 'Próximo'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 4
            }
        },
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });

    owlSlide.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlSlide.trigger('next.owl');
        } else {
            owlSlide.trigger('prev.owl');
        }
        e.preventDefault();
    });

    $('#btn-news-prev').click(function() {
        owlSlide.trigger('prev.owl.carousel');
    });

    $('#btn-news-next').click(function() {
        owlSlide.trigger('next.owl.carousel');
    });

    $('video')[0].volume = .1;

    $('.thumbnails .item').on('click', function () {
        $('video').attr({
            src: 'src/mp4/' + $(this).data('video') + '.mp4',
            poster: 'src/img/' + $(this).data('video') + '.jpg',
            autoplay: 'autoplay'
        });
    });

    let videos = plyr.setup('video', {
        i18n: {
            restart: "Reiniciar",
            rewind: "Voltar {seektime} segundos",
            play: "Play",
            pause: "Pause",
            forward: "Avançar {seektime} segundos",
            buffered: "buffer",
            currentTime: "Tempo atual",
            duration: "Duração",
            volume: "Volume",
            toggleMute: "Mudo",
            toggleCaptions: "Legendas",
            toggleFullscreen: "Fullscreen"
        },
        tooltips: {
            controls: true,
            seek: true
        }
    });

    videos[0].setVolume(3);

    videos[0].on('enterfullscreen', function () {
        $('header').css('z-index', 0);
    }).on('exitfullscreen', function () {
        $('header').css('z-index', 1);
    });

    $('#page-up').on('click', function (event) {
        $('html, body').animate({scrollTop: 0}, 1000);

        event.preventDefault();
    });
});