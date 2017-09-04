$(document).ready(function () {

    //SLIDERS (settings below)
    //sachinchoolur.github.io/lightslider/settings.html

    //FIRST SLIDER (INDEX PAGE)
    $("#home-slider").lightSlider({
        item: 1,
        loop: true,
        slideMargin: 0,
        enableDrag: false,
        auto: true,
        pause: 8500,
        speed: 1000,
        pauseOnHover: true
    });

    //NEWS ON (INDEX PAGE) ONLY
    $("#news-slider").lightSlider({
        item: 1,
        loop: true,
        slideMargin: 0,
        speed: 1000
    });

    //SMALL PRODUCTS SLIDER (INDEX PAGE)
    $("#products-slider").lightSlider({
        item: 9,
        loop: true,
        slideMargin: 0,
        enableDrag: false,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    item: 8,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    item: 6
                }
            },
            {
                breakpoint: 800,
                settings: {
                    item: 4
                }
            },
            {
                breakpoint: 600,
                settings: {
                    item: 3
                }
            }
        ]
    });


    //NEWS-ARTICLE PAGE SLIDER (NEWS-ARTICLE PAGES ONLY)
    $("#news-article-slider").lightSlider({
        item: 4,
        loop: true,
        slideMargin: 0,
        enableDrag: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    item: 3
                }
            },
            {
                breakpoint: 750,
                settings: {
                    item: 2
                }
            },
            {
                breakpoint: 450,
                settings: {
                    item: 1
                }
            },
        ]
    });

    // //STANDARD TABS (PRODUCTS-ALL & SUPPORT PAGE)
    $('#tabAll').on('click', function () {
        $('#tabAll').parent().addClass('active');
        $('.tab-pane').addClass('active');
        $('[data-toggle="tab"]').parent().removeClass('active');
    });

    //PRODUCTS TABS (COMBINE CATEGORIES IN 'ALL' PRODUCTS-ALL PAGE)
    $('#product-tabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    //# REDIRECT FOR TABS (SUPPORT PAGE)
    if (window.location.href.indexOf("#") > -1) {
        var activeTabId = (window.location.href.substr(window.location.href.lastIndexOf('#') + 2));
        var activeTab = $(document.getElementsByName(activeTabId));
        var activeTabPane = $(document.getElementById(activeTabId));
        
        $("#original").removeClass("active");
        $("#cameras").removeClass("active");
        $("#doorbells").removeClass("active");

        $(activeTab).closest("li").addClass("active");
        $((activeTab)).attr("aria-expanded", true);
        console.log(activeTabPane);
        activeTabPane.addClass("active");
    }

    //GOOGLE MAP NOT LOADING BUG-FIX (SUPPORT PAGE)
    $('#contact-tab').click(function () {
        setTimeout(function () {
            google.maps.event.trigger(map, 'resize');
        }, 300);
    })
});