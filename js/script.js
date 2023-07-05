const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuHeader = document.querySelector('.header__menu');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuHeader.classList.toggle('_active');
    });
}

const parent_original = document.querySelector('.header__by');
const parent = document.querySelector('.header__menu');
const item = document.querySelector('.by__button');

window.addEventListener('resize', function(event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if ( viewport_width < 767) {
        if (!item.classList.contains('done')) {
            parent.insertBefore(item,parent.children[2]);
            item.classList.add('done');
        }
    } else {
        if (item.classList.contains('done')) {
            parent_original.insertBefore(item, parent_original.children[2]);
            item.classList.remove('done');
        }
    }
});

$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots: false,
        adaptiveHeight:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:300,
        easing:'linear',
        infinite:true,
        initialSlide:0,
        autoplay:false,
        autoplaySpeed:3000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:true,
        swipe:true,
        touchThreshold:5,
        touchMove:true,
        waitForAnimate:true,
        centerMode:false,
        variableWidth:false,
        rows:1,
        slidesPerRow:1,
        vertical:false,
        verticalSwiping:false,
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:1
                }
            },{
                breakpoint: 480,
                settings:{
                    slidesToShow:1
                }
            }
        ],
        mobileFisrt:false,
    });
    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(nextSlide);
    });
    $('.slider').on('afterChange', function(evnt, slick, currentSlide, nextSlide){
        console.log(currentSlide);
    });
});





