$(document).ready(function(){
    // owl-carusel
    var one = $("#owl_1");
    var two = $("#owl_2");
    // owl_1
    one.owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:false,
        navText: [ '', ' ' ],
        responsive:{
            0:{
                items:1
            }
        }
    });
    // owl_2
    two.owlCarousel({
        loop:true,
        margin:16,
        nav: false,
        dots: false,
        navText: [ '', ' ' ],
        responsive:{
            0:{
                items:1.1,
                margin:5
            },
            576:{
                items:2.2,
            },
            992:{
                items:3.75
            },
            1921:{
                items:5.75,
                margin:100
            }
        }
    });
});