$(document).ready(function() {


    // start js for navbar //

    $(".menu-button").click(function() {
        $(".menu-screen").addClass("active");
    });

    // Remove Active Class
    $(".close-button").click(function() {
        $(".menu-screen").removeClass("active");
    });


    // end  js for navbar //


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // start tabs js //

    // tabs

    var tabLinks = document.querySelectorAll(".tablinks");
    var tabContent = document.querySelectorAll(".tabcontent");


    tabLinks.forEach(function(el) {
        el.addEventListener("click", openTabs);
    });


    function openTabs(el) {
        var btnTarget = el.currentTarget;
        var country = btnTarget.dataset.country;

        tabContent.forEach(function(el) {
            el.classList.remove("active");
        });

        tabLinks.forEach(function(el) {
            el.classList.remove("active");
        });

        document.querySelector("#" + country).classList.add("active");

        btnTarget.classList.add("active");
    }


    // end tabs js //


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // start services carousel //
    if ($(window).width() < 991) {
    $('.services').owlCarousel({
        margin: 10,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<span class='lnr lnr-chevron-right right-arrow'></span>", "<span class='lnr lnr-chevron-left left-arrow'></span>"],
        responsive: {
            0: {

                items: 1
            },
            600: {

                items: 1
            },
            1200: {

                items: 1
            }

        }
    })
    }

    // end services carousel //
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    /// wow js ///
    new WOW().init();
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////