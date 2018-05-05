/*  Aurtor: Paresh Kamble
    Develop by: Manish Sharma
    Date: 04-03-2018 
*/


$(document).ready(function() {

    var getWd = $(window).width();
    // console.log('working' + getWd);
    if (getWd > 767) {

        var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }
        });
    } else {
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }



    //slick slider (artist)
    $('.latest-song .slider-wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }, {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }]
    });

    //slick slider (artist-detail)
    $('.artist-detail-slider .slider-section').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                arrows: false
            }
        }]
    });

    // menu 
    $('.menu_mob .menu-bars').click(function() {
        $(this).toggleClass('open');
        $('.navigation').toggleClass('open');
    });
    $('.navigation > ul > li').click(function() {
        $(this).toggleClass('open').find('ul').slideToggle();
    });

    $(".search-button .search").on("click", function() {
        $(this).parents(".search").find(".search-bar").addClass("open");
    });
    $(".search-bar .close").on("click", function() {
        $(this).parents(".search").find(".search-bar").removeClass("open");
    });

    // popUp 
    $(".popUp").hide();
    $(".about-avtar").on("click", function() {
        var dataIMg = $(this).attr('data-src');
        $(".popUp").fadeIn();
        $(".popUp .row").removeClass('active');
        $(".popUp .row#" + dataIMg).addClass('active');
    });
    $(".popUp .close").on("click", function() {
        $(".popUp").fadeOut();
    });


    // map js
    function myMap() {
        var myCenter = new google.maps.LatLng(18.935260, 72.837151);
        var mapCanvas = document.getElementById("map");
        var mapOptions = {
            center: myCenter,
            zoom: 5
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position: myCenter
        });
        marker.setMap(map);
    }


    if ($('#map').length > 0) {
        myMap()
    }

    // Remove center position
    if ($(window).width() < 768) {
        $("section").removeClass("section-center");
    }

    // append progress bar 
    $(".artist-circle").append("<span class='progress-left'><span class='progress-bar'></span></span><span class='progress-right'><span class='progress-bar'></span></span>");


    //Tween+Scroll

    TweenMax.set('.home .latest-song .title h2, .home .latest-song .latest-song-slider, .home .latest-song .button-grp, .home .artist .title h2, .home .artist .artist-wrap, .home .artist .button-grp', {
        css: {
            opacity: 0,
        }
    })

});


$(window).on("load", function() {
    // Animate loader off screen
    $(".loader-wrap").fadeOut("slow");
    tweenAnimation()
});

function tweenAnimation() {
    var header = new TimelineMax();
    header.from("header", 1, {
        y: -200,
        opacity: 0
    }).from("header .logo", 1, {
        y: 50,
        ease: Back.easeOut,
        opacity: 0
    });

    var homeScene1 = new TimelineMax();
    homeScene1.from(".home .cover-slider .title h2", 1, {
        y: 100,
        ease: Back.easeOut,
        opacity: 0,
        delay: 2
    }).from(".home .cover-slider .my-flipster", 1, {
        y: 50,
        opacity: 0
    });
    var aboutPage = new TimelineMax();
    aboutPage.from(".about-DMF .title h2", 1, {
        y: 100,
        ease: Back.easeOut,
        opacity: 0,
        delay: 2
    }).from(".about-DMF .about-DMF-discription", 0.5, {
        y: 50,
        opacity: 0
    }).staggerFrom(".about-DMF .about-avtar", 0.5, {
        cycle: {
            x: [-50, 50]
        },
        opacity: 0
    });

    var artistPage = new TimelineMax();
    artistPage.from(".artist-page .title h2", 1, {
        y: 100,
        ease: Back.easeOut,
        opacity: 0,
        delay: 2
    }).staggerFrom(".artist-page .artist-circle", 0.5, {
        y: 50,
        opacity: 0
    }, 0.2);

    var songsPage = new TimelineMax();
    songsPage.from(".songs-page .title h2", 1, {
        y: 100,
        ease: Back.easeOut,
        opacity: 0,
        delay: 2
    }).from(".songs-page .latest-song-slider", 1, {
        y: 100,
        opacity: 0
    });

    var contactUs = new TimelineMax();
    contactUs.from(".contact-us .title h2", 1, {
        y: 100,
        ease: Back.easeOut,
        opacity: 0,
        delay: 2
    }).from(".contact-us .contact-form-wrap", 0.5, {
        y: 50,
        opacity: 0
    }).from(".contact-us .map-container", 0.5, {
        y: -50,
        opacity: 0
    });

    var artistDetail = new TimelineMax();
    artistDetail.from(".artist-detail .title h2", 1, {
        y: 100,
        ease: Back.easeOut,
        opacity: 0,
        delay: 2
    }).from(".artist-detail .artist-detail-slider", 1, {
        y: 50,
        opacity: 0
    }).from(".artist-detail .back", 1, {
        x: 50,
        opacity: 0
    });

    var videoPage = new TimelineMax();
    videoPage.from(".video-page .title h2", 1, {
        y: 100,
        ease: Back.easeOut,
        opacity: 0,
        delay: 2
    }).staggerFrom(".video-page .latest-song-slider", 0.5, {
        y: 50,
        opacity: 0
    }, 0.5);

    var comimgSoon = new TimelineMax();
    comimgSoon.from(".comimg-soon .title h2", 1, {
        y: 100,
        ease: Back.easeOut,
        opacity: 0,
        delay: 2
    });

    // home section animation
    var controller = new ScrollMagic.Controller({
        addIndicators: false
    });

    var homeScene2 = new ScrollMagic.Scene({
        triggerElement: '.home .latest-song',
        duration: $('.home .latest-song').outerHeight(),
        reverse: false
    });

    homeScene2.on("enter", function(event) {
        var tl = new TimelineMax();
        tl.fromTo(".home .latest-song .title h2", 1, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: Back.easeOut,
        }).fromTo(".home .latest-song .latest-song-slider", 1, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        }).fromTo(".home .latest-song .button-grp", 1, {
            y: 0,
            opacity: 0
        }, {
            y: 100,
            opacity: 0,
            ease: Back.easeOut,
        });
    });

    var homeScene3 = new ScrollMagic.Scene({
        triggerElement: '.home .artist',
        duration: $('.home .artist').outerHeight(),
        reverse: false
    });
    homeScene3.on("enter", function() {
        var tl = new TimelineMax();
        tl.fromTo(".home .artist .title h2", 1, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            ease: Back.easeOut,
            opacity: 1
        }).fromTo(".home .artist .artist-wrap", 1, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            ease: Back.easeOut,
            opacity: 1
        }).fromTo(".home .artist .button-grp", 1, {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: Back.easeOut,
        })
    });

    controller.addScene([homeScene2, homeScene3])

};