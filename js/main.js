// pagepiling script

$(document).ready(function() {
    $('#pagepiling').pagepiling({
        anchors: ['page1', 'page2'],
        navigation: null,
        verticalCentered: false,
    });
});

//svg images
$(document).ready(function() {
    $('img.img-svg').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });
});

//parallax pie and grains
window.onload = function (){
    const parallax = document.querySelector('.parallax');
    if(parallax){
        const pie = document.querySelector('.images-paralax__pie');
        const grains = document.querySelector('.images-paralax__grains');

        const forPie = 40;
        const forGrains = 40;

        const speed = 0.1;

        let positionX = 0,
            positionY = 0;
        let coordXprocent = 0,
            coordYprocent = 0;

        function setMouseParallaxStyle(){
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            pie.style.cssText = `transform: translate(${positionX / forPie}% , ${positionY / forPie}%);`
            grains.style.cssText = `transform: translate(${positionX / forGrains}%, ${positionY / forGrains}%);`

            requestAnimationFrame(setMouseParallaxStyle);
        }

        setMouseParallaxStyle();

        parallax.addEventListener('mousemove', function (e){
           const parallaxWidth = parallax.offsetWidth;
           const parallaxHeight = parallax.offsetHeight;

           const coordX = e.pageX - parallaxWidth / 2;
           const coordY = e.pageY - parallaxHeight / 2;

           coordXprocent = coordX / parallaxWidth * 100;
           coordYprocent = coordY / parallaxHeight * 100;
        });
    }
}

// header menu btn
$(document).ready(function() {
    $('.header-menu-btn').on('click', function (e) {
        e.preventDefault();
        $('.menu-list').toggleClass('menu-active');
    });

    $('.menu-list').on('click', function (e) {
        if ( $(e.target).closest('.header-menu-block').length ) {
            return;
        }
        $('.menu-list').toggleClass('menu-active');
    });

    $('.header-menu-btn-second').on('click', function (e) {
        e.preventDefault();
        $('.menu-list-second').toggleClass('menu-active');
    });

    $('.menu-list-second').on('click', function (e) {
        if ( $(e.target).closest('.header-menu-block').length ) {
            return;
        }
        $('.menu-list-second').toggleClass('menu-active');
    });

    $('.menu a').on('click', function () {
        $('.menu-list').removeClass('menu-active');
        $('.menu-list-second').removeClass('menu-active');
    });


});
