$(window).load(function () {

    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system");

    var init = function () {
        body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function () {
            $(this).removeClass('hide-UI').addClass("set-speed");
            $(this).dequeue();
        });
    };

    var setView = function (view) { universe.removeClass().addClass(view); };

    $("#toggle-data").click(function (e) {
        body.toggleClass("data-open data-close");
        e.preventDefault();
    });

    $("#toggle-controls").click(function (e) {
        body.toggleClass("controls-open controls-close");
        e.preventDefault();
    });

    $("#data a").click(function (e) {
        var ref = $(this).attr("class");
        solarsys.removeClass().addClass(ref);
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $(".set-view").click(function () { body.toggleClass("view-3D view-2D"); });
    $(".set-zoom").click(function () { body.toggleClass("zoom-large zoom-close"); });
    $(".set-speed").click(function () { setView("scale-stretched set-speed"); });
    $(".set-size").click(function () { setView("scale-s set-size"); });
    $(".set-distance").click(function () { setView("scale-d set-distance"); });

    init();

});


const sun = document.getElementById("sun-text")
const suncard = document.getElementById("sun-card")
const universe = document.getElementById("universe")
const mercury = document.getElementById("mercury-text")
const mercurycard = document.getElementById("merc-card")
const venuscard = document.getElementById("venus-card")
const venus = document.getElementById("venus-text")
const earthcard = document.getElementById("earth-card")
const earth = document.getElementById("earth-text")
sun.addEventListener('click', () => {
    event.preventDefault();
    suncard.style.visibility = "visible"
    universe.style.filter = "blur(5px)"
    suncard.style.opacity = "1"
    mercurycard.style.opacity = "0"
    setTimeout(() => {
        mercurycard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    venuscard.style.opacity = "0"
    setTimeout(() => {
        venuscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    earthcard.style.opacity = "0"
    setTimeout(() => {
        earthcard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
})

universe.addEventListener('click', () => {
    event.preventDefault()
    universe.style.filter = "none"
    suncard.style.opacity = "0"
    mercurycard.style.opacity = "0"
    setTimeout(() => {
        suncard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    setTimeout(() => {
        mercurycard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    venuscard.style.opacity = "0"
    setTimeout(() => {
        venuscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    earthcard.style.opacity = "0"
    setTimeout(() => {
        earthcard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
})
mercury.addEventListener('click', () => {
    event.preventDefault();
    mercurycard.style.visibility = "visible"
    universe.style.filter = "blur(5px)"
    mercurycard.style.opacity = "1"
    suncard.style.opacity = "0"
    setTimeout(() => {
        suncard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    venuscard.style.opacity = "0"
    setTimeout(() => {
        venuscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    earthcard.style.opacity = "0"
    setTimeout(() => {
        earthcard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
})

venus.addEventListener('click', () => {
    console.log("clicked")
    venuscard.style.visibility = "visible"
    universe.style.filter = "blur(5px)"
    venuscard.style.opacity = "1"
    suncard.style.opacity = "0"
    setTimeout(() => {
        suncard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    mercurycard.style.opacity = "0"
    setTimeout(() => {
        mercurycard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    earthcard.style.opacity = "0"
    setTimeout(() => {
        earthcard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
})

earth.addEventListener('click', () => {
    console.log("clicked")
    earthcard.style.visibility = "visible"
    universe.style.filter = "blur(5px)"
    earthcard.style.opacity = "1"
    suncard.style.opacity = "0"
    setTimeout(() => {
        suncard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    mercurycard.style.opacity = "0"
    setTimeout(() => {
        mercurycard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    venuscard.style.opacity = "0"
    setTimeout(() => {
        venuscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
})
