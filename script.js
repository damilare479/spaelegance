var menu = document.getElementById("bar");
var navbar = document.getElementById("navbar");
            
navbar.style.right = '-300px';
menu.onclick = function () {
    if (navbar.style.right == '-300px') {
        navbar.style.right = '0';
    }
                
    else {
        navbar.style.right = '-300px'
    }
}
            
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });
            
$(document).ready(function(){
    $(".filter-item").click(function(){
        const value = $(this).attr("data-filter")
        if (value == "all") {
            $(".post-box").show("1000")
        }
        else{
            $(".post-box")
                .not("." + value)
                .hide("1000")
            $(".post-box")
                .filter("." + value)
                .show("1000")
        }
    });
$(".filter-item").click(function(){
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
        });
    });