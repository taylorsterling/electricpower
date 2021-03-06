$(document).ready(function () {

    $(document).foundation();


    $("#largeSwitch").click(function () {
        if ($(".switch-active").css('display') == 'none' || $(".switch-active").css("visibility") == "hidden") {
            
            $(".topbar-responsive").css("background-color", "#2c3840");
            $(".menu").css("background-color", "#2c3840");
            $("h2").css("color", "white");
            $("#introtext").css("color", "white");
            $("#introsection").css("background-color", "#585d60");
            $("#togglesection").css("background-color", "#f0f0f0");
            $("h4").css("color", "black");
            $(".card").css("color", "white");
            $(".cardModal").css("color", "white");
            $(".cardModal").css("border-color", "white");
            $("#concludesection").css("background-color", "#585d60");
            $("#footer").css("background-color", "#2c3840");
            $(".cardImg").removeClass("glowEffect");
            $(".switch").removeClass("glowEffect");
            $("#wires").removeClass("glowEffect");

       
        }else {

            $(".topbar-responsive").css("background-color", "#585d60");
            $(".menu").css("background-color", "#585d60");
            $("h2").css("color", "black");
            $("#introtext").css("color", "black");
            $("#introsection").css("background-color", "#f0f0f0");
            $("#togglesection").css("background-color", "#b0b2b3");
            $("h4").css("color", "white");
            $(".card").css("color", "black");
            $(".cardModal").css("color", "black");
            $(".cardModal").css("border-color", "black");
            $("#concludesection").css("background-color", "#f0f0f0");
            $("#footer").css("background-color", "#585d60");
            $(".cardImg").addClass("glowEffect");
            $(".switch").addClass("glowEffect");
            $("#wires").addClass("glowEffect");

        }
    });


    // For smooth scrolling from links
    $("#toIntro").on('click', function (event) {

        $('html, body').animate({
            scrollTop: $("#introsection").offset().top - $(".topbar-responsive").height()
        }, 'slow');

    });

    $("#toToggle").on('click', function (event) {

        $('html, body').animate({
            scrollTop: $("#togglesection").offset().top - $(".topbar-responsive").height()
        }, 'slow');

    });

    $("#toConclude").on('click', function (event) {

        $('html, body').animate({
            scrollTop: $("#concludesection").offset().top - $(".topbar-responsive").height()
        }, 'slow');

    });


});

