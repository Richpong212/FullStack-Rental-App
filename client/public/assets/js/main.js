; (function ($) {
    "use strict";

    $(document).ready(function () {

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })
       
        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.menu').click (function(){
            $(this).toggleClass('open');
        });
    
        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").click(function(e) {
                // e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');
        
        menutoggle.on('click', function() {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });


        /*--------------------------------------------------
            service slider
        ---------------------------------------------------*/
        var $serviceCarousel = $('.service-slider');
        if ($serviceCarousel.length > 0) {
            $serviceCarousel.slick({
                dots: false,
                slidesToScroll: 1,
                speed: 400,
                loop: true,
                slidesToShow: 4,
                autoplay: false,
                prevArrow: '<span class="slick-prev"><i class="fa fa-angle-left"></i></span>',
                nextArrow: '<span class="slick-next"><i class="fa fa-angle-right"></i></span>',
                responsive: [
                    {
                        breakpoint: 1100,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        }

        /*--------------------------------------------------
            service slider
        ---------------------------------------------------*/
        var $service2Carousel = $('.service-slider-2');
        if ($service2Carousel.length > 0) {
            $service2Carousel.owlCarousel({
                loop: true,
                autoplay: false,
                autoPlayTimeout: 1000,
                dots: false,
                nav: false,
                smartSpeed: 1500,
                navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 2,
                    },
                    992: {
                        items: 3
                    }
                }
            });
        }

        /*--------------------------------------------------
            client slider
        ---------------------------------------------------*/
        var $clientCarousel = $('.client-slider');
        if ($clientCarousel.length > 0) {
            $clientCarousel.owlCarousel({
                loop: true,
                autoplay: false,
                autoPlayTimeout: 1000,
                dots: false,
                nav: false,
                smartSpeed: 1500,
                margin: 30,
                navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 4,
                    }
                }
            });
        }

        /*--------------------------------------------------
            client slider
        ---------------------------------------------------*/
        var $ppsliserCarousel = $('.popular-post-slider');
        if ($ppsliserCarousel.length > 0) {
            $ppsliserCarousel.owlCarousel({
                loop: true,
                autoplay: true,
                autoPlayTimeout: 1000,
                dots: false,
                nav: false,
                margin: 20,
                smartSpeed: 1500,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    992: {
                        items: 3,
                    },
                    1200: {
                        items: 4,
                        margin: 20,
                    },
                    1500: {
                        items: 4,
                        margin: 40,
                    }
                }
            });
        }

        /*--------------------------------------------------
            client slider
        ---------------------------------------------------*/
        var $clientCarousel_2 = $('.client-slider-2');
        if ($clientCarousel_2.length > 0) {
            $clientCarousel_2.owlCarousel({
                loop: true,
                autoplay: false,
                autoPlayTimeout: 1000,
                dots: true,
                nav: true,
                smartSpeed: 1500,
                items: 1,
                navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            });
        }

        /*--------------------------------------------------
            featured slider
        ---------------------------------------------------*/
        var $featuredCarousel = $('.featured-slider');
        if ($featuredCarousel.length > 0) {
            $featuredCarousel.owlCarousel({
                loop: true,
                autoplay: false,
                autoPlayTimeout: 1000,
                dots: false,
                nav: true,
                smartSpeed: 1500,
                margin: 30,
                navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                items: 1,
            });
        }

        /*--------------------------------------------------
            featured slider
        ---------------------------------------------------*/
        var $apartmentsCarousel = $('.apartments-slider');
        if ($apartmentsCarousel.length > 0) {
            $apartmentsCarousel.owlCarousel({
                loop: true,
                autoplay: false,
                autoPlayTimeout: 1000,
                dots: true,
                nav: true,
                smartSpeed: 1500,
                navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                items: 1,
            });
        }

        /*--------------------------------------------------
            featured slider
        ---------------------------------------------------*/
        var $pdsCarousel = $('.property-details-slider');
        if ($pdsCarousel.length > 0) {
            $pdsCarousel.owlCarousel({
                loop: true,
                autoplay: false,
                autoPlayTimeout: 1000,
                dots: true,
                nav: true,
                smartSpeed: 1500,
                navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                items: 1,
            });
        }

        /* -----------------------------------------------------
            apartments-slider-2
        ----------------------------------------------------- */
        var $ap2_slider = $('.apartments-slider-2');
        $ap2_slider.slick({
            slidesToShow: 1,
            dots: false,
            slidesToScroll: 1,
            speed: 400,
            loop: true,
            autoplay: false,
            prevArrow: '<span class="slick-prev"><i class="fa fa-angle-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="fa fa-angle-right"></i></span>',
            appendArrows: $('.ap2-slider-controls .slider-nav'),
        });
        //active progress
        var $progressBar = $('.ap2-list-progress');
        var $progressBarLabel = $( '.slider__label' );
        $ap2_slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
            var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
            $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc );
            $progressBarLabel.text( calc + '% completed' );
        });
        //active count list
        $(".apartments-slider-2").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
            var firstNumber = check_number(++nextSlide);
            $(".ap2-slider-controls .slider-extra .text .first").text(firstNumber);
        });
        var smSlider = $(".ap2-list-slider").slick("getSlick");
        var smSliderCount = smSlider.slideCount;
        $(".ap2-slider-controls .slider-extra .text .last").text(check_number(smSliderCount));
        function check_number(num) {
            var IsInteger = /^[0-9]+$/.test(num);
            return IsInteger ? "0" + num : null;
        }

        /* --------------------------------------------------
            city 
        ---------------------------------------------------- */
        $('.video-play-btn').magnificPopup({
            type: 'video',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });

        /* --------------------------------------------------
            city 
        ---------------------------------------------------- */
        var $cityFilterArea = $('.city-filter-area');
        /*Grid*/
        $cityFilterArea.each(function(){
            var $this = $(this),
            $cityFilterItem = '.rld-city-item';
            $this.imagesLoaded( function() {
                $this.isotope({
                    itemSelector: $cityFilterItem,
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.city-sizer',
                    }
                });
            });
        });


        /* --------------------------------------------------
            property filter 
        ---------------------------------------------------- */
        var $Container = $('.property-filter-area');
        if ($Container.length > 0) {
            $('.property-filter-area').imagesLoaded(function () {
                var festivarMasonry = $Container.isotope({
                    itemSelector: '.rld-filter-item', // use a separate class for itemSelector, other than .col-
                    masonry: {
                        gutter: 0
                    }
                });
                $(document).on('click', '.property-filter-menu > button', function () {
                    var filterValue = $(this).attr('data-filter');
                    festivarMasonry.isotope({
                        filter: filterValue
                    });
                });
            });
            $(document).on('click','.property-filter-menu > button' , function () {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
        }

        /*--------------------------------------
            Active
        ---------------------------------------*/
        $(document).on('mouseover','.single-intro-media',function() {
            $(this).addClass('single-intro-media-active');
            $('.single-intro-media').removeClass('single-intro-media-active');
            $(this).addClass('single-intro-media-active');
        });

        /*--------------------------------------
            range slider
        ---------------------------------------*/
        $( function() {
            var handle = $( ".ui-slider-handle-price" );
            $( ".rld-price-slider" ).slider({
                range: "min",
                value: 750,
                min: 1,
                max: 3500,
                create: function() {
                    handle.text( $( this ).slider( "value" ) );
                },
                slide: function( event, ui ) {
                    handle.text( ui.value );
                }
            });
        } );
        $( function() {
            var handle = $( ".ui-slider-handle-size" );
            $( ".rld-size-slider" ).slider({
                range: "min",
                value: 600,
                min: 1,
                max: 6500,
                create: function() {
                    handle.text( $( this ).slider( "value" ) );
                },
                slide: function( event, ui ) {
                    handle.text( ui.value );
                }
            });
        } );

        /*--------------------------------------------
            News Search
        ---------------------------------------------*/
        if ($('.news-search-btn').length){
            $(".news-search-btn").on('click', function(){
                $(".news-search-box").toggleClass("news-search-box-show", "linear");
            });
            $('body').on('click', function(event) {
                if (!$(event.target).closest('.news-search-btn').length && !$(event.target).closest('.news-search-box').length) {
                    $('.news-search-box').removeClass('news-search-box-show');
                }
            });
        }

        /*-------------------------------------------------
           back to top
       --------------------------------------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });


        /*-------------------------------------------------
           parallax
        --------------------------------------------------*/
        if ($.fn.jarallax) {
            $('.jarallax').jarallax({
                speed: 0.5
            });
        }


    });

    $(window).on("scroll", function() {
        /*---------------------------------------
        sticky menu activation && Sticky Icon Bar
        -----------------------------------------*/
        var mainMenuTop = $(".navbar-area");
        if ($(window).scrollTop() >= 1) {
            mainMenuTop.addClass('navbar-area-fixed');
        }
        else {
            mainMenuTop.removeClass('navbar-area-fixed');
        }
        
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
    });


    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

    });

     $('.readeal-top').find('a').click(function(){
            $(window).scrollTop(0);
    });



})(jQuery);