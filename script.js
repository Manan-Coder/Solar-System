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
const mars = document.getElementById("mars-text")
const marscard = document.getElementById("mars-card")
const jupiter = document.getElementById("jupiter-text")
const jupitercard = document.getElementById("jupiter-card")
const saturn = document.getElementById("saturn-text")
const saturncard = document.getElementById("saturn-card")
const uranus = document.getElementById("uranus-text")
const uranuscard = document.getElementById("uranus-card")
const neptune = document.getElementById("neptune-text")
const neptunecard = document.getElementById("neptune-card")
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
    marscard.style.opacity = "0"
    setTimeout(() => {
        marscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    jupitercard.style.opacity = "0"
    setTimeout(() => {
        jupitercard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    saturncard.style.opacity = "0"
    setTimeout(() => {
        saturncard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    saturncard.style.opacity = "0"
    setTimeout(() => {
        saturncard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    uranuscard.style.opacity = "0"
    setTimeout(() => {
        uranuscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
})

universe.addEventListener('click', () => {
    event.preventDefault()
    setTimeout(() => { universe.style.filter = "none" }, 150)

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
    marscard.style.opacity = "0"
    setTimeout(() => {
        marscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    jupitercard.style.opacity = "0"
    setTimeout(() => {
        jupitercard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    saturncard.style.opacity = "0"
    setTimeout(() => {
        saturncard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    neptunecard.style.opacity = "0"
    setTimeout(() => {
        neptunecard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    uranuscard.style.opacity = "0"
    setTimeout(() => {
        uranuscard.style.visibility = "hidden"; // Hide it after animation ends
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
    marscard.style.opacity = "0"
    setTimeout(() => {
        marscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    jupitercard.style.opacity = "0"
    setTimeout(() => {
        jupitercard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    saturncard.style.opacity = "0"
    setTimeout(() => {
        saturncard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    neptunecard.style.opacity = "0"
    setTimeout(() => {
        neptunecard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    uranuscard.style.opacity = "0"
    setTimeout(() => {
        uranuscard.style.visibility = "hidden"; // Hide it after animation ends
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
    marscard.style.opacity = "0"
    setTimeout(() => {
        marscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    jupitercard.style.opacity = "0"
    setTimeout(() => {
        jupitercard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    saturncard.style.opacity = "0"
    setTimeout(() => {
        saturncard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    neptunecard.style.opacity = "0"
    setTimeout(() => {
        neptunecard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    uranuscard.style.opacity = "0"
    setTimeout(() => {
        uranuscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
})

earth.addEventListener('click', () => {
    console.log("clicked")
    earthcard.style.visibility = "visible"

    setTimeout(() => { universe.style.filter = "blur(5px)" }, 150)
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
    marscard.style.opacity = "0"
    setTimeout(() => {
        marscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    jupitercard.style.opacity = "0"
    setTimeout(() => {
        jupitercard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    saturncard.style.opacity = "0"
    setTimeout(() => {
        saturncard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    neptunecard.style.opacity = "0"
    setTimeout(() => {
        neptunecard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    uranuscard.style.opacity = "0"
    setTimeout(() => {
        uranuscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
})

mars.addEventListener('click', () => {
    console.log("clicked")
    marscard.style.visibility = "visible"

    setTimeout(() => { universe.style.filter = "blur(5px)" }, 150)
    marscard.style.opacity = "1"
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
    earthcard.style.opacity = "0"
    setTimeout(() => {
        earthcard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    jupitercard.style.opacity = "0"
    setTimeout(() => {
        jupitercard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    saturncard.style.opacity = "0"
    setTimeout(() => {
        saturncard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    neptunecard.style.opacity = "0"
    setTimeout(() => {
        neptunecard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    uranuscard.style.opacity = "0"
    setTimeout(() => {
        uranuscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
})
jupiter.addEventListener('click', () => {
    console.log("clicked")
    jupitercard.style.visibility = "visible"

    setTimeout(() => { universe.style.filter = "blur(5px)" }, 150)
    jupitercard.style.opacity = "1"
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
    earthcard.style.opacity = "0"
    setTimeout(() => {
        earthcard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    marscard.style.opacity = "0"
    setTimeout(() => {
        marscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    saturncard.style.opacity = "0"
    setTimeout(() => {
        saturncard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    neptunecard.style.opacity = "0"
    setTimeout(() => {
        neptunecard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    uranuscard.style.opacity = "0"
    setTimeout(() => {
        uranuscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
})
saturn.addEventListener('click', () => {
    console.log("clicked")
    saturncard.style.visibility = "visible"

    setTimeout(() => { universe.style.filter = "blur(5px)" }, 150)
    saturncard.style.opacity = "1"
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
    earthcard.style.opacity = "0"
    setTimeout(() => {
        earthcard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    marscard.style.opacity = "0"
    setTimeout(() => {
        marscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    jupitercard.style.opacity = "0"
    setTimeout(() => {
        jupitercard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    neptunecard.style.opacity = "0"
    setTimeout(() => {
        neptunecard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    uranuscard.style.opacity = "0"
    setTimeout(() => {
        uranuscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);

})

uranus.addEventListener('click', () => {
    console.log("clicked")
    uranuscard.style.visibility = "visible"

    setTimeout(() => { universe.style.filter = "blur(5px)" }, 150)
    uranuscard.style.opacity = "1"
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
    earthcard.style.opacity = "0"
    setTimeout(() => {
        earthcard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    marscard.style.opacity = "0"
    setTimeout(() => {
        marscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    jupitercard.style.opacity = "0"
    setTimeout(() => {
        jupitercard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    neptunecard.style.opacity = "0"
    setTimeout(() => {
        neptunecard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    neptunecard.style.opacity = "0"
    setTimeout(() => {
        neptunecard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);

})
neptune.addEventListener('click', () => {
    console.log("clicked")
    neptunecard.style.visibility = "visible"

    setTimeout(() => { universe.style.filter = "blur(5px)" }, 150)
    neptunecard.style.opacity = "1"
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
    earthcard.style.opacity = "0"
    setTimeout(() => {
        earthcard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    marscard.style.opacity = "0"
    setTimeout(() => {
        marscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    jupitercard.style.opacity = "0"
    setTimeout(() => {
        jupitercard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    saturncard.style.opacity = "0"
    setTimeout(() => {
        saturncard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);
    uranuscard.style.opacity = "0"
    setTimeout(() => {
        uranuscard.style.visibility = "hidden"; // Hide it after animation ends
    }, 500);

})