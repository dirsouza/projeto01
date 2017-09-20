$(function () {
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
        //nav: true,
        //navText: ['Anterior', 'Próximo'],
        responsiveClass: true,
        responsive: {
            0: {
                item: 1
            },
            480: {
                item: 3
            },
            768: {
                item: 4
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

    $('video')[0].volume = .1;

    $('.thumbnails .item').on('click', function () {
        $('video').attr({
            src: 'src/mp4/' + $(this).data('video') + '.mp4',
            poster: 'src/img/' + $(this).data('video') + '.jpg',
            autoplay: 'autoplay'
        });
    });
    
    plyr.setup({
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
});